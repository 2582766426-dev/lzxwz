'use client';
import { useEffect,useRef,useState,type CSSProperties } from 'react';
const pool=['/meituan-year-end.webp','/project-brand.jpg','/project-social.webp','/project-ai.webp','/jiushi-cover.webp','/flipcard-fan.webp','/spring-carwash-cover.webp'];
const columns=28,rows=5;
function tileStyle(index:number,progress:number,width:number):CSSProperties{
 const col=Math.floor(index/rows),row=index%rows;
 const longitude=(col-progress+(row%2)*.5)*Math.PI*2/columns,latitude=(row-2)*.36;
 const facing=Math.cos(longitude),depth=facing*Math.cos(latitude),projection=1/(1-.2*depth);
 const fit=Math.min(1,width/1200),radiusX=width*.47,radiusY=390*fit;
 const x=Math.sin(longitude)*Math.cos(latitude)*radiusX*projection,y=Math.sin(latitude)*radiusY*projection;
 const yaw=Math.atan2(Math.sin(longitude),facing)*180/Math.PI;
 return {width:`${width*.087}px`,height:`${126*fit}px`,transform:`translate(-50%,-50%) translate(${x}px,${y}px) perspective(900px) rotateY(${yaw}deg) rotateX(${-latitude*180/Math.PI}deg) scale(${projection})`,filter:`brightness(${.65+Math.max(0,depth)*.4})`,opacity:facing<=0?0:Math.min(1,facing*5),visibility:facing<=0?'hidden':'visible',zIndex:Math.round((depth+1)*100)};
}
export function DomeGallery(){
 const root=useRef<HTMLDivElement>(null),tiles=useRef<(HTMLElement|null)[]>([]),progress=useRef(0),drag=useRef(false),last=useRef(0);
 const [paused,setPaused]=useState(false);
 useEffect(()=>{
  const el=root.current;if(!el)return;let frame=0,prev=performance.now(),width=el.clientWidth,visible=true;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const paint=()=>tiles.current.forEach((tile,i)=>{if(tile)Object.assign(tile.style,tileStyle(i,progress.current,width))});
  const resize=new ResizeObserver(()=>{width=el.clientWidth;paint()});resize.observe(el);
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting});observer.observe(el);
  const tick=(time:number)=>{const dt=Math.min((time-prev)/1000,.05);prev=time;if(visible&&!document.hidden){if(!drag.current&&!paused&&!reduced.matches)progress.current+=dt*.32;paint()}frame=requestAnimationFrame(tick)};
  paint();frame=requestAnimationFrame(tick);return()=>{cancelAnimationFrame(frame);resize.disconnect();observer.disconnect()};
 },[paused]);
 return <div className="dome-gallery" ref={root} role="region" aria-label="左右循环的弧面作品墙"
 onPointerDown={e=>{if(e.pointerType==='touch'||e.button!==0||(e.target as HTMLElement).closest('button'))return;drag.current=true;last.current=e.clientX;e.currentTarget.setPointerCapture(e.pointerId)}}
 onPointerMove={e=>{if(drag.current){progress.current-=(e.clientX-last.current)/160;last.current=e.clientX}}}
 onPointerUp={()=>{drag.current=false}} onPointerCancel={()=>{drag.current=false}}>
 <div className="dome-surface">{Array.from({length:columns*rows},(_,i)=><figure className="dome-image" key={i} style={tileStyle(i,0,1300)} ref={el=>{tiles.current[i]=el}}><img src={pool[(Math.floor(i/rows)+i%rows)%pool.length]} alt="其他视觉作品" draggable={false}/></figure>)}</div>
 <div className="dome-guide"><span>左右拖动 · 循环浏览</span><div className="dome-controls"><button onClick={()=>{progress.current-=1}} aria-label="向左浏览">←</button><button onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?'继续播放':'暂停播放'}</button><button onClick={()=>{progress.current+=1}} aria-label="向右浏览">→</button></div></div>
 </div>;
}
