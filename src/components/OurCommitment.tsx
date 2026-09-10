import React from 'react';
import { Shield, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const OurCommitment: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Subtle frosted glass glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-xs">
          <Shield className="w-4 h-4 text-blue-300" />
          <span>{t.commitment.badge}</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8">
          {t.commitment.heading}
        </h2>

        {/* Commitment Statement Container */}
        <div className="glass-card bg-white/5 border border-white/15 rounded-3xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto shadow-2xl backdrop-blur-md">
          <HeartHandshake className="w-12 h-12 text-blue-400 mx-auto mb-6 opacity-90" />
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed tracking-tight mb-8">
            “{t.commitment.lead}”
          </p>

          <div className="w-16 h-0.5 bg-blue-400/40 mx-auto mb-8" />

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {t.commitment.sub}
          </p>
        </div>

      </div>
    </section>
  );
};
