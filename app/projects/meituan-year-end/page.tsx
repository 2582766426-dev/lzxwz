export const dynamic = 'force-static';
import {GradualBlur} from '../../../components/gradual-blur';
import { ArrowLeft,ArrowRight } from 'lucide-react';
export default function MeituanYearEnd(){
 return <main className="case-page">
  <header className="case-nav shell"><a href="/">LZX <span>VISUAL DESIGN</span></a><nav><a href="/#about">关于我</a><a href="/#projects">精选项目</a><a href="/#selected-work">项目分类</a></nav><a className="case-contact" href="mailto:2582766426@qq.com">联系我 ↗</a></header>
  <section className="case-hero shell"><div className="case-copy"><a href="/#projects"><ArrowLeft size={16}/> 返回项目</a><small>MEITUAN CAMPAIGN</small><h1>CAMPAIGN<br/>DESIGN</h1><h2>美团年终狂欢季</h2><p>美团圈圈活动营销设计<br/>以年货市集与 IP 互动，打造热闹鲜明的活动体验。</p><div><span>活动视觉</span><span>IP 场景</span><span>优惠福利</span></div></div><img src="/meituan-year-end.webp" alt="美团年终狂欢季主视觉"/></section>
  <section className="case-body shell"><article><b>01</b><div><small>PROJECT BACKGROUND</small><h2>项目背景</h2><p>以年货市集与 IP 互动为核心，通过热闹的市集场景与节庆元素，传递年味与优惠福利，提升用户参与感与活动吸引力。</p></div></article><article><b>02</b><div><small>CAMPAIGN VISUAL</small><h2>活动主视觉</h2><img src="/meituan-year-end.webp" alt="美团年终狂欢季活动主视觉"/></div></article><article><b>03</b><div><small>VISUAL DETAILS</small><h2>视觉细节</h2><div className="case-detail-grid">{['市集场景','IP 形象','活动元素'].map((x,i)=><figure key={x}><img src="/meituan-year-end.webp" alt={x} style={{objectPosition:`${i*38}% center`}}/><figcaption>{x}</figcaption></figure>)}</div></div></article></section>
  <footer className="case-next"><span>LZX VISUAL DESIGN</span><a href="/#projects">NEXT PROJECT <ArrowRight/></a><small>DESIGN · BRAND · VISUAL</small></footer>
 <GradualBlur/></main>;
}

