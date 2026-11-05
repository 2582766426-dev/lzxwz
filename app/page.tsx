import { ArrowUpRight, Mail } from 'lucide-react';
import { FloatingNav } from '@/components/floating-nav';
import { ReflectiveProfile as DraggableProfile } from '@/components/reflective-profile';
import { AmbientField } from '@/components/ambient-field';
import '@/components/portfolio-updates.css';
import { InfiniteSpiral } from '@/components/infinite-spiral';
import { MotionDirector } from '@/components/motion-director';
import { BrandBrowser as CategoryScrollStack } from '@/components/brand-browser';
import { PortfolioDriftWall } from '@/components/portfolio-drift-wall';

const designTools = [
  { mark: 'Ps', name: 'Photoshop' },
  { mark: 'Ai', name: 'Illustrator' },
  { mark: 'Pro', name: 'Procreate' },
  { mark: 'C4D', name: 'Cinema 4D' },
  { mark: 'GPT', name: 'ChatGPT' },
  { mark: '即梦', name: '即梦' },
  { mark: '小云雀', name: '小云雀' },
  { mark: 'MJ', name: 'Midjourney' },
  { mark: 'SD', name: 'Stable Diffusion' },
];

const heroFanImages = [
  '/flipcard-cover.webp',
  '/hero-kleenex.webp',
  '/year-end-live-poster.webp',
  '/hero-nutrilite.webp',
  '/jiushi-poster.webp',
  '/hero-mellowpal.webp',
  '/spring-carwash-poster.webp',
];

export default function Home() {
  return (
    <main>
      <MotionDirector />
      <FloatingNav />
      <section className="hero" id="top">
        <div className="grid-lines" aria-hidden="true" />
        <div className="hero-ambient" aria-hidden="true"><span>VISUAL</span><span>AI</span><span>BRAND</span></div>
        <div className="hero-content shell">
          <h1 className="opening-title"><span>Design</span><span>Portfolio</span></h1>
          <p className="hero-subtitle">2024-206年度 · 部分工作作品集</p>
          <div className="portfolio-stack opening-stack" aria-label="视觉、AI 与品牌设计作品集">
            <div className="folder folder-orange" tabIndex={0}><span>2022</span></div>
            <div className="folder folder-yellow" tabIndex={0}><span>2023</span></div>
            <div className="folder folder-gray" tabIndex={0}><span>2024</span></div>
            <div className="folder folder-blue" tabIndex={0}><span>AI / VISUAL</span></div>
            <div className="folder-center" tabIndex={0}>
              <div className="fan-cards" aria-hidden="true">
                {heroFanImages.map((src, index) => <div className={`fan-card fan-card-${index + 1}`} key={index}><img src={src} alt="" decoding="async" /></div>)}
              </div>
              <div className="folder folder-violet"><span>2025</span></div>
            </div>
          </div>
        </div>
        <div className="cover-index shell">
          <a href="#about">● 目录</a><span>2025 WORK COLLECTION</span><strong>#00</strong>
        </div>
      </section>

      <section className="section about shell" id="about">
        <AmbientField />
        <div className="section-kicker">01 / ABOUT & EXPERIENCE</div>
        <div className="about-stage">
          <div className="about-intro">
            <span className="about-year">2023-2026</span>
            <h2 data-reveal="title"><span>Hello</span><br />我是柳智熙！</h2>
            <p>视觉设计师、AI 设计师与品牌设计师。擅长把复杂需求拆解为清晰的创意方向、视觉规范和多规格交付，并通过 AIGC 工具优化创作链路。</p>
            <div className="about-actions">
              <a href="mailto:2582766426@qq.com"><Mail size={17} />2582766426@qq.com</a>
              <a href="#projects">查看作品 <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <DraggableProfile />
        </div>
        <div className="about-tools" aria-label="设计工具">
          <div className="tools-heading"><span>MY TOOLKIT</span><h3>熟练使用的工具</h3></div>
          <div className="tools-grid">
            {designTools.map((tool) => (
              <div className="tool-card" data-reveal="card" style={{'--delay': `${designTools.indexOf(tool) * 70}ms`} as React.CSSProperties} key={tool.name}>
                <span className="tool-logo">{tool.mark}</span><small>{tool.name}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="timeline">
          <article><time>2025.11 — 2026.09</time><div><h3>上海波拉兔文化创意有限公司</h3><p>视觉设计 / 账号运营设计</p></div></article>
          <article><time>2024.06 — 2024.08</time><div><h3>长沙锐智国际会展有限公司</h3><p>AI 设计师</p></div></article>
          <article><time>2023.10 — 2024.02</time><div><h3>湖南卜食记餐饮文化有限公司</h3><p>平面设计师</p></div></article>
          <article><time>2023.07 — 2023.10</time><div><h3>长沙原点爆发品牌策划有限公司</h3><p>平面设计师</p></div></article>
          </div>
      </section>

      <section className="section archive" id="projects">
        <AmbientField light />
        <div className="shell archive-head"><div><div className="section-kicker">02 / SELECTED WORK</div><h2 data-reveal="title">精选项目</h2></div><p>从活动视觉到品牌表达，探索每个项目背后的设计思路。</p></div>
        <div className="shell"><InfiniteSpiral /></div>
      </section>

      <section className="section projects" id="selected-work">
        <div className="brand-atmosphere" aria-hidden="true"><i/><i/><span className="brand-side brand-side--left">CONTENT<br/>TO CONNECTION <b>✳</b></span><span className="brand-side brand-side--right">STRATEGY / DESIGN<br/>STORIES IN MOTION <b>↗</b></span></div>
        <div className="shell">
          <div className="projects-head">
            <div><div className="section-kicker">03 / CONTENT BRANDING</div><h2 data-reveal="title">内容品牌运营</h2></div>
            <p>以品牌为线索，探索内容与视觉表达。</p>
          </div>
          <CategoryScrollStack />
        </div>
      </section>

      <section className="section other-works" id="other-works">
        <div className="shell other-head"><div><div className="section-kicker">04 / OTHER WORKS</div><h2 data-reveal="title">其他作品</h2></div><p>漂移中的视觉片段 · 移动鼠标探索</p></div>
        <PortfolioDriftWall />
      </section>

      <footer className="contact" id="contact">
        <div className="contact-ribbon" aria-hidden="true"><div>{Array.from({length:4},(_,i)=><span key={i}>LET’S CREATE SOMETHING GREAT <b>↗</b> DESIGN WITH PURPOSE <b>✳</b> </span>)}</div></div>
        <div className="contact-light-trail" aria-hidden="true" />
        <div className="contact-glow" aria-hidden="true" />
        <div className="shell contact-inner">
          <div className="section-kicker">05 / LET&apos;S CREATE</div>
          <div className="contact-composition"><div className="contact-title"><span>从一个想法，开始下一次合作。</span><h2 data-reveal="title">LET&apos;S MAKE<br /><i>IT VISIBLE.</i></h2></div><a className="contact-seal" href="mailto:2582766426@qq.com"><span>LET’S TALK</span><ArrowUpRight size={68} strokeWidth={1.2}/><strong>一起创造<br/>下一个作品</strong></a></div>
          <div className="contact-services"><span>01 / 品牌视觉</span><span>02 / 营销活动</span><span>03 / 内容运营</span><span>04 / AI 创意</span></div>
          <div className="contact-bottom">
            <p>品牌视觉 / 内容运营 / AI 创意 / 项目合作</p>
            <a href="mailto:2582766426@qq.com"><span>发送邮件</span><strong>2582766426@qq.com</strong><ArrowUpRight size={28} strokeWidth={1.2} /></a>
          </div>
          <div className="footer-meta"><span>© 2026 LIU ZHIXI</span><span>VISUAL DESIGN PORTFOLIO</span><a href="#top">BACK TO TOP ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
