import Header from '@/components/Header';
import Footer from '@/components/Footer';

const laptopProducts = [
  {
    id: 5,
    name: '与风同行 Laptop Pro',
    price: 6999,
    tag: '旗舰',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
    category: 'laptop',
  },
  {
    id: 22,
    name: '与风同行 Laptop Air',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?w=400&h=400&fit=crop',
    category: 'laptop',
  },
];

export default function LaptopsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-green-500 to-green-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            笔记本电脑
          </h1>
          <p className="text-xl text-green-100">
            高性能轻薄本，办公娱乐两不误
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              热门笔记本
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {laptopProducts.map((product) => (
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
