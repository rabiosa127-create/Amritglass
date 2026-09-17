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
          <p className="text-sm font-semibold text-glass-dark mb-3">
            {t.targetCustomers.badge}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight mb-4">
            {t.targetCustomers.heading}
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            {t.targetCustomers.sub}
          </p>
          <p className="text-sm sm:text-base text-ink-soft/70 mt-2">
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
                className="flex flex-col p-6 bg-paper border border-ink/10 hover:border-brass transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-white border border-ink/10 flex items-center justify-center text-glass-dark mb-4 group-hover:bg-ink group-hover:text-brass-light transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
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
