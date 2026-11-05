'use client';
import {useEffect} from 'react';
export function MotionDirector(){
 useEffect(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const animations:Animation[]=[];const ease='cubic-bezier(.16,1,.3,1)';
  const play=(el:Element,frames:Keyframe[],delay=0,duration=1600)=>{animations.push(el.animate(frames,{duration,delay,easing:ease,fill:'backwards'}));};
  document.querySelectorAll('.opening-title>span').forEach((el,i)=>play(el,[{clipPath:'inset(100% 0 0 0)',transform:'translateY(110%) scaleY(.65) rotate(4deg)'},{clipPath:'inset(0)',transform:'translateY(0) scaleY(1) rotate(0deg)'}],180+i*240,1900));
  const stack=document.querySelector('.opening-stack');if(stack)play(stack,[{transform:'translateX(-50%) translateY(140px) scale(.78)',clipPath:'inset(100% 0 0)'},{transform:'translateX(-50%) translateY(0) scale(1)',clipPath:'inset(0)'}],650,2100);
  const subtitle=document.querySelector('.hero-subtitle');if(subtitle)play(subtitle,[{clipPath:'inset(0 100% 0 0)',transform:'translateX(-32px)'},{clipPath:'inset(0)',transform:'translateX(0)'}],900,1400);
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const section=entry.target;observer.unobserve(section);
   section.querySelectorAll('.section-kicker,.contact-title h2').forEach(el=>play(el,[{transform:'translateX(-100px) scaleX(.8)',clipPath:'inset(0 100% 0 0)'},{transform:'translateX(0) scaleX(1)',clipPath:'inset(0)'}],0,1700));
   section.querySelectorAll('[data-reveal="title"]').forEach(el=>{el.classList.add('is-revealed');if(!el.matches('.contact-title h2'))play(el,[{transform:'translateY(100px) rotate(3deg)',clipPath:'inset(100% 0 0)'},{transform:'translateY(0) rotate(0deg)',clipPath:'inset(0)'}],160,1700);});
   section.querySelectorAll('.brand-flip,.tool-card,.reflective-profile,.selected-carousel,.portfolio-drift-wall').forEach((el,i)=>{el.classList.add('is-revealed');play(el,[{transform:'translateY(100px) scale(.92)',clipPath:'inset(0 0 100% 0)'},{transform:'translateY(0) scale(1)',clipPath:'inset(0)'}],380+i*140,1800);});
  });},{threshold:.12});
  document.querySelectorAll('main>.section,main>footer').forEach(el=>observer.observe(el));
  return()=>{observer.disconnect();animations.forEach(a=>a.cancel());};
 },[]);return null;
}
