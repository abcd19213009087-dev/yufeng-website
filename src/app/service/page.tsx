import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const services = [
  {
    icon: Phone,
    title: '客服热线',
    content: '400-888-8888',
    desc: '7x24小时全天候服务',
  },
  {
    icon: Mail,
    title: '邮箱支持',
    content: 'service@yufeng.com',
    desc: '我们会在24小时内回复',
  },
  {
    icon: MapPin,
    title: '服务网点',
    content: '全国3000+服务网点',
    desc: '就近选择，快速服务',
  },
  {
    icon: Clock,
    title: '服务时间',
    content: '09:00 - 21:00',
    desc: '节假日正常营业',
  },
];

export default function ServicePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-orange-500 to-orange-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            服务支持
          </h1>
          <p className="text-xl text-orange-100">
            专业服务，用心呵护
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              联系我们
            </h2>
            <p className="text-gray-600 text-lg">
              多种方式，随时为您服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon size={32} className="text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-orange-500 font-bold text-lg mb-2">
                  {service.content}
                </p>
                <p className="text-gray-600 text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                在线客服
              </h3>
              <p className="text-gray-600 mb-6">
                我们的智能客服"小风"随时为您解答问题，提供专业的咨询和帮助。
              </p>
              <a
                href="/ai-assistant"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                联系小风
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                常见问题
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="/faq" className="text-gray-700 hover:text-orange-500 transition-colors">
                    如何退换货？
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-700 hover:text-orange-500 transition-colors">
                    配送需要多长时间？
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-700 hover:text-orange-500 transition-colors">
                    产品保修政策是什么？
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-700 hover:text-orange-500 transition-colors">
                    如何查询订单状态？
                  </a>
                </li>
              </ul>
              <a
                href="/faq"
                className="inline-block mt-6 border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors font-medium"
              >
                查看更多
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
