'use client';
import { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {GradualBlur} from './gradual-blur';
import { ArrowLeft } from 'lucide-react';

const products = [
 {name:'清润饮品',file:'清润.webp',left:'31.3%',top:'49.4%'},
 {name:'活妍饮品',file:'活研.webp',left:'77.5%',top:'49.4%'},
 {name:'葆芯饮品',file:'葆原.webp',left:'31.3%',top:'87.3%'},
 {name:'葆明饮品',file:'葆明.webp',left:'77.5%',top:'87.3%'},
];

export function CaseOverlay({open,src,label,onClose}:{open:boolean;src:string;label:string;onClose:()=>void}){
 const dialog=useRef<HTMLDialogElement>(null),scroller=useRef<HTMLDivElement>(null),close=useRef(onClose);
 const [product,setProduct]=useState<(typeof products)[number]|null>(null);
 const [loaded,setLoaded]=useState('');
 const [failed,setFailed]=useState('');
 const imageSrc=product?`/nutrilite/${product.file}`:src;
 const cropped=src.includes('nutrilite')||src.includes('kleenex');
 const parentScroll=useRef(0),trigger=useRef<HTMLButtonElement|null>(null);
 const isSeries=src.includes('nutrilite-detail');
 const goBack=()=>{if(product){setProduct(null);}else close.current();};
 const back=useRef(goBack);back.current=goBack;
 useLayoutEffect(()=>{setProduct(null);parentScroll.current=0;trigger.current=null;},[open,src]);
 useLayoutEffect(()=>{
  if(!scroller.current)return;
  scroller.current.scrollTop=product?0:parentScroll.current;
  if(product)dialog.current?.querySelector<HTMLButtonElement>('.art-case__nav button')?.focus({preventScroll:true});
  else trigger.current?.focus({preventScroll:true});
 },[product]);
 close.current=onClose;
 useLayoutEffect(()=>{
  if(!open||!dialog.current||!scroller.current)return;
  const modal=dialog.current,previous=document.activeElement as HTMLElement|null;
  const body=document.body, y=window.scrollY, x=window.scrollX;
  const saved={position:body.style.position,top:body.style.top,left:body.style.left,width:body.style.width,overflow:body.style.overflow};
  Object.assign(body.style,{position:'fixed',top:`-${y}px`,left:`-${x}px`,width:'100%',overflow:'hidden'});
  modal.showModal();scroller.current.scrollTop=0;
  modal.querySelector<HTMLButtonElement>('.art-case__nav button')?.focus({preventScroll:true});
  return()=>{modal.close();Object.assign(body.style,saved);window.scrollTo({top:y,left:x,behavior:'instant'});previous?.focus({preventScroll:true})};
 },[open,src]);
 if(!open)return null;
 return createPortal(<dialog ref={dialog} className={`art-case art-case--plain${src.includes('mellowpal')?' art-case--native-ip':''}`} aria-label={`${product?.name||label}完整案例`} onCancel={e=>{e.preventDefault();back.current()}}>
  <header className="art-case__nav"><a href="/#about" onClick={()=>close.current()}>LZX <small>VISUAL DESIGN</small></a><nav aria-label="案例导航"><a href="/#about" onClick={()=>close.current()}>关于我</a><a href="/#projects" onClick={()=>close.current()}>精选项目</a><a href="/#selected-work" onClick={()=>close.current()}>项目分类</a></nav><button type="button" onClick={goBack}><ArrowLeft size={16}/> {product?'返回系列案例':'返回上一页'}</button></header>
  <div className="art-case__scroll" ref={scroller}>
   {loaded!==imageSrc&&<div className="case-loading" role="status">{failed===imageSrc?<span>图片加载失败，请返回后重试。</span>:<><i/>正在加载高清案例，请稍候…</>}</div>}
   <div style={{overflow:'hidden'}}><figure className="art-case__artwork" style={cropped?{marginTop:product?'-5.7%':src.includes('kleenex')?'-5.7%':'-3.65%'}:undefined}>
    <img key={imageSrc} src={imageSrc} onLoad={()=>setLoaded(imageSrc)} onError={()=>setFailed(imageSrc)} alt={`${product?.name||label}完整项目页面`}/>
    {isSeries&&!product&&products.map((item,index)=><button type="button" key={item.file} className="nutrilite-case-link" style={{position:'absolute',zIndex:2,left:index%2===0?'4.4%':'50.6%',top:index<2?'18.65%':'56.55%',width:'45.1%',height:'36.1%',background:'transparent',border:0,cursor:'pointer'}} aria-label={`查看纽崔莱${item.name}完整案例`} onClick={event=>{parentScroll.current=scroller.current?.scrollTop||0;trigger.current=event.currentTarget;setProduct(item);}}/>)}
    {product&&<><button className="nutrilite-top-return" aria-label="返回系列案例" onClick={goBack}/><button className="nutrilite-bottom-return" aria-label="返回系列案例" onClick={goBack}/><button className="nutrilite-back-top" aria-label="回到案例顶部" onClick={()=>scroller.current?.scrollTo({top:0,behavior:'smooth'})}/></>}
    {!isSeries&&!src.includes('jiushi')&&<button className="art-case__return-hotspot" style={src.includes('mellowpal')?{left:'64%',width:'18.5%',bottom:'.6%',height:'.8%'}:src.includes('flipcard')?{bottom:'.8%',height:'.95%'}:undefined} aria-label="返回上一页" type="button" onClick={()=>close.current()}/>}
   </figure></div>
   {(src.includes('jiushi')||isSeries)&&<div className="case-return-footer"><button type="button" onClick={goBack}><ArrowLeft size={16}/> {product?'返回系列案例':'返回上一页'}</button></div>}
  </div>
 <GradualBlur key={imageSrc}/></dialog>,document.body);
}

