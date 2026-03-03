'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, MapPin, Shield, Bell, ChevronRight, Save, Trash2, Plus, Edit3 } from 'lucide-react';

interface Address {
  id: number;
  name: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  detail: string;
  isDefault: boolean;
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'address' | 'security'>('profile');

  // 用户信息
  const [userInfo, setUserInfo] = useState({
    name: '张三',
    email: 'zhangsan@example.com',
    phone: '138****8888',
    avatar: 'https://i.pravatar.cc/150?img=1',
  });

  // 收货地址
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      name: '张三',
      phone: '138****8888',
      province: '北京市',
      city: '北京市',
      district: '朝阳区',
      detail: '三里屯街道工体北路8号',
      isDefault: true,
    },
    {
      id: 2,
      name: '李四',
      phone: '139****9999',
      province: '上海市',
      city: '上海市',
      district: '浦东新区',
      detail: '陆家嘴环路1000号',
      isDefault: false,
    },
  ]);

  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [showAddressForm, setShowAddressForm] = useState(false);

  // 渲染个人资料标签页
  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* 头像区域 */}
      <div className="flex items-center space-x-6 pb-6 border-b border-gray-200">
        <div className="relative">
          <img
            src={userInfo.avatar}
            alt="头像"
            className="w-24 h-24 rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
            <Edit3 size={16} />
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{userInfo.name}</h2>
          <p className="text-gray-600">{userInfo.email}</p>
        </div>
      </div>

      {/* 基本信息表单 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">基本信息</h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            昵称
          </label>
          <input
            type="text"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            邮箱
          </label>
          <input
            type="email"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            手机号
          </label>
          <input
            type="tel"
            value={userInfo.phone}
            onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center space-x-2">
        <Save size={20} />
        <span>保存修改</span>
      </button>
    </div>
  );

  // 渲染收货地址标签页
  const renderAddressTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">收货地址</h3>
        <button
          onClick={() => setShowAddressForm(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          <Plus size={16} />
          <span>添加地址</span>
        </button>
      </div>

      {/* 地址列表 */}
      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="font-medium text-gray-900">{address.name}</span>
                  <span className="text-gray-600">{address.phone}</span>
                  {address.isDefault && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                      默认
                    </span>
                  )}
                </div>
                <p className="text-gray-700">
                  {address.province} {address.city} {address.district} {address.detail}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setEditingAddress(address)}
                  className="p-2 text-gray-500 hover:text-orange-500 transition-colors"
                >
                  <Edit3 size={18} />
                </button>
                {!address.isDefault && (
                  <button
                    onClick={() => setAddresses(addresses.filter(a => a.id !== address.id))}
                    className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 渲染账户安全标签页
  const renderSecurityTab = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">账户安全</h3>

      {/* 修改密码 */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="font-medium text-gray-900 mb-4">修改密码</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              当前密码
            </label>
            <input
              type="password"
              placeholder="请输入当前密码"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              新密码
            </label>
            <input
              type="password"
              placeholder="请输入新密码"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              确认新密码
            </label>
            <input
              type="password"
              placeholder="请再次输入新密码"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
            修改密码
          </button>
        </div>
      </div>

      {/* 手机绑定 */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900 mb-1">手机号绑定</h4>
            <p className="text-sm text-gray-600">已绑定手机号：138****8888</p>
          </div>
          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
            修改
          </button>
        </div>
      </div>

      {/* 邮箱绑定 */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900 mb-1">邮箱绑定</h4>
            <p className="text-sm text-gray-600">已绑定邮箱：zhangsan@example.com</p>
          </div>
          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
            修改
          </button>
        </div>
      </div>

      {/* 第三方账号 */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="font-medium text-gray-900 mb-4">第三方账号绑定</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-700">微信</span>
            <span className="text-green-500 text-sm">已绑定</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-700">支付宝</span>
            <button className="text-orange-500 text-sm hover:underline">绑定</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">个人中心</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 侧边导航 */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <nav className="p-2">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'profile'
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <User size={20} />
                    <span>个人资料</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('address')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'address'
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <MapPin size={20} />
                    <span>收货地址</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'security'
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Shield size={20} />
                    <span>账户安全</span>
                  </button>
                  <button
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <Bell size={20} />
                    <span>消息通知</span>
                    <ChevronRight size={16} className="ml-auto" />
                  </button>
                </nav>
              </div>
            </div>

            {/* 内容区域 */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm p-6">
                {activeTab === 'profile' && renderProfileTab()}
                {activeTab === 'address' && renderAddressTab()}
                {activeTab === 'security' && renderSecurityTab()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
