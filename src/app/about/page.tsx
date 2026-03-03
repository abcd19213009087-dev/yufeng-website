import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Users, Trophy, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Banner */}
      <section className="relative h-[400px] bg-gradient-to-r from-orange-500 to-orange-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              关于与风同行
            </h1>
            <p className="text-xl text-orange-100">
              科技创新，与风同行
            </p>
          </div>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="公司团队"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                公司简介
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                与风同行成立于2010年，是一家专注于智能硬件与软件创新的科技公司。我们致力于用科技改变生活，让智能触手可及。
              </p>
              <p className="text-gray-600 text-lg mb-4">
                经过多年的发展，我们已经在手机、电视、笔记本、智能家居等多个领域取得了显著的成就，成为全球领先的科技企业之一。
              </p>
              <p className="text-gray-600 text-lg">
                我们相信，科技的力量在于改善人们的生活。通过不断创新和突破，我们为用户提供更优质的产品和服务。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 使命愿景 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              使命与愿景
            </h2>
            <p className="text-gray-600 text-lg">
              让科技改变生活，让智能触手可及
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-orange-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                我们的使命
              </h3>
              <p className="text-gray-600">
                通过创新的智能产品和优质的服务，让每一个人都能享受到科技带来的便利和乐趣，提升生活品质。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                我们的愿景
              </h3>
              <p className="text-gray-600">
                成为全球领先的智能科技企业，以创新引领未来，用技术赋能生活，打造智能生态。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              核心价值观
            </h2>
            <p className="text-gray-600 text-lg">
              我们的理念与承诺
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: '用户至上',
                desc: '始终以用户需求为核心，提供优质产品和服务',
                color: 'bg-green-100 text-green-600',
              },
              {
                icon: Trophy,
                title: '追求卓越',
                desc: '不断创新突破，追求产品和服务品质的极致',
                color: 'bg-blue-100 text-blue-600',
              },
              {
                icon: Heart,
                title: '诚信担当',
                desc: '坚持诚信经营，对社会和用户负责',
                color: 'bg-red-100 text-red-600',
              },
              {
                icon: Target,
                title: '开放合作',
                desc: '拥抱变化，与合作伙伴共同成长',
                color: 'bg-purple-100 text-purple-600',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              发展历程
            </h2>
            <p className="text-gray-600 text-lg">
              从创业到领先的每一步
            </p>
          </div>

          <div className="space-y-8">
            {[
              { year: '2010', title: '公司成立', desc: '与风同行在北京成立，开启创新之旅' },
              { year: '2012', title: '首款产品发布', desc: '发布首款智能手机，获得市场认可' },
              { year: '2015', title: '业务拓展', desc: '拓展至电视、笔记本等智能硬件领域' },
              { year: '2018', title: '智能家居生态', desc: '构建完整的智能家居生态系统' },
              { year: '2020', title: '全球化布局', desc: '开启全球化战略，产品销往全球' },
              { year: '2024', title: 'AI智能化', desc: '全面拥抱AI技术，引领智能新时代' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-24 pt-1">
                  <span className="text-2xl font-bold text-orange-500">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
