import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, BarChart, PieChart, FileText } from 'lucide-react';

export default function InvestorPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-amber-500 to-amber-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            投资者关系
          </h1>
          <p className="text-xl text-amber-100">
            透明公开，共创价值
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: TrendingUp,
                title: '股价信息',
                desc: '实时股价和交易数据',
              },
              {
                icon: BarChart,
                title: '财务报告',
                desc: '季度和年度财务报告',
              },
              {
                icon: PieChart,
                title: '公司治理',
                desc: '公司治理结构和制度',
              },
              {
                icon: FileText,
                title: '公告通知',
                desc: '最新公告和通知信息',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-amber-500" />
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

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              财务报告
            </h2>
            <div className="space-y-4">
              {[
                { period: '2024年第三季度', type: '季度报告', date: '2024-10-30' },
                { period: '2024年第二季度', type: '季度报告', date: '2024-07-30' },
                { period: '2024年第一季度', type: '季度报告', date: '2024-04-30' },
                { period: '2023年年度', type: '年度报告', date: '2024-03-31' },
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-500 transition-colors">
                  <div>
                    <h3 className="font-medium text-gray-900">{report.period}</h3>
                    <p className="text-sm text-gray-600">{report.type} · {report.date}</p>
                  </div>
                  <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors text-sm font-medium">
                    下载报告
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              联系方式
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">投资者关系部</h3>
                <p className="text-gray-600 mb-2">邮箱: ir@yufeng.com</p>
                <p className="text-gray-600">电话: 010-8888-8888</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">公司地址</h3>
                <p className="text-gray-600">
                  北京市海淀区科技园区
                  <br />
                  邮编: 100000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
