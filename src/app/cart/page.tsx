'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ChevronRight, Check } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  color: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: '与风同行 Phone 15 Pro',
      price: 4999,
      originalPrice: 5999,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop',
      quantity: 1,
      color: '幻夜黑',
    },
    {
      id: 6,
      name: '与风同行 AirPods Pro',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200&h=200&fit=crop',
      quantity: 2,
      color: '白色',
    },
  ]);

  // 更新数量
  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // 删除商品
  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // 计算总价
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + (item.originalPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);
  const shipping = subtotal > 0 ? (subtotal >= 5000 ? 0 : 99) : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <ShoppingBag size={48} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                购物车是空的
              </h2>
              <p className="text-gray-600">
                快去选购心仪的产品吧
              </p>
            </div>
            <Link
              href="/products"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              去购物
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            购物车 ({cartItems.length})
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 购物车商品列表 */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex space-x-6">
                    {/* 商品图片 */}
                    <Link href={`/products/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    </Link>

                    {/* 商品信息 */}
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <Link
                          href={`/products/${item.id}`}
                          className="text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      <p className="text-sm text-gray-600 mb-4">颜色: {item.color}</p>

                      {/* 价格和数量控制 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-2xl font-bold text-orange-500">
                            ¥{item.price.toLocaleString()}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ¥{item.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        {/* 数量控制 */}
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                            className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-lg font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>

                      {/* 小计 */}
                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                        <span className="text-gray-600">小计: </span>
                        <span className="ml-2 text-xl font-bold text-gray-900">
                          ¥{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 订单摘要 */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  订单摘要
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>商品小计</span>
                    <span>¥{subtotal.toLocaleString()}</span>
                  </div>

                  {savings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>优惠节省</span>
                      <span>-¥{savings.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-600">
                    <span>运费</span>
                    <span>{shipping === 0 ? '免运费' : `¥${shipping}`}</span>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>总计</span>
                      <span className="text-orange-500">¥{total.toLocaleString()}</span>
                    </div>
                    {subtotal >= 5000 && (
                      <p className="text-sm text-green-600 mt-2">
                        已满足免运费条件
                      </p>
                    )}
                  </div>
                </div>

                {/* 结算按钮 */}
                <Link
                  href="/checkout"
                  className="block w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-colors font-medium text-center"
                >
                  去结算
                </Link>

                {/* 继续购物 */}
                <Link
                  href="/products"
                  className="block w-full mt-4 text-center text-gray-600 hover:text-orange-500 transition-colors flex items-center justify-center"
                >
                  继续购物 <ChevronRight size={16} className="ml-1" />
                </Link>

                {/* 安全提示 */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </div>
                    <span>安全支付保障</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
