import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import ProductGrid from '@/components/ProductGrid';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Banner */}
      <Banner />

      {/* 快捷入口 */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: '新品发布', desc: '最新科技产品', color: 'bg-blue-50 text-blue-600' },
              { icon: Shield, title: '品质保证', desc: '正品保障售后无忧', color: 'bg-green-50 text-green-600' },
              { icon: Heart, title: '用户服务', desc: '24小时在线客服', color: 'bg-red-50 text-red-600' },
              { icon: ArrowRight, title: '快速配送', desc: '全国包邮极速达', color: 'bg-purple-50 text-purple-600' },
            ].map((item, index) => (
              <Link
                key={index}
                href="/service"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className={`p-3 rounded-lg ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 产品展示 */}
      <ProductGrid />

      {/* 特色服务 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&h=400&fit=crop',
                title: '智能客服',
                desc: '24小时在线，为您解答任何问题',
                link: '/ai-assistant',
              },
              {
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
                title: '以旧换新',
                desc: '旧机折抵，换新更划算',
                link: '/trade-in',
              },
              {
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
                title: '企业采购',
                desc: '批量采购，专属优惠',
                link: '/business',
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{item.desc}</p>
                  <span className="text-orange-500 font-medium flex items-center group-hover:translate-x-2 transition-transform">
                    了解更多 <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 品牌故事 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="团队"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                关于与风同行
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                与风同行成立于2010年，是一家专注于智能硬件与软件创新的科技公司。我们致力于用科技改变生活，让智能触手可及。
              </p>
              <p className="text-gray-600 text-lg mb-8">
                经过多年的发展，我们已经在手机、电视、笔记本、智能家居等多个领域取得了显著的成就，成为全球领先的科技企业之一。
              </p>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                <span>了解更多</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 新闻资讯 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              最新资讯
            </h2>
            <p className="text-gray-600 text-lg">
              了解与风同行的最新动态
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
                title: '与风同行 Phone 15 Pro 全球首发',
                date: '2024-01-15',
                desc: '全新旗舰手机，搭载最新处理器，带来极致体验',
              },
              {
                image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop',
                title: '智能家居生态布局完成',
                date: '2024-01-10',
                desc: '与风同行智能家居生态系统全面升级',
              },
              {
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
                title: '2024年度开发者大会',
                date: '2024-01-05',
                desc: '与风同行开发者大会即将开幕，敬请期待',
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={`/news/${index + 1}`}
                className="group"
              >
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <p className="text-sm text-orange-500 mb-2">{item.date}</p>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/news"
              className="inline-block border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors font-medium"
            >
              查看更多资讯
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
