import Header from '@/components/Header';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: '张三',
    position: '创始人兼CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    description: '20年科技行业经验，曾任多家知名科技公司高管',
  },
  {
    name: '李四',
    position: '首席技术官',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    description: '前硅谷科技公司技术总监，专注人工智能领域',
  },
  {
    name: '王五',
    position: '首席产品官',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    description: '10年产品设计经验，主导多款爆款产品',
  },
  {
    name: '赵六',
    position: '首席市场官',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    description: '资深营销专家，打造多个成功品牌',
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            管理团队
          </h1>
          <p className="text-xl text-indigo-100">
            匠心筑梦，砥砺前行
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              核心管理团队
            </h2>
            <p className="text-gray-600 text-lg">
              经验丰富的领导团队，引领公司创新发展
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                加入我们
              </h3>
              <p className="text-gray-600">
                我们期待与更多优秀的人才一起成长
              </p>
            </div>
            <div className="text-center">
              <a
                href="/careers"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                查看招聘职位
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
