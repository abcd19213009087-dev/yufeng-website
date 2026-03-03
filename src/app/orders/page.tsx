import Header from '@/components/Header';
import Footer from '@/components/Footer';

const orders = [
  {
    id: 'YF202401150001',
    date: '2024-01-15',
    status: '已发货',
    items: [
      { name: '与风同行 Phone 15 Pro', quantity: 1, price: 4999 },
    ],
    total: 4999,
  },
  {
    id: 'YF202401100002',
    date: '2024-01-10',
    status: '已完成',
    items: [
      { name: '与风同行 Watch S', quantity: 1, price: 1299 },
      { name: '与风同行 AirPods Pro', quantity: 1, price: 1599 },
    ],
    total: 2898,
  },
];

export default function OrdersPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            我的订单
          </h1>

          {orders.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center">
              <p className="text-gray-600 text-lg mb-6">
                您还没有订单
              </p>
              <a
                href="/products"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                去购物
              </a>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500">订单号: {order.id}</p>
                      <p className="text-sm text-gray-500">下单时间: {order.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === '已完成'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {order.status}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-gray-700">
                        <span>{item.name} x {item.quantity}</span>
                        <span>¥{item.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-lg font-medium text-gray-900">
                      实付款: <span className="text-orange-500">¥{order.total.toLocaleString()}</span>
                    </span>
                    <div className="space-x-3">
                      <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        查看详情
                      </button>
                      {order.status !== '已完成' && (
                        <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                          确认收货
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
