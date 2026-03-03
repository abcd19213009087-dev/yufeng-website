import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsDetailClient from '@/components/NewsDetailClient';

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <NewsDetailClient />
      <Footer />
    </div>
  );
}
