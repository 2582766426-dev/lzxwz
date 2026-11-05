'use client';

import { useState } from 'react';

const works = [
  { image: '/project-brand.jpg', no: '01', title: '品牌视觉', en: 'BRAND IDENTITY' },
  { image: '/project-social.webp', no: '02', title: '内容运营', en: 'CONTENT DESIGN' },
  { image: '/project-ai.webp', no: '03', title: 'AI 视觉', en: 'AIGC VISUAL' },
  { image: '/project-brand.jpg', no: '04', title: '品牌延展', en: 'VISUAL SYSTEM' },
  { image: '/project-social.webp', no: '05', title: '综合项目', en: 'SELECTED WORKS' },
];

export function AccordionGallery() {
  const [active, setActive] = useState(2);

  return (
    <div className="work-accordion" data-reveal="image" role="list" aria-label="精选作品">
      {works.map((work, index) => (
        <button
          className={`work-panel${active === index ? ' is-active' : ''}`}
          type="button"
          role="listitem"
          aria-pressed={active === index}
          key={`${work.no}-${work.title}`}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
        >
          <img src={work.image} alt={`${work.title}项目作品`} loading="lazy" draggable={false} />
          <span className="work-panel__shade" aria-hidden="true" />
          <span className="work-panel__index">{work.no}</span>
          <span className="work-panel__copy"><small>{work.en}</small><strong>{work.title}</strong><i>VIEW PROJECT ↗</i></span>
        </button>
      ))}
    </div>
  );
}
