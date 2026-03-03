'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '如何查询订单状态？',
    answer: '您可以通过以下方式查询订单状态：1. 登录网站后在"我的订单"中查看；2. 使用订单号在官网查询；3. 拨打客服热线400-888-8888查询。',
  },
  {
    question: '配送需要多长时间？',
    answer: '一般情况下，商品在下单后24小时内发货。一线城市1-2天送达，二三线城市2-3天送达，偏远地区3-5天送达。具体配送时间以订单实际为准。',
  },
  {
    question: '如何退换货？',
    answer: '自收到商品之日起7天内可申请退货，15天内可申请换货。请确保商品保持原样、配件齐全。登录您的账户，在订单详情页提交退换货申请即可。',
  },
  {
    question: '产品保修政策是什么？',
    answer: '与风同行的产品享受国家三包政策：主机保修1年，电池保修6个月，耳机等配件保修3个月。部分产品享受延保服务，具体以产品说明为准。',
  },
  {
    question: '支持哪些支付方式？',
    answer: '我们支持支付宝、微信支付、银联卡、信用卡等多种支付方式，方便快捷安全。',
  },
  {
    question: '可以开具发票吗？',
    answer: '当然可以！下单时请选择开具发票，我们会根据您的需求开具电子发票或纸质发票。纸质发票将随商品一同寄送。',
  },
  {
    question: '如何联系客服？',
    answer: '您可以通过以下方式联系我们：1. 拨打客服热线400-888-8888；2. 发送邮件至service@yufeng.com；3. 在线咨询智能客服"小风"；4. 前往就近的服务网点。',
  },
  {
    question: '企业采购有优惠吗？',
    answer: '我们有专门的企业采购服务，针对批量采购提供专属优惠。欢迎访问企业采购页面或拨打企业专线进行咨询。',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-purple-500 to-purple-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            常见问题
          </h1>
          <p className="text-xl text-purple-100">
            快速找到您需要的答案
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-gray-500 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg mb-6">
              没有找到您需要的答案？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ai-assistant"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                咨询小风
              </a>
              <a
                href="/service"
                className="inline-block border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors font-medium"
              >
                联系客服
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
