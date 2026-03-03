import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ReturnPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-green-500 to-green-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            退换货政策
          </h1>
          <p className="text-xl text-green-100">
            7天无理由退货，15天无理由换货
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                退货政策
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>自收到商品之日起7天内，可申请无理由退货</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>商品必须保持原样，配件齐全，无人为损坏</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>退货时需提供原始发票或购买凭证</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>退货运费由消费者承担（质量问题除外）</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                换货政策
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>自收到商品之日起15天内，可申请换货</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>换货商品必须保持原样，配件齐全</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>只能更换同款同色商品</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>换货运费由消费者承担（质量问题除外）</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                不支持退换货的商品
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>已拆封的个人卫生用品</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>定制类商品</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>软件授权码等虚拟商品</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>有质量问题已维修过的商品</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                特别说明
              </h3>
              <p className="text-gray-700">
                如果您在收到商品后发现质量问题，请在收到商品后48小时内联系我们，
                我们将为您提供免费维修或更换服务。
              </p>
            </div>

            <div className="text-center">
              <a
                href="/service"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                联系客服
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
