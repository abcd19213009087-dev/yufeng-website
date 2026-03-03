'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ShoppingCart, Heart, Share2, Star, Check } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id;

  // 模拟产品数据（实际应从API获取）
  const product = {
    id: productId,
    name: '与风同行 Phone 15 Pro',
    price: 4999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=800&fit=crop',
    ],
    category: '手机',
    rating: 4.8,
    reviews: 2568,
    description: '与风同行 Phone 15 Pro 搭载最新天玑9000处理器，6.67英寸AMOLED屏幕，支持120Hz刷新率。后置三摄系统，主摄5000万像素，支持OIS光学防抖。5000mAh大电池，支持67W快充。',
    features: [
      '天玑9000旗舰处理器',
      '6.67英寸 AMOLED 120Hz 屏幕',
      '5000万像素后置三摄',
      '5000mAh大电池',
      '67W有线快充',
      '支持5G网络',
    ],
    colors: [
      { name: '幻夜黑', color: '#1a1a1a' },
      { name: '星空蓝', color: '#1e40af' },
      { name: '晨曦金', color: '#d4a574' },
    ],
    specifications: [
      { label: '屏幕', value: '6.67英寸 AMOLED 120Hz' },
      { label: '处理器', value: '天玑9000' },
      { label: '运行内存', value: '12GB' },
      { label: '存储空间', value: '256GB' },
      { label: '后置摄像头', value: '5000万像素三摄' },
      { label: '电池容量', value: '5000mAh' },
      { label: '充电功率', value: '67W' },
      { label: '网络支持', value: '5G / 4G' },
    ],
  };

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen">
      <Header />

      {/* 面包屑导航 */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-orange-500">
              首页
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-600 hover:text-orange-500">
              产品中心
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* 产品详情 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 产品图片 */}
            <div className="space-y-4">
              {/* 主图 */}
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 缩略图 */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-orange-500'
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* 产品信息 */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* 评分 */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < Math.floor(product.rating) ? 'fill-orange-500 text-orange-500' : 'fill-gray-200 text-gray-200'}
                    />
                  ))}
                </div>
                <span className="text-orange-500 font-medium">
                  {product.rating}
                </span>
                <span className="text-gray-500">
                  ({product.reviews} 条评价)
                </span>
              </div>

              {/* 价格 */}
              <div className="flex items-baseline space-x-4 mb-6">
                <span className="text-4xl font-bold text-orange-500">
                  ¥{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      ¥{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                      省¥{(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </>
                )}
              </div>

              {/* 颜色选择 */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  颜色
                </h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedColor === index
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-500'
                      }`}
                    >
                      <div
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color.color }}
                      />
                      <span className="text-sm">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 数量选择 */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  数量
                </h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex space-x-4 mb-8">
                <button className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center space-x-2">
                  <ShoppingCart size={20} />
                  <span>加入购物车</span>
                </button>
                <button className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors font-medium">
                  立即购买
                </button>
                <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart size={20} className="text-gray-600" />
                </button>
                <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 size={20} className="text-gray-600" />
                </button>
              </div>

              {/* 产品特点 */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  产品特点
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 规格参数 */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  规格参数
                </h3>
                <div className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex border-b border-gray-200 pb-3 last:border-0">
                      <span className="w-32 text-gray-500">{spec.label}</span>
                      <span className="text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 产品描述 */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              产品描述
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
