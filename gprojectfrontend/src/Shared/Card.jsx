import React from 'react';
import Logo from "../../Assets/Logo.png"

const Card = () => {
  const plans = [
    { id: 'basic', title: 'Basic', price: '10,000', icon: 'star', features: ['دخول أساسي للنادي', 'استخدام المرافق الأساسية', '5 ضيوف شهرياً', 'دعم فني أساسي', 'خصم 10% على الأحداث'] },
    { id: 'silver', title: 'Silver', price: '30,000', icon: 'gem', features: ['جميع مزايا الباقة الأساسية', 'دخول لصالات VIP', '10 ضيوف شهرياً', 'خدمة الكونسيرج', 'خصم 20% على الأحداث'] },
    { id: 'gold', title: 'Gold', price: '50,000', icon: 'crown', popular: true, badge: 'الباقة الأكثر شعبية', features: ['جميع مزايا الباقة الفضية', 'دخول لجميع المناطق', 'ضيوف غير محدود', 'خدمة شخصية مخصصة', 'خصم 35% على الأحداث'] },
    { id: 'vip', title: 'VIP', price: '100,000', icon: 'sparkles', badge: 'أعلى قيمة', features: ['جميع المزايا السابقة', 'دخول حصري 24/7', 'مساحة خاصة مخصصة', 'خدمة بتلر شخصي', 'أحداث حصرية مجانية'] }
  ];

  const extraFeatures = [
    { title: 'نقاط المكافآت', description: 'اكسب نقاط مع كل زيارة واستبدلها بمزايا حصرية', icon: 'star', color: 'text-[#8ab4ff] border-[rgba(134,180,255,0.35)]' },
    { title: 'تصاريح الضيوف', description: 'ادع أصدقاءك للاستمتاع بتجربة النادي الراقية', icon: 'gem', color: 'text-[#1ff07a] border-[rgba(31,240,122,0.4)]' },
    { title: 'حجوزات حصرية', description: 'احجز المساحات الخاصة للمناسبات الاستثنائية', icon: 'crown', color: 'text-[#b58cff] border-[rgba(181,140,255,0.35)]' }
  ];

  const renderIcon = (iconType) => {
    const size = "w-7 h-7";
    const icons = {
      star: <svg className={`${size} text-[#8ab4ff]`} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
      gem: <svg className={`${size} text-[#b6c2cf]`} viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/></svg>,
      crown: <svg className={`${size} text-[#f8d477]`} viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 7l5.5 5L12 4l3.5 8L21 7l-2 9H5z"/></svg>,
      sparkles: <svg className={`${size} text-[#b58cff]`} viewBox="0 0 24 24" fill="currentColor"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
    };
    return icons[iconType];
  };

  const handleSubscribe = (title) => {
    console.log(`Subscribing to ${title} plan`);
  };

  return (
    <div className="min-h-screen text-[#e8e9ea] bg-[radial-gradient(1200px_600px_at_60%_-10%,#1a1a1a_0%,transparent_60%),linear-gradient(180deg,#0f0f10_0%,#131314_100%)]" dir="rtl">
      {/* Nav */}
      <header className="sticky top-0 z-20 bg-black/35 backdrop-blur border-b border-white/10">
        <nav className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-center relative">
          <ul className="flex gap-2 list-none m-0 p-0">
            <li className="px-4 py-2 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.06)] text-[#cbd5e1]">الرئيسية</li>
            <li className="px-4 py-2 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.06)] text-[#cbd5e1]">الأحداث</li>
            <li className="px-4 py-2 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.06)] text-[#cbd5e1]">الحجوزات</li>
            <li className="px-4 py-2 rounded-xl border border-[rgba(8,92,92,0.55)] bg-[linear-gradient(180deg,#085c5c_0%,rgba(8,92,92,0.4)_100%)] text-[#ecfffd]">العضوية</li>
          </ul>
          <div className="absolute right-6 top-1/2 -translate-y-1/2">
            <img src={Logo} alt="شعار نادي حلوان" className="h-[50px] object-contain" />
          </div>
        </nav>
      </header>

      <main className="max-w-[1200px] mx-auto p-7">
        <div className="text-center my-6">
          <h1 className="font-extrabold text-4xl">اختر العضوية التي تناسبك</h1>
        </div>

        {/* Plans */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map(plan => (
            <article key={plan.id} className="relative bg-gradient-to-b from-[#171717] to-[#0e0e0e] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 flex flex-col min-h-[360px]">
              {plan.badge && (
                <div className={`absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-full backdrop-blur border ${plan.popular ? 'bg-[rgba(31,240,122,0.25)] border-[rgba(31,240,122,0.45)] text-[#d2ffe7]' : 'bg-[rgba(140,140,155,0.18)] text-[#eceff4]'}`}>
                  {plan.badge}
                </div>
              )}
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 mb-2">{renderIcon(plan.icon)}</div>
                <h3 className="font-bold text-xl">{plan.title}</h3>
              </div>
              <ul className="list-none mt-3 mb-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-2 mb-2 text-[#d6d9de]">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#16c784] to-[#0a9b61] flex items-center justify-center text-white text-xs font-bold">✓</div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-auto">
                <div className="text-3xl font-extrabold">{plan.price}</div>
                <div className="text-xs text-[#a6adb5]">جنيه مصري</div>
              </div>
              <button onClick={() => handleSubscribe(plan.title)} className={`mt-4 w-full py-3 rounded-lg font-bold ${plan.popular ? 'bg-gradient-to-b from-[#1ff07a] to-[#10b86a] border border-[rgba(31,240,122,0.5)] text-[#062315]' : 'bg-white/5 border border-white/10 text-[#f5f7fa]'}`}>
                اشترك الآن
              </button>
            </article>
          ))}
        </section>

        {/* Extras */}
        <section className="text-center mt-10">
          <h3 className="text-2xl mb-4">مزایا اضافيه</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {extraFeatures.map((feature, i) => (
              <div key={i} className="bg-gradient-to-b from-[#171717] to-[#0e0e0e] border border-[rgba(255,255,255,0.08)] rounded-lg p-5">
                <div className={`inline-flex p-3 rounded-lg mb-2 bg-white/5 border ${feature.color}`}>{renderIcon(feature.icon)}</div>
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-sm text-[#d8dde3]">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Card;
