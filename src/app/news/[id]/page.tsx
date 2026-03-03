import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { ArrowLeft, Share2, Calendar } from 'lucide-react';
import Link from 'next/link';

const newsData = {
  '1': {
    title: '与风同行 Phone 15 Pro 全球首发',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop',
    content: `
      <p>今天，与风同行正式发布备受期待的Phone 15 Pro，这是公司最新一代旗舰智能手机，搭载了业界领先的天玑9000处理器，为用户带来前所未有的性能体验。</p>

      <h3>突破性的性能表现</h3>
      <p>Phone 15 Pro 采用天玑9000旗舰处理器，采用4nm工艺制程，相比上一代性能提升30%，功耗降低20%。配合12GB LPDDR5运行内存和256GB UFS 3.1存储空间，无论是日常使用还是大型游戏，都能流畅运行。</p>

      <h3>出色的显示效果</h3>
      <p>6.67英寸AMOLED屏幕，支持120Hz高刷新率和HDR10+，带来细腻流畅的视觉体验。峰值亮度达到1500尼特，即使在阳光下也能清晰显示。</p>

      <h3>强大的影像系统</h3>
      <p>后置三摄系统，主摄5000万像素，支持OIS光学防抖；超广角1200万像素，支持120°视角；长焦800万像素，支持3倍光学变焦。无论是风景、人像还是夜景，都能拍出高质量照片。</p>

      <h3>超长续航体验</h3>
      <p>5000mAh大容量电池，支持67W有线快充，50分钟可充电至100%。配合智能省电技术，正常使用可续航超过一天。</p>

      <p>Phone 15 Pro 售价4999元起，现已正式开售，欢迎前往与风同行官网或线下门店体验选购。</p>
    `,
  },
};

export default function NewsDetailPage() {
  const params = useParams();
  const newsId = params.id as string;
  const news = newsData[newsId as keyof typeof newsData] || newsData['1'];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          {/* 返回按钮 */}
          <Link href="/news" className="inline-flex items-center text-gray-600 hover:text-orange-500 mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            返回新闻列表
          </Link>

          {/* 文章标题 */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {news.title}
          </h1>

          {/* 发布日期 */}
          <div className="flex items-center text-gray-600 mb-8">
            <Calendar size={18} className="mr-2" />
            <span>{news.date}</span>
          </div>

          {/* 文章封面 */}
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-[500px] object-cover rounded-xl mb-8"
          />

          {/* 文章内容 */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* 分享按钮 */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <p className="text-gray-600">分享这篇文章</p>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
              <Share2 size={20} />
              <span>分享</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
