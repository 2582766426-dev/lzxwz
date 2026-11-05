'use client';

import { useRef, useState } from 'react';

export function DraggableProfile() {
  const origin = useRef({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const release = () => {
    setDragging(false);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div className={`profile-area draggable-profile ${dragging ? 'is-dragging' : ''}`}>
      <svg className="profile-cord" viewBox="0 0 520 180" preserveAspectRatio="none" aria-hidden="true">
        <path d={`M260 0 Q${260 + offset.x * .22} ${58 + offset.y * .15} ${260 + offset.x} ${118 + offset.y}`} />
      </svg>
      <span className="profile-pin" aria-hidden="true" />
      <div className="profile-drop" data-reveal="drop">
      <div className="profile-moving" style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) rotate(${offset.x * .018}deg)` }}>
      <div className="badge-connector" aria-hidden="true"><span className="badge-strap" /><span className="badge-ring" /><span className="badge-clip"><i /></span></div>
      <span className="profile-pill profile-pill--left">AI 设计师</span>
      <span className="profile-pill profile-pill--right">视觉设计师</span>
      <span className="profile-pill profile-pill--bottom">内容运营设计</span>
      <article
        className="profile-card"
        onPointerDown={(event) => {
          origin.current = { x: event.clientX - offset.x, y: event.clientY - offset.y };
          event.currentTarget.setPointerCapture(event.pointerId);
          setDragging(true);
        }}
        onPointerMove={(event) => {
          if (!dragging) return;
          setOffset({
            x: Math.max(-150, Math.min(150, event.clientX - origin.current.x)),
            y: Math.max(-65, Math.min(130, event.clientY - origin.current.y)),
          });
        }}
        onPointerUp={release}
        onPointerCancel={release}
      >
        <div className="profile-grip" aria-hidden="true"><span /><span /></div>
        <div className="badge-frame">
          <div className="badge-rays" aria-hidden="true" />
          <div className="badge-code"><b>001</b><span>VISUAL / AI</span></div>
          <div className="badge-photo"><img src="/liuzhixi-photo.jpg" alt="柳智熙彩色个人照片" draggable={false} /></div>
          <div className="badge-welcome"><strong>WELCOME!</strong><span>↗ 欢迎加入设计星球</span></div>
          <div className="badge-identity"><div><b>LIU ZHIXI</b><small>柳智熙 · 湖南长沙</small></div><em>DESIGN<br />DEPARTMENT</em></div>
        </div>
      </article>
      </div>
      </div>
      <span className="drag-hint">拖动名片 · 松手回弹</span>
    </div>
  );
}
