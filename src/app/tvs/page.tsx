import Header from '@/components/Header';
import Footer from '@/components/Footer';

const tvProducts = [
  {
    id: 4,
    name: '与风同行 TV 65',
    price: 3999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    category: 'tv',
  },
  {
    id: 20,
    name: '与风同行 TV 55',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop',
    category: 'tv',
  },
  {
    id: 21,
    name: '与风同行 TV 75 Pro',
    price: 6999,
    image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400&h=400&fit=crop',
    category: 'tv',
  },
];

export default function TVsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-purple-500 to-purple-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            智能电视
          </h1>
          <p className="text-xl text-purple-100">
            极致视听体验，尽在与风同行
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              热门电视
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tvProducts.map((product) => (
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
