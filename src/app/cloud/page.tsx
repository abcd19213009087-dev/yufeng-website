import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Cloud, Database, Server, Shield } from 'lucide-react';

const cloudServices = [
  {
    icon: Cloud,
    title: '云存储',
    description: '安全可靠的云端存储服务，随时随地访问您的文件',
    price: '免费起',
  },
  {
    icon: Database,
    title: '云数据库',
    description: '高性能、高可用的数据库服务，支持多种数据库类型',
    price: '¥99/月起',
  },
  {
    icon: Server,
    title: '云服务器',
    description: '弹性计算服务，按需扩展，成本可控',
    price: '¥199/月起',
  },
  {
    icon: Shield,
    title: '云安全',
    description: '全方位的云安全解决方案，保护您的业务安全',
    price: '¥299/月起',
  },
];

export default function CloudPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            云服务
          </h1>
          <p className="text-xl text-cyan-100">
            为您的业务提供强大的云端支持
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              云产品与服务
            </h2>
            <p className="text-gray-600 text-lg">
              全面覆盖企业云端需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="text-orange-500 font-bold text-lg">
                  {service.price}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/ai-assistant"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              咨询详情
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
