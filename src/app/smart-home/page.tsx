import Header from '@/components/Header';
import Footer from '@/components/Footer';

const smartHomeProducts = [
  {
    id: 3,
    name: '与风同行 Watch S',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'watch',
  },
  {
    id: 6,
    name: '与风同行 AirPods Pro',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
    category: 'audio',
  },
  {
    id: 8,
    name: '与风同行 Speaker',
    price: 399,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop',
    category: 'audio',
  },
  {
    id: 23,
    name: '与风同行 Smart Plug',
    price: 99,
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&h=400&fit=crop',
    category: 'smart-home',
  },
];

export default function SmartHomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-pink-500 to-pink-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            智能家居
          </h1>
          <p className="text-xl text-pink-100">
            智慧生活，触手可及
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              热门产品
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {smartHomeProducts.map((product) => (
              <a
                key={product.id}
                href={`/products/${product.id}`}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-orange-500">
                        ¥{product.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
