import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '与风同行 - 科技创新，与风同行',
    template: '%s | 与风同行',
  },
  description:
    '与风同行是一家专注于智能硬件与软件创新的科技公司，致力于用科技改变生活，让智能触手可及。',
  keywords: [
    '与风同行',
    'Yufeng',
    '智能硬件',
    '智能家居',
    '科技公司',
    '创新科技',
    'AI智能',
  ],
  authors: [{ name: '与风同行', url: 'https://yufeng.com' }],
  generator: '与风同行',
  openGraph: {
    title: '与风同行 - 科技创新，与风同行',
    description: '与风同行是一家专注于智能硬件与软件创新的科技公司',
    url: 'https://yufeng.com',
    siteName: '与风同行',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="zh-CN">
      <body className={`antialiased bg-white`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
