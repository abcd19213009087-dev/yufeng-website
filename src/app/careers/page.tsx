import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';

const jobs = [
  {
    title: '高级软件工程师',
    department: '研发部',
    location: '北京',
    salary: '25K-45K',
    type: '全职',
  },
  {
    title: '产品经理',
    department: '产品部',
    location: '北京',
    salary: '20K-35K',
    type: '全职',
  },
  {
    title: 'UI/UX设计师',
    department: '设计部',
    location: '上海',
    salary: '18K-30K',
    type: '全职',
  },
  {
    title: '市场营销专员',
    department: '市场部',
    location: '北京',
    salary: '15K-25K',
    type: '全职',
  },
  {
    title: '销售代表',
    department: '销售部',
    location: '全国',
    salary: '10K-20K',
    type: '全职',
  },
  {
    title: '数据分析师',
    department: '数据部',
    location: '北京',
    salary: '20K-35K',
    type: '全职',
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-teal-500 to-teal-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            加入我们
          </h1>
          <p className="text-xl text-teal-100">
            与优秀的人一起做卓越的事
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* 福利待遇 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: DollarSign,
                title: '有竞争力的薪资',
                desc: '高于市场平均水平的薪酬',
              },
              {
                icon: Clock,
                title: '弹性工作',
                desc: '灵活的工作时间和地点',
              },
              {
                icon: Briefcase,
                title: '职业发展',
                desc: '完善的晋升和培训体系',
              },
              {
                icon: MapPin,
                title: '优质办公环境',
                desc: '舒适的办公环境和福利',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-teal-500" />
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

          {/* 职位列表 */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              热门职位
            </h2>

            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:border-orange-500 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">
                      {job.title}
                    </h3>
                    <span className="text-orange-500 font-bold">
                      {job.salary}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {job.location}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {job.type}
                    </span>
                  </div>

                  <button className="w-full md:w-auto bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                    申请职位
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg mb-6">
              没有找到合适的职位？
            </p>
            <p className="text-gray-600">
              您可以发送简历至{' '}
              <a href="mailto:hr@yufeng.com" className="text-orange-500 hover:underline">
                hr@yufeng.com
              </a>
              {' '}，我们会将您的简历加入人才库
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
