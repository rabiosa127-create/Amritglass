import React from 'react';
import { Award, ShieldCheck, Tag, Handshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const points = [
    {
      ...t.whyChooseUs.items.since1996,
      icon: Award,
    },
    {
      ...t.whyChooseUs.items.quality,
      icon: ShieldCheck,
    },
    {
      ...t.whyChooseUs.items.price,
      icon: Tag,
    },
    {
      ...t.whyChooseUs.items.service,
      icon: Handshake,
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-paper border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-glass-dark mb-3">
            {t.whyChooseUs.badge}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight mb-4">
            {t.whyChooseUs.heading}
          </h2>
          <p className="text-base sm:text-lg text-ink-soft">
            {t.whyChooseUs.sub}
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                id={`why-choose-card-${index}`}
                className="bg-white p-7 border border-ink/10 hover:border-brass transition-colors duration-300 flex flex-col group"
              >
                <div className="w-12 h-12 bg-paper border border-ink/10 flex items-center justify-center text-brass-dark mb-5 group-hover:bg-ink group-hover:text-brass-light transition-colors duration-200">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-display text-xl font-semibold text-ink tracking-tight mb-3">
                  {point.title}
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
