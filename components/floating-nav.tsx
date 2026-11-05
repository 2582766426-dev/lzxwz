'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: '关于我' },
  { href: '#projects', label: '精选项目' },
  { href: '#selected-work', label: '项目分类' },
  { href: '#other-works', label: '其他作品' },
];

export function FloatingNav() {
  const [floating, setFloating] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setFloating(window.scrollY >= window.innerHeight - 110);
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <header className={`site-nav ${floating ? 'is-floating' : ''} ${open ? 'is-open' : ''}`}>
      <a className="site-nav__brand" href="#top" aria-label="返回首页">
        <strong>LZX</strong><span>VISUAL DESIGN</span>
      </a>
      <nav className="site-nav__links" aria-label="主导航">
        {links.map((link) => <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
      </nav>
      <a className="site-nav__contact" href="#contact" onClick={() => setOpen(false)}>联系我 <ArrowUpRight size={16} strokeWidth={1.6} /></a>
      <button className="site-nav__toggle" type="button" aria-label={open ? '关闭菜单' : '打开菜单'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div className="site-nav__mobile">
        {links.map((link) => <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>联系我 <ArrowUpRight size={16} /></a>
      </div>
    </header>
  );
}
