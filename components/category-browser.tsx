'use client';
import {useState,useRef,useEffect,type CSSProperties} from 'react';
import {createPortal} from 'react-dom';
import CategorySpiral from './CategorySpiral';
const groups=[
 {name:'内容品牌运营',image:'/category-part-01-content-branding.webp',items:[['舒洁小熊系列','/kleenex-cover.webp'],['美团年终狂欢季','/year-end-campaign-cover.webp'],['新春集卡翻卡活动','/flipcard-fan.webp']]},
 {name:'商业视觉传播',image:'/category-part-02-visual-communication.webp',items:[['酒拾烤肉新春视觉','/jiushi-cover.webp'],['MELLOWPAL 运动伙伴','/mellowpal-cover.webp'],['美团春节自助洗车','/spring-carwash-cover.webp']]},
 {name:'电商体验设计',image:'/category-part-03-ecommerce-experience.webp',items:[['纽崔莱系列详情页','/nutrilite-cover.webp'],['清润与活妍','/hero-nutrilite.webp'],['舒洁小熊系列','/kleenex-cover.webp']]},
];
export function CategoryBrowser(){
 const [active,setActive]=useState<number|null>(null);const dialog=useRef<HTMLDialogElement>(null),track=useRef<HTMLDivElement>(null),drag=useRef<{x:number;scroll:number}|null>(null);
 useEffect(()=>{if(active===null)return;const el=dialog.current;const previous=document.activeElement as HTMLElement;const overflow=document.body.style.overflow;document.body.style.overflow='hidden';el?.showModal();if(track.current)track.current.scrollLeft=0;return()=>{el?.close();document.body.style.overflow=overflow;previous?.focus({preventScroll:true});};},[active]);
 useEffect(()=>{const el=track.current;if(!el)return;const wheel=(e:WheelEvent)=>{if(e.ctrlKey)return;e.preventDefault();el.scrollBy({left:(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY),behavior:'smooth'});};el.addEventListener('wheel',wheel,{passive:false});return()=>el.removeEventListener('wheel',wheel);},[active]);
 return <><div className="category-stack"><nav className="category-jumps category-jumps--three">{groups.map((g,i)=><button key={g.name} onClick={()=>setActive(i)}>0{i+1} / {g.name} ↗</button>)}</nav><div className="category-stack-cards">{groups.map((g,i)=><article id={`category-${i}`} className="category-stack-card" key={g.name} style={{'--order':i} as CSSProperties}><div className="category-stack-copy"><span className="stack-number">0{i+1}</span><small>{['CONTENT BRANDING','VISUAL COMMUNICATION','E-COMMERCE EXPERIENCE'][i]}</small><h3>{g.name}</h3><p>{['以内容连接品牌与用户，构建持续、有辨识度的品牌表达。','以鲜明视觉语言传递品牌信息，让创意在不同媒介中有效触达。','围绕商品与用户旅程，打造清晰、愉悦且高效的线上购物体验。'][i]}</p><button className="stack-footer" onClick={()=>setActive(i)}>进入作品目录 ↗</button></div><button className="category-media category-media-link" onClick={()=>setActive(i)} aria-label={`进入${g.name}`}><img src={g.image} alt={g.name}/></button></article>)}</div></div>
 {active!==null&&createPortal(<dialog ref={dialog} className="category-gallery" onCancel={e=>{e.preventDefault();setActive(null);}}><header><span>LZX / {groups[active].name}</span><button onClick={()=>setActive(null)}>← 返回目录</button></header><aside className="gallery-side gallery-side--left" aria-hidden="true"><small>SELECTED / 0{active+1}</small><strong>IDEAS<br/>IN MOTION.</strong><span>视觉探索 / 创意表达<br/>2025 — 2026</span><i>✳</i></aside><aside className="gallery-side gallery-side--right" aria-hidden="true"><small>THE VISUAL ARCHIVE</small><strong>{groups[active].name}</strong><span>DESIGN · DETAIL · DISCOVER<br/>让灵感，在画面之间流动</span><i>↗</i></aside><CategorySpiral key={active} items={Array.from({length:3},()=>groups[active].items).flat().map(([name,src],i)=>({id:i,src,alt:name,href:src,target:"_blank"}))} cardWidth={260} cardHeight={197} radius={220} verticalSpacing={105} cardsPerTurn={7} speed={0.22} animationMode="all" edgeBlur={3}/><p>↗ 点击图片查看大图 · 慢速自动轮播 · 滚轮或拖动切换</p></dialog>,document.body)}</>;
}



