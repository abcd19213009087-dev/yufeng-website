import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';

const phoneProducts = [
  {
    id: 1,
    name: '与风同行 Phone 15 Pro',
    price: 4999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    tag: '热销',
    category: 'phone',
  },
  {
    id: 10,
    name: '与风同行 Phone 15',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    category: 'phone',
  },
  {
    id: 11,
    name: '与风同行 Phone 14 Pro',
    price: 4299,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop',
    category: 'phone',
  },
  {
    id: 12,
    name: '与风同行 Phone 13',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
    category: 'phone',
  },
];

export default function PhonesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Banner */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-500 to-blue-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            智能手机
          </h1>
          <p className="text-xl text-blue-100">
            科技与艺术的完美融合
          </p>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              热门手机
            </h2>
            <p className="text-gray-600 text-lg">
              选择最适合您的智能手机
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {phoneProducts.map((product) => (
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
                    {product.tag && (
                      <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                        {product.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-1 group-hover:text-orange-500 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-orange-500">
                        ¥{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ¥{product.originalPrice.toLocaleString()}
                        </span>
                      )}
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
