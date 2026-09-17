import React from 'react';
import { Award, ShieldCheck, Tag, Handshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TrustStrip: React.FC = () => {
  const { t } = useLanguage();

  const trustItems = [
    {
      title: t.trustStrip.estTitle,
      subtitle: t.trustStrip.estSub,
      icon: Award,
    },
    {
      title: t.trustStrip.qualityTitle,
      subtitle: t.trustStrip.qualitySub,
      icon: ShieldCheck,
    },
    {
      title: t.trustStrip.priceTitle,
      subtitle: t.trustStrip.priceSub,
      icon: Tag,
    },
    {
      title: t.trustStrip.serviceTitle,
      subtitle: t.trustStrip.serviceSub,
      icon: Handshake,
    },
  ];

  return (
    <section className="bg-ink text-paper py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                id={`trust-strip-item-${index}`}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-ink-soft border border-white/10 flex items-center justify-center shrink-0 text-brass-light group-hover:text-ink group-hover:bg-brass transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-paper tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs text-white/50 mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
