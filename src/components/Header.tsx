'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, User, LogOut } from 'lucide-react';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首页', href: '/' },
    { name: '手机', href: '/phones' },
    { name: '电视', href: '/tvs' },
    { name: '笔记本', href: '/laptops' },
    { name: '智能家居', href: '/smart-home' },
    { name: '云服务', href: '/cloud' },
    { name: '关于我们', href: '/about' },
  ];

  return (
    <>
      {/* 顶部工具栏 */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-end items-center h-10 space-x-6 text-sm text-gray-600">
            {user ? (
              <>
                <span className="text-gray-700">欢迎，{user.name || user.email}</span>
                <Link href="/orders" className="hover:text-orange-500 transition-colors">
                  我的订单
                </Link>
                <button
                  onClick={logout}
                  className="hover:text-orange-500 transition-colors flex items-center"
                >
                  <LogOut size={16} className="mr-1" />
                  退出
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="hover:text-orange-500 transition-colors">
                  登录
                </Link>
                <Link href="/register" className="hover:text-orange-500 transition-colors">
                  注册
                </Link>
                <Link href="/orders" className="hover:text-orange-500 transition-colors">
                  我的订单
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 主导航栏 */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="与风同行"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-orange-500">与风同行</span>
            </Link>

            {/* 桌面端导航 */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* 右侧操作区 */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-orange-500 transition-colors">
                <Search size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-orange-500 transition-colors">
                <ShoppingCart size={20} />
              </button>
              {user && (
                <button className="p-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <User size={20} />
                </button>
              )}
              {/* 移动端菜单按钮 */}
              <button
                className="md:hidden p-2 text-gray-600 hover:text-orange-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors font-medium border-b border-gray-100 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {user && (
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <p className="px-4 text-sm text-gray-600 mb-2">
                    欢迎，{user.name || user.email}
                  </p>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors flex items-center"
                  >
                    <LogOut size={16} className="mr-2" />
                    退出登录
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
