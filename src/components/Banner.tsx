'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  link: string;
}

const banners: BannerItem[] = [
  {
    id: 1,
    title: '与风同行 Phone 15 Pro',
    subtitle: '创新科技，触手可及',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1920&h=600&fit=crop',
    cta: '立即购买',
    link: '/phones',
  },
  {
    id: 2,
    title: '智能家居新时代',
    subtitle: '让生活更智能',
    image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?w=1920&h=600&fit=crop',
    cta: '了解更多',
    link: '/smart-home',
  },
  {
    id: 3,
    title: '与风同行 Vision Pro',
    subtitle: '开启未来视界',
    image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=1920&h=600&fit=crop',
    cta: '探索更多',
    link: '/vision',
  },
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-gray-900">
      {/* 轮播图片 */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: 'flex',
          width: `${banners.length * 100}%`,
        }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative flex-shrink-0 w-full h-full"
            style={{ width: '100%' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {banner.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8">
                    {banner.subtitle}
                  </p>
                  <a
                    href={banner.link}
                    className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                  >
                    {banner.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 左右箭头 */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* 底部指示器 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-orange-500 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
