'use client';

import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: string;
  category: string;
}

const products: Product[] = [
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
    id: 2,
    name: '与风同行 Pad Pro',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    tag: '新品',
    category: 'tablet',
  },
  {
    id: 3,
    name: '与风同行 Watch S',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'watch',
  },
  {
    id: 4,
    name: '与风同行 TV 65',
    price: 3999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    category: 'tv',
  },
  {
    id: 5,
    name: '与风同行 Laptop Pro',
    price: 6999,
    tag: '旗舰',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
    category: 'laptop',
  },
  {
    id: 6,
    name: '与风同行 AirPods Pro',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
    category: 'audio',
  },
  {
    id: 7,
    name: '与风同行 Camera',
    price: 2999,
    tag: '新品',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    category: 'camera',
  },
  {
    id: 8,
    name: '与风同行 Speaker',
    price: 399,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop',
    category: 'audio',
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            热门产品
          </h2>
          <p className="text-gray-600 text-lg">
            精选优质产品，为您带来极致体验
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* 产品图片 */}
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

                {/* 产品信息 */}
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
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            查看全部产品
          </Link>
        </div>
      </div>
    </section>
  );
}
