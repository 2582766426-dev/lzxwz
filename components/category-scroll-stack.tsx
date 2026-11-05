'use client';
import { type CSSProperties } from 'react';
const categories=[
 {title:'内容品牌运营',en:'CONTENT BRANDING',text:'以内容连接品牌与用户，构建持续、有辨识度的品牌表达。',image:'/category-part-01-content-branding.webp'},
 {title:'商业视觉传播',en:'VISUAL COMMUNICATION',text:'以鲜明视觉语言传递品牌信息，让创意在不同媒介中有效触达。',image:'/category-part-02-visual-communication.webp'},
 {title:'电商体验设计',en:'E-COMMERCE EXPERIENCE',text:'围绕商品与用户旅程，打造清晰、愉悦且高效的线上购物体验。',image:'/category-part-03-ecommerce-experience.webp'},
 {title:'整合营销创意',en:'INTEGRATED CAMPAIGN',text:'整合多触点创意与传播内容，让每一次活动形成完整体验。',image:'/category-part-04-integrated-campaign.webp'},
];
export function CategoryScrollStack(){
 return <div className="category-stack"><nav className="category-jumps" aria-label="项目分类目录">{categories.map((item,i)=><a href={`#category-${i}`} key={item.en}><span>0{i+1}</span>{item.title}<b>↗</b></a>)}</nav><div className="category-stack-cards">{categories.map((item,i)=><article id={`category-${i}`} className="category-stack-card" key={item.en} style={{'--order':i} as CSSProperties}><div className="category-stack-copy"><span className="stack-number">0{i+1}</span><small>{item.en}</small><h3>{item.title}</h3><p>{item.text}</p><span className="stack-footer">LIU ZHIXI / PORTFOLIO <b>↗</b></span></div><div className="category-media"><img src={item.image} alt={`${item.title}作品`} loading="eager"/></div></article>)}</div></div>;
}
