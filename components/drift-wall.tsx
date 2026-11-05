'use client';
import { useEffect,useMemo,useRef } from 'react';
const images=['/project-brand.jpg','/project-social.webp','/project-ai.webp'];
export function DriftWall(){
 const root=useRef<HTMLDivElement>(null);
 const columns=useMemo(()=>Array.from({length:5},(_,c)=>Array.from({length:6},(_,i)=>({image:images[(c+i)%images.length],id:`${c}-${i}`}))),[]);
 useEffect(()=>{const el=root.current;if(!el||matchMedia('(prefers-reduced-motion: reduce)').matches)return;let frame=0;const move=(e:PointerEvent)=>{const r=el.getBoundingClientRect();const x=((e.clientX-r.left)/r.width-.5)*7;const y=((e.clientY-r.top)/r.height-.5)*-5;cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{el.style.setProperty('--pointer-turn',`${x}deg`);el.style.setProperty('--pointer-tilt',`${y}deg`)})};const reset=()=>{el.style.setProperty('--pointer-turn','0deg');el.style.setProperty('--pointer-tilt','0deg')};el.addEventListener('pointermove',move);el.addEventListener('pointerleave',reset);return()=>{cancelAnimationFrame(frame);el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',reset)}},[]);
 return <div className="drift-wall" ref={root} data-reveal="image"><div className="drift-plane">{columns.map((column,c)=><div className="drift-column" key={c}><div className="drift-track">{[...column,...column].map((item,i)=><figure className="drift-tile" key={`${item.id}-${i}`}><img src={item.image} alt="柳智熙精选视觉作品" loading="lazy"/><figcaption>{String((c*6+i)%12+1).padStart(2,'0')}</figcaption></figure>)}</div></div>)}</div><div className="drift-vignette" aria-hidden="true"/><div className="drift-caption"><span>SELECTED VISUAL ARCHIVE</span><strong>MOVE TO EXPLORE</strong></div></div>
}
