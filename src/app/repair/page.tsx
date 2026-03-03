import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wrench, Clock, CheckCircle, MapPin } from 'lucide-react';

export default function RepairPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-blue-500 to-blue-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            维修服务
          </h1>
          <p className="text-xl text-blue-100">
            专业维修，原厂品质
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Wrench,
                title: '专业维修',
                desc: '原厂配件，专业技师',
              },
              {
                icon: Clock,
                title: '快速响应',
                desc: '48小时内完成维修',
              },
              {
                icon: CheckCircle,
                title: '质量保证',
                desc: '维修后90天质保',
              },
              {
                icon: MapPin,
                title: '全国网点',
                desc: '就近选择，方便快捷',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              维修流程
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: '预约维修', desc: '在线或电话预约' },
                { step: '2', title: '上门取机', desc: '工程师上门取机' },
                { step: '3', title: '检测维修', desc: '专业检测并维修' },
                { step: '4', title: '送机上门', desc: '维修完成送机上门' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="/service"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              立即预约
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
