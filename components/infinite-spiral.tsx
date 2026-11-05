'use client';

import { useState } from 'react';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';
import CircularCarousel from './CircularCarousel';
import { CaseOverlay } from './case-overlay';

type Project = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  caseStudy?: string;
  href?: string;
};

const projects: Project[] = [
  { src: '/year-end-campaign-cover.webp', alt: '美团年终狂欢季', title: '美团年终狂欢季', subtitle: '营销活动视觉设计', caseStudy: '/meituan-final.webp' },
  { src: '/spring-carwash-cover.webp', alt: '美团春节自助洗车', title: '美团春节自助洗车', subtitle: '春节活动营销设计', caseStudy: '/carwash-final.webp' },
  { src: '/flipcard-fan.webp', alt: '美团新春集卡翻卡活动', title: '美团新春集卡翻卡活动', subtitle: '新春互动活动设计', caseStudy: '/flipcard-detail.webp' },
  { src: '/jiushi-cover.webp', alt: '酒拾烤肉新春视觉焕新', title: '酒拾烤肉新春视觉焕新', subtitle: '品牌新春视觉设计', caseStudy: '/jiushi-detail.webp' },
  { src: '/nutrilite-cover.webp', alt: '纽崔莱系列详情页设计', title: '纽崔莱系列详情页设计', subtitle: '营养品电商视觉设计', caseStudy: '/nutrilite-detail.webp' },
  { src: '/mellowpal-cover.webp', alt: 'MELLOWPAL 运动伙伴 IP 延展设计', title: 'MELLOWPAL 运动伙伴', subtitle: 'IP 形象与延展设计', caseStudy: '/mellowpal-detail.webp' },
  { src: '/kleenex-cover.webp', alt: '舒洁小熊系列', title: '舒洁小熊系列', subtitle: '小红书视觉设计', caseStudy: '/kleenex-detail.webp' },
];

export function InfiniteSpiral() {
  const [playing, setPlaying] = useState(true);
  const [caseOpen, setCaseOpen] = useState<{ src: string; label: string } | null>(null);

  const openProject = (item: Project) => {
    if (item.caseStudy) {
      setCaseOpen({ src: item.caseStudy, label: item.title });
    } else if (item.href) {
      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="selected-carousel">
      <div className="selected-carousel__topline"><span>VISUAL IN MOTION</span><small>2025 — 2026 / SELECTED ARCHIVE</small></div>
      <CircularCarousel
        className="portfolio-carousel"
        items={projects}
        preset="cylinder"
        intro="rise"
        cardWidth={440}
        aspectRatio={440 / 333}
        gap={24}
        curve={1}
        tilt={-5}
        perspective={2500}
        autoplay={playing ? 'drift' : 'off'}
        speed={8}
        draggable
        momentum={0.55}
        snap
        pauseOnHover
        focusOnClick={false}
        parallax={0.18}
        stretch={0.15}
        depthFade={0.6}
        fadeColor="#dcefff"
        innerShade={0.72}
        cornerRadius={14}
        captions
        onItemClick={openProject}
      />
      <div className="selected-carousel__footer">
        <p><MousePointer2 size={18} /><span>拖动切换作品 · 点击卡片查看完整项目</span><ArrowUpRight size={17} /></p>
        <button type="button" onClick={() => setPlaying(value => !value)} aria-pressed={!playing}>{playing ? '暂停轮播' : '继续播放'}</button>
      </div>
      <CaseOverlay open={Boolean(caseOpen)} src={caseOpen?.src || ''} label={caseOpen?.label || ''} onClose={() => setCaseOpen(null)} />
    </div>
  );
}
