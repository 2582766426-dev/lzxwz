'use client';
import { useRef } from 'react';
import { Fingerprint, BadgeCheck, ArrowUpRight } from 'lucide-react';
export function ReflectiveProfile() {
 const card = useRef<HTMLElement>(null);
 const reset = () => { const el=card.current; if(el){el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg');el.style.setProperty('--shine-x','50%');el.style.setProperty('--shine-y','30%');} };
 return <div className="reflective-profile">
  <article ref={card} className="reflective-profile__card" onPointerMove={e=>{
   if(e.pointerType==='touch'||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
   const rect=e.currentTarget.getBoundingClientRect(), x=(e.clientX-rect.left)/rect.width,y=(e.clientY-rect.top)/rect.height;
   e.currentTarget.style.setProperty('--rx',`${(0.5-y)*14}deg`);e.currentTarget.style.setProperty('--ry',`${(x-0.5)*18}deg`);
   e.currentTarget.style.setProperty('--shine-x',`${x*100}%`);e.currentTarget.style.setProperty('--shine-y',`${y*100}%`);
  }} onPointerLeave={reset}>
   <div className="reflective-profile__sheen" aria-hidden="true"/>
   <header><span><BadgeCheck size={17}/> DESIGNER PROFILE</span><small><i/> OPEN TO CREATE</small></header>
   <div className="reflective-profile__portrait"><img src="/liuzhixi-photo.jpg" alt="柳智熙个人照片" draggable={false}/><span>01 / LZX</span></div>
   <div className="reflective-profile__identity"><p>VISUAL · BRAND · AI</p><h3>LIU ZHIXI <ArrowUpRight size={28}/></h3><strong>柳智熙</strong><span>用设计连接品牌与用户</span></div>
   <footer><div><small>DESIGN DEPARTMENT</small><b>2023-2026 / 长沙</b></div><Fingerprint size={34} strokeWidth={1.2}/></footer>
  </article><p className="reflective-profile__hint">移动鼠标 · 探索光影</p>
 </div>;
}
