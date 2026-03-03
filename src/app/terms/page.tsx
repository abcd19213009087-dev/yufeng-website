import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] bg-gradient-to-r from-slate-700 to-slate-800 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            使用条款
          </h1>
          <p className="text-xl text-slate-200">
            请仔细阅读以下条款
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-8 prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">
              最后更新日期：2024年1月1日
            </p>

            <h3>1. 接受条款</h3>
            <p>
              通过访问或使用与风同行网站，您同意遵守本使用条款。如果您不同意这些条款，请不要使用我们的网站。
            </p>

            <h3>2. 服务内容</h3>
            <p>
              我们提供产品信息、在线购买、售后服务等服务。我们保留随时修改、暂停或终止服务的权利，恕不另行通知。
            </p>

            <h3>3. 用户账户</h3>
            <p>
              您负责维护您账户信息的准确性和安全性。您不得与他人共享账户，并应立即向我们报告任何未经授权的使用。
            </p>

            <h3>4. 产品信息</h3>
            <p>
              我们尽力确保网站上产品信息的准确性，但不保证信息的完整性和时效性。图片仅供参考，请以实物为准。
            </p>

            <h3>5. 订单和付款</h3>
            <p>
              所有订单均受确认和可用性约束。我们保留在接受订单后因任何原因取消订单的权利。价格可能随时变更。
            </p>

            <h3>6. 知识产权</h3>
            <p>
              网站上的所有内容，包括文字、图片、标志等，均为与风同行或其授权方的财产。未经事先书面许可，您不得复制、修改或分发这些内容。
            </p>

            <h3>7. 用户行为</h3>
            <p>
              您同意不会使用我们的网站进行任何非法活动，不会干扰网站的运行，不会传播病毒或恶意代码。
            </p>

            <h3>8. 免责声明</h3>
            <p>
              网站按"原样"提供，不提供任何明示或暗示的保证。我们不对网站的中断或错误负责。
            </p>

            <h3>9. 争议解决</h3>
            <p>
              因使用本网站而产生的任何争议，应首先通过友好协商解决。协商不成的，任何一方可向北京市海淀区人民法院提起诉讼。
            </p>

            <h3>10. 条款修改</h3>
            <p>
              我们保留随时修改本使用条款的权利。修改后的条款将在网站上发布，并自发布之日起生效。
            </p>

            <h3>11. 联系我们</h3>
            <p>
              如有任何疑问，请联系我们：<br />
              邮箱：legal@yufeng.com<br />
              电话：400-888-8888
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
