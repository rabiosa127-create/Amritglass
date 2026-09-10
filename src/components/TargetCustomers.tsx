import React from 'react';
import { Home, Hammer, Compass, HardHat, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TargetCustomers: React.FC = () => {
  const { t } = useLanguage();

  const customerData = [
    {
      ...t.targetCustomers.items.homeowners,
      icon: Home,
    },
    {
      ...t.targetCustomers.items.carpenters,
      icon: Hammer,
    },
    {
      ...t.targetCustomers.items.designers,
      icon: Compass,
    },
    {
      ...t.targetCustomers.items.contractors,
      icon: HardHat,
    },
    {
      ...t.targetCustomers.items.builders,
      icon: Building2,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            {t.targetCustomers.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.targetCustomers.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.targetCustomers.sub}
          </p>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            {t.targetCustomers.sub2}
          </p>
        </div>

        {/* 5 Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {customerData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                id={`target-customer-${index}`}
                className="flex flex-col p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-900 mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
