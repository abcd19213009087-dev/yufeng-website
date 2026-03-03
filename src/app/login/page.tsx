'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 实现登录逻辑
    console.log('Login:', { email, password });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gray-50">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                登录
              </h1>
              <p className="text-gray-600">
                欢迎回到与风同行
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="请输入邮箱"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  密码
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="请输入密码"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-600">记住我</span>
                </label>
                <a href="#" className="text-sm text-orange-500 hover:underline">
                  忘记密码？
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                登录
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                还没有账号？{' '}
                <Link href="/register" className="text-orange-500 hover:underline">
                  立即注册
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-sm mb-4">
                或使用以下方式登录
              </p>
              <div className="flex justify-center space-x-4">
                <button className="w-12 h-12 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                  微
                </button>
                <button className="w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                  Q
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
