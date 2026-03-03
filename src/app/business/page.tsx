import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, Users, Award, Headphones } from 'lucide-react';

export default function BusinessPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-cyan-600 to-cyan-700 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            企业采购
          </h1>
          <p className="text-xl text-cyan-100">
            批量采购，专属优惠，为企业赋能
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Award,
                title: '专属优惠',
                desc: '企业专享价格，批量采购更划算',
              },
              {
                icon: Users,
                title: '专属服务',
                desc: '一对一客户经理服务',
              },
              {
                icon: Building2,
                title: '定制方案',
                desc: '根据企业需求定制采购方案',
              },
              {
                icon: Headphones,
                title: '售后保障',
                desc: '优先售后服务响应',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-cyan-500" />
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                适用场景
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">企业员工福利采购</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">办公设备批量采购</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">礼品定制采购</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">合作伙伴礼遇采购</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                采购流程
              </h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">1</span>
                  <span className="text-gray-700 pt-1">提交采购需求</span>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">2</span>
                  <span className="text-gray-700 pt-1">专属顾问对接</span>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">3</span>
                  <span className="text-gray-700 pt-1">定制采购方案</span>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">4</span>
                  <span className="text-gray-700 pt-1">确认订单配送</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-cyan-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              热门采购产品
            </h2>
            <p className="text-gray-600 mb-6">
              智能手机、笔记本电脑、平板电脑、智能手表、智能家居等产品均支持企业采购
            </p>
            <a
              href="/products"
              className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors font-medium"
            >
              查看产品
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              联系我们
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm text-gray-500 mb-2">企业采购热线</p>
                <p className="text-xl font-bold text-cyan-500">400-888-8889</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">企业邮箱</p>
                <p className="text-xl font-bold text-cyan-500">business@yufeng.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">工作时间</p>
                <p className="text-xl font-bold text-cyan-500">9:00-18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
