import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VisionProPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[600px] bg-gradient-to-b from-purple-900 to-purple-700 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            与风同行 Vision Pro
          </h1>
          <p className="text-2xl text-purple-200 mb-8">
            开启未来视界
          </p>
          <a
            href="/products/1"
            className="inline-block bg-white text-purple-700 px-8 py-4 rounded-full hover:bg-purple-50 transition-colors font-bold text-lg"
          >
            立即预订
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              颠覆性的空间计算体验
            </h2>
            <p className="text-xl text-gray-600">
              模糊现实与虚拟的边界，重新定义你的世界
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: '超高清显示',
                desc: '23百万像素，双眼8K分辨率，带来前所未有的视觉体验',
              },
              {
                title: '空间音频',
                desc: '个性化空间音频技术，让声音随你的移动而变化',
              },
              {
                title: '精准追踪',
                desc: '12个摄像头和5个传感器，实现精准的空间追踪',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              售价 ¥29,999
            </h3>
            <p className="text-gray-600 mb-8">
              即日起开放预订，预计2024年第二季度发货
            </p>
            <a
              href="/products/1"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors font-bold text-lg"
            >
              预订Vision Pro
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
