import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '柳智熙｜视觉设计师 · AI 设计师 · 品牌设计师',
  description: '柳智熙的视觉设计与 AI 创意作品集，聚焦品牌视觉、内容运营与会展主视觉。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
