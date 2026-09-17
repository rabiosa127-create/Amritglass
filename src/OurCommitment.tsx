import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const OurCommitment: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-ink text-paper relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <p className="text-sm font-semibold text-brass-light mb-6">
          {t.commitment.badge}
        </p>

        {/* Section Heading */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper tracking-tight mb-8">
          {t.commitment.heading}
        </h2>

        {/* Commitment Statement Container */}
        <div className="bg-ink-soft border-t-2 border-brass p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto">
          <HeartHandshake className="w-10 h-10 text-brass-light mx-auto mb-6 opacity-90" />

          <p className="font-display text-xl sm:text-2xl lg:text-3xl italic text-paper leading-relaxed tracking-tight mb-8">
            {t.commitment.lead}
          </p>

          <div className="w-16 h-px bg-brass/50 mx-auto mb-8" />

          <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            {t.commitment.sub}
          </p>
        </div>

      </div>
    </section>
  );
};
