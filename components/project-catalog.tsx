'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { no: '01', title: '品牌视觉', en: 'BRAND IDENTITY', text: '品牌系统、餐饮视觉与多触点物料设计', image: '/project-brand.jpg' },
  { no: '02', title: '内容运营', en: 'CONTENT DESIGN', text: '公众号视觉、社交媒体与营销内容设计', image: '/project-social.webp' },
  { no: '03', title: 'AI 设计', en: 'AIGC VISUAL', text: 'AI 概念生成、会展主视觉与延展物料', image: '/project-ai.webp' },
  { no: '04', title: '综合项目', en: 'SELECTED WORKS', text: '更多跨场景视觉项目，等待补充完整案例', image: null },
];

export function ProjectCatalog() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % categories.length), 4200);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div className="catalog" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="catalog-tabs" role="tablist" aria-label="项目分类">
        {categories.map((category, index) => (
          <button className={active === index ? 'is-active' : ''} type="button" role="tab" aria-selected={active === index} key={category.no} onClick={() => setActive(index)}>
            <span>{category.no}</span><strong>{category.title}</strong><small>{category.en}</small>
          </button>
        ))}
      </div>
      <div className="catalog-deck">
        {categories.map((category, index) => {
          const slot = (index - active + categories.length) % categories.length;
          return (
            <article className="catalog-card" key={category.no} style={{ '--slot': slot } as React.CSSProperties}>
              {category.image ? <img src={category.image} alt="" /> : <div className="catalog-placeholder"><span>YOUR WORK</span></div>}
              <div className="catalog-shade" />
              <div className="catalog-card__top"><span>{category.no}</span><span>{category.en}</span></div>
              <div className="catalog-card__bottom"><div><h3>{category.title}</h3><p>{category.text}</p></div><span><ArrowUpRight size={24} /></span></div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
