'use client';
import { useEffect, useRef } from 'react';

// A low-resolution character field inspired by the supplied GradientASCII reference.
export function AmbientField({light=false}:{light?:boolean}) {
 const canvas=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const el=canvas.current,ctx=el?.getContext('2d');if(!el||!ctx)return;
  let frame=0,visible=false,last=0,width=0,height=0;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const resize=()=>{width=el.clientWidth;height=el.clientHeight;el.width=width;el.height=height;};
  const paint=(time:number)=>{
   if(!visible||document.hidden)return;
   if(time-last>65||reduced.matches){last=time;ctx.clearRect(0,0,width,height);ctx.font='12px monospace';
    const t=reduced.matches?0:time*.00016;
    for(let y=0;y<height;y+=26)for(let x=0;x<width;x+=22){
     const v=(Math.sin(x*.006+t)+Math.cos(y*.009-t*1.3)+Math.sin((x+y)*.004+t)) / 3;
     const alpha=Math.max(0,v-.03)*.27; if(alpha<.025)continue;
     ctx.fillStyle=light?`rgba(23,104,231,${alpha})`:`rgba(206,238,255,${alpha})`;
     ctx.fillText('· + × = #'[Math.min(8,Math.floor((v+1)*4))],x,y);
    }
   }
   if(!reduced.matches)frame=requestAnimationFrame(paint);
  };
  const wake=()=>{cancelAnimationFrame(frame);if(visible&&!document.hidden)frame=requestAnimationFrame(paint);};
  const ro=new ResizeObserver(()=>{resize();wake();});ro.observe(el);
  const io=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;wake();});io.observe(el);
  document.addEventListener('visibilitychange',wake);reduced.addEventListener('change',wake);
  return()=>{cancelAnimationFrame(frame);ro.disconnect();io.disconnect();document.removeEventListener('visibilitychange',wake);reduced.removeEventListener('change',wake);};
 },[light]);
 return <div className={`ambient-field${light?' ambient-field--light':''}`} aria-hidden="true"><div className="ambient-field__flow"/><canvas ref={canvas}/></div>;
}
