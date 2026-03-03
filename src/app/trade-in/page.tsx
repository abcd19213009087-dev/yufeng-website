import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RefreshCw, CheckCircle, DollarSign, Clock } from 'lucide-react';

export default function TradeInPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            以旧换新
          </h1>
          <p className="text-xl text-emerald-100">
            旧机折抵，换新更划算
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: DollarSign,
                title: '高折旧价',
                desc: '高于市场平均折旧价格',
              },
              {
                icon: Clock,
                title: '快速检测',
                desc: '30分钟内完成检测估价',
              },
              {
                icon: RefreshCw,
                title: '轻松换新',
                desc: '折抵金额直接抵扣新机',
              },
              {
                icon: CheckCircle,
                title: '数据安全',
                desc: '专业数据清除服务',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-emerald-500" />
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
              换新流程
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: '在线估价', desc: '输入旧机型号获取估价' },
                { step: '2', title: '选择新机', desc: '浏览选择心仪的新产品' },
                { step: '3', title: '门店检测', desc: '前往门店完成实物检测' },
                { step: '4', title: '即时换新', desc: '折抵价格直接抵扣新机' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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

          <div className="bg-emerald-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              支持换新的品牌
            </h2>
            <p className="text-gray-600 mb-6">
              我们支持与风同行、小米、苹果、华为、OPPO、vivo、三星等主流品牌的产品以旧换新
            </p>
            <div className="flex flex-wrap gap-4">
              {['与风同行', '小米', '苹果', '华为', 'OPPO', 'vivo', '三星'].map((brand, index) => (
                <span key={index} className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="/products"
              className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-medium"
            >
              开始换新
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
