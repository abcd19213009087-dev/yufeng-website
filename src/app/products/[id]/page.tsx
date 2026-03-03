'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ShoppingCart, Heart, Share2, Star, Check, ThumbsUp, Filter } from 'lucide-react';

interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
  images?: string[];
  helpful: number;
  verified: boolean;
}

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

  // 模拟评价数据
  const reviews: Review[] = [
    {
      id: '1',
      user: '张三',
      avatar: 'https://i.pravatar.cc/100?img=1',
      rating: 5,
      content: '手机非常不错，性能强劲，拍照效果很好。特别是屏幕显示效果非常出色，120Hz刷新率很流畅。电池续航也不错，一天一充没有问题。',
      date: '2024-01-20',
      images: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop',
      ],
      helpful: 128,
      verified: true,
    },
    {
      id: '2',
      user: '李四',
      avatar: 'https://i.pravatar.cc/100?img=2',
      rating: 4,
      content: '整体很满意，性价比很高。系统流畅度不错，希望能继续保持。唯一的小缺点就是摄像头有点凸起，但总体瑕不掩瑜。',
      date: '2024-01-18',
      helpful: 86,
      verified: true,
    },
    {
      id: '3',
      user: '王五',
      avatar: 'https://i.pravatar.cc/100?img=3',
      rating: 5,
      content: '用了一段时间，体验很好。充电速度确实很快，67W快充半小时就能充到80%。拍照效果超出预期，夜景模式特别棒。',
      date: '2024-01-15',
      helpful: 156,
      verified: true,
    },
    {
      id: '4',
      user: '赵六',
      avatar: 'https://i.pravatar.cc/100?img=4',
      rating: 4,
      content: '物流很快，第二天就到了。包装很精美，送了很多配件。手机手感很好，不重不轻。唯一建议是希望能多几种颜色选择。',
      date: '2024-01-12',
      helpful: 65,
      verified: true,
    },
  ];

  // 相关推荐产品
  const relatedProducts = [
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
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'withImages' | 'verified'>('all');
  const [showAllReviews, setShowAllReviews] = useState(false);

  // 计算评价统计
  const reviewStats = {
    total: reviews.length,
    average: reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
    distribution: [5, 4, 3, 2, 1].map(star => ({
      star,
      count: reviews.filter(r => r.rating === star).length,
      percentage: (reviews.filter(r => r.rating === star).length / reviews.length) * 100,
    })),
  };

  const filteredReviews = reviews.filter(review => {
    if (reviewFilter === 'withImages') return review.images && review.images.length > 0;
    if (reviewFilter === 'verified') return review.verified;
    return true;
  });

  const displayReviews = showAllReviews ? filteredReviews : filteredReviews.slice(0, 3);

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

          {/* 用户评价 */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              用户评价 ({product.reviews})
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 评价统计 */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-orange-500 mb-2">
                      {product.rating}
                    </div>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={i < Math.floor(product.rating) ? 'fill-orange-500 text-orange-500' : 'fill-gray-200 text-gray-200'}
                        />
                      ))}
                    </div>
                    <p className="text-gray-500">{product.reviews} 条评价</p>
                  </div>

                  {/* 评分分布 */}
                  <div className="space-y-3">
                    {reviewStats.distribution.map((item) => (
                      <div key={item.star} className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600 w-8">{item.star}星</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-orange-500 h-full rounded-full transition-all"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-500 w-10">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 评价列表 */}
              <div className="lg:col-span-2">
                {/* 筛选按钮 */}
                <div className="flex items-center space-x-4 mb-6">
                  <button
                    onClick={() => setReviewFilter('all')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      reviewFilter === 'all'
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    全部评价
                  </button>
                  <button
                    onClick={() => setReviewFilter('verified')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      reviewFilter === 'verified'
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    已购用户
                  </button>
                  <button
                    onClick={() => setReviewFilter('withImages')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      reviewFilter === 'withImages'
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    有图评价
                  </button>
                </div>

                {/* 评价卡片 */}
                <div className="space-y-6">
                  {displayReviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-start space-x-4">
                        <img
                          src={review.avatar}
                          alt={review.user}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="font-medium text-gray-900">{review.user}</span>
                            {review.verified && (
                              <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                                已购用户
                              </span>
                            )}
                          </div>

                          <div className="flex items-center space-x-2 mb-3">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={i < review.rating ? 'fill-orange-500 text-orange-500' : 'fill-gray-200 text-gray-200'}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>

                          <p className="text-gray-700 mb-4">{review.content}</p>

                          {/* 评价图片 */}
                          {review.images && review.images.length > 0 && (
                            <div className="flex space-x-3 mb-4">
                              {review.images.map((image, index) => (
                                <img
                                  key={index}
                                  src={image}
                                  alt={`评价图片 ${index + 1}`}
                                  className="w-24 h-24 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                                />
                              ))}
                            </div>
                          )}

                          {/* 有用按钮 */}
                          <button className="flex items-center space-x-2 text-gray-500 hover:text-orange-500 transition-colors">
                            <ThumbsUp size={16} />
                            <span className="text-sm">有用 ({review.helpful})</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 查看更多 */}
                {!showAllReviews && filteredReviews.length > 3 && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => setShowAllReviews(true)}
                      className="px-8 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                    >
                      查看更多评价
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 相关推荐 */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              相关推荐
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* 产品图片 */}
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {relatedProduct.tag && (
                        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                          {relatedProduct.tag}
                        </span>
                      )}
                    </div>

                    {/* 产品信息 */}
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-1 group-hover:text-orange-500 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-xl font-bold text-orange-500">
                          ¥{relatedProduct.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
