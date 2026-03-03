import Header from '@/components/Header';
import Footer from '@/components/Footer';

const news = [
  {
    id: 1,
    title: '与风同行 Phone 15 Pro 全球首发',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop',
    excerpt: '全新旗舰手机，搭载最新处理器，带来极致体验。今天，与风同行正式发布备受期待的Phone 15 Pro...',
  },
  {
    id: 2,
    title: '智能家居生态布局完成',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop',
    excerpt: '与风同行智能家居生态系统全面升级，覆盖全屋智能场景。我们致力于为用户提供更便捷的智能生活...',
  },
  {
    id: 3,
    title: '2024年度开发者大会即将开幕',
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
    excerpt: '与风同行2024年度开发者大会将于下月在北京召开，届时将发布多项重要产品和技术更新...',
  },
  {
    id: 4,
    title: '与风同行2023年度财报发布',
    date: '2024-01-02',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    excerpt: '2023年与风同行实现营收XXX亿元，同比增长XX%。公司持续加大研发投入，在多个领域取得突破...',
  },
  {
    id: 5,
    title: '全新智能手表Watch S Pro发布',
    date: '2023-12-20',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop',
    excerpt: '与风同行推出全新智能手表Watch S Pro，搭载更多健康监测功能，续航时间大幅提升...',
  },
  {
    id: 6,
    title: '与风同行与多家企业达成战略合作',
    date: '2023-12-15',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop',
    excerpt: '与风同行今日宣布与多家知名企业达成战略合作，共同推动智能生态建设...',
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-rose-500 to-rose-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            新闻资讯
          </h1>
          <p className="text-xl text-rose-100">
            了解与风同行的最新动态
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <a
                key={item.id}
                href={`/news/${item.id}`}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-rose-500 mb-2">{item.date}</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-rose-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-block border-2 border-rose-500 text-rose-500 px-8 py-3 rounded-lg hover:bg-rose-50 transition-colors font-medium">
              加载更多
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
