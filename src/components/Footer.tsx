'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 关于我们 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-orange-500 transition-colors">
                  公司简介
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-orange-500 transition-colors">
                  管理团队
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-orange-500 transition-colors">
                  加入我们
                </Link>
              </li>
              <li>
                <Link href="/investor" className="hover:text-orange-500 transition-colors">
                  投资者关系
                </Link>
              </li>
            </ul>
          </div>

          {/* 产品中心 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">产品中心</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/phones" className="hover:text-orange-500 transition-colors">
                  手机
                </Link>
              </li>
              <li>
                <Link href="/tvs" className="hover:text-orange-500 transition-colors">
                  电视
                </Link>
              </li>
              <li>
                <Link href="/laptops" className="hover:text-orange-500 transition-colors">
                  笔记本
                </Link>
              </li>
              <li>
                <Link href="/smart-home" className="hover:text-orange-500 transition-colors">
                  智能家居
                </Link>
              </li>
            </ul>
          </div>

          {/* 服务支持 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">服务支持</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/service" className="hover:text-orange-500 transition-colors">
                  售后服务
                </Link>
              </li>
              <li>
                <Link href="/repair" className="hover:text-orange-500 transition-colors">
                  维修服务
                </Link>
              </li>
              <li>
                <Link href="/return" className="hover:text-orange-500 transition-colors">
                  退换货政策
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-orange-500 transition-colors">
                  常见问题
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@yufeng.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>北京市海淀区科技园区</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© 2024 与风同行科技有限公司 版权所有 | 京ICP备12345678号</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-orange-500">隐私政策</Link>
            {' | '}
            <Link href="/terms" className="hover:text-orange-500">使用条款</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
