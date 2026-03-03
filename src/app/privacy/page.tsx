import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-gray-700 to-gray-800 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            隐私政策
          </h1>
          <p className="text-xl text-gray-200">
            保护您的隐私是我们的承诺
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-8 prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">
              最后更新日期：2024年1月1日
            </p>

            <h3>1. 信息收集</h3>
            <p>
              我们可能会收集以下类型的个人信息：姓名、电子邮件地址、电话号码、邮寄地址、支付信息等。我们仅会在您明确同意的情况下收集这些信息。
            </p>

            <h3>2. 信息使用</h3>
            <p>
              我们使用收集的信息来：提供、维护和改进我们的服务；处理交易和发送相关通知；发送营销和促销材料；响应您的客户服务请求。
            </p>

            <h3>3. 信息共享</h3>
            <p>
              我们不会向第三方出售、交易或转让您的个人信息。我们可能与受信任的第三方（如支付处理器、物流服务提供商）共享信息，仅用于提供服务所需。
            </p>

            <h3>4. 数据安全</h3>
            <p>
              我们采取适当的安全措施来保护您的个人信息，包括加密、访问控制和定期安全审计。但请注意，没有完美的安全措施。
            </p>

            <h3>5. Cookie的使用</h3>
            <p>
              我们使用Cookie来改善用户体验、分析网站流量和个性化内容。您可以通过浏览器设置控制Cookie的使用。
            </p>

            <h3>6. 您的权利</h3>
            <p>
              您有权访问、更正或删除您的个人信息。您也可以选择不再接收我们的营销邮件。如需行使这些权利，请联系我们。
            </p>

            <h3>7. 联系我们</h3>
            <p>
              如果您对本隐私政策有任何疑问或 concerns，请通过以下方式联系我们：
            </p>
            <p>
              邮箱：privacy@yufeng.com<br />
              电话：400-888-8888
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
