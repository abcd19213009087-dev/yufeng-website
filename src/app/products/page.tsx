'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: '与风同行 Phone 15 Pro',
    price: 4999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    tag: '热销',
    category: 'phone',
    description: '最新旗舰手机，搭载天玑9000处理器',
  },
  {
    id: 2,
    name: '与风同行 Pad Pro',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    tag: '新品',
    category: 'tablet',
    description: '高性能平板，办公娱乐两不误',
  },
  {
    id: 3,
    name: '与风同行 Watch S',
    price: 1299,
    category: 'watch',
    description: '智能手表，健康生活好帮手',
  },
  {
    id: 4,
    name: '与风同行 TV 65',
    price: 3999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    category: 'tv',
    description: '4K超高清智能电视',
  },
  {
    id: 5,
    name: '与风同行 Laptop Pro',
    price: 6999,
    tag: '旗舰',
    category: 'laptop',
    description: '轻薄高性能笔记本',
  },
  {
    id: 6,
    name: '与风同行 AirPods Pro',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
    category: 'audio',
    description: '主动降噪耳机',
  },
  {
    id: 7,
    name: '与风同行 Camera',
    price: 2999,
    tag: '新品',
    category: 'camera',
    description: '专业级运动相机',
  },
  {
    id: 8,
    name: '与风同行 Speaker',
    price: 399,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop',
    category: 'audio',
    description: '智能音箱，语音控制',
  },
];

const categories = [
  { id: 'all', name: '全部产品' },
  { id: 'phone', name: '手机' },
  { id: 'tablet', name: '平板' },
  { id: 'laptop', name: '笔记本' },
  { id: 'tv', name: '电视' },
  { id: 'watch', name: '手表' },
  { id: 'audio', name: '音频' },
  { id: 'camera', name: '相机' },
];

const sortOptions = [
  { id: 'default', name: '默认排序' },
  { id: 'price-asc', name: '价格从低到高' },
  { id: 'price-desc', name: '价格从高到低' },
  { id: 'name-asc', name: '名称排序' },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [showFilters, setShowFilters] = useState(false);

  // 过滤和排序产品
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 分类筛选
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 搜索筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // 价格区间筛选
    result = result.filter(
      (p) => p.price >= priceRange.min && p.price <= priceRange.max
    );

    // 排序
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy, priceRange]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Banner */}
      <section className="relative h-[300px] bg-gradient-to-r from-orange-500 to-orange-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            产品中心
          </h1>
          <p className="text-xl text-orange-100 mt-2">
            精选优质产品，为您带来极致体验
          </p>
        </div>
      </section>

      {/* 搜索栏 */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="搜索产品名称、描述..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal size={20} />
              <span>筛选</span>
            </button>
          </div>

          {/* 筛选面板 */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-4">价格区间</h3>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  placeholder="最低价"
                  value={priceRange.min || ''}
                  onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) || 0 })}
                  className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="最高价"
                  value={priceRange.max || ''}
                  onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) || 10000 })}
                  className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 分类筛选和排序 */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-6 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* 排序 */}
            <div className="flex items-center space-x-3">
              <ArrowUpDown size={16} className="text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 产品列表 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* 结果统计 */}
          <div className="mb-6 text-gray-600">
            共找到 <span className="font-medium text-orange-500">{filteredProducts.length}</span> 个产品
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-4">
                没有找到符合条件的产品
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setPriceRange({ min: 0, max: 10000 });
                  setSortBy('default');
                }}
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                清除筛选条件
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
