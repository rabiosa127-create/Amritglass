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
    <section id="why-choose-us" className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
            {t.whyChooseUs.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.whyChooseUs.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
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
                className="bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-800 mb-5 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-200">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3 group-hover:text-blue-900 transition-colors">
                  {point.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
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
