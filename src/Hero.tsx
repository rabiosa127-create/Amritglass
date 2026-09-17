import React from 'react';
import { MessageCircle, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-paper"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <p className="text-sm font-semibold text-glass-dark mb-3">
              {t.hero.estBadge}
            </p>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-tight leading-[1.08] mb-4">
              {language === 'as' ? 'অমৃত গ্লাছ' : BUSINESS_INFO.name}
            </h1>

            {/* Supporting Headline */}
            <p className="font-display text-xl sm:text-2xl text-ink-soft italic mb-5">
              {t.hero.tagline}
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-ink-soft leading-relaxed mb-8 max-w-2xl">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#products"
                id="hero-explore-products-btn"
                className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-ink-soft text-paper px-7 py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 active:scale-98"
              >
                <span>{t.hero.exploreProducts}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsapp.link()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 bg-[#128C7E] hover:bg-[#0d6f63] text-white px-6 py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{t.hero.whatsAppUs}</span>
              </a>
            </div>

            {/* Quick Location & Longevity pill */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-ink-soft pt-4 border-t border-ink/10">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-glass shrink-0" />
                <span>{t.hero.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-glass shrink-0" />
                <span>{t.hero.dependable}</span>
              </div>
            </div>
          </div>

          {/* Establishment Showcase Panel — a stack of glass panes */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Stacked pane effect: two offset panes behind the main one */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-glass-light/40 rounded-sm hidden sm:block" aria-hidden="true" />
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-glass-light/60 rounded-sm hidden sm:block" aria-hidden="true" />

              <div className="relative bg-white border border-ink/10 glass-edge p-6 sm:p-8 shadow-sm">

                {/* Card Header */}
                <div className="relative flex items-center justify-between pb-5 border-b border-ink/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-glass-dark">
                    {t.hero.cardEstablished}
                  </span>
                  <span className="text-xs font-medium text-ink-soft/70 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Biswanath Chariali
                  </span>
                </div>

                {/* Big Year Display */}
                <div className="relative py-8 text-center">
                  <div className="font-display figure-tight text-[76px] sm:text-[92px] font-semibold text-ink leading-none select-none">
                    {language === 'as' ? '১৯৯৬' : BUSINESS_INFO.established}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-bold tracking-[0.15em] text-brass-dark uppercase">
                    {t.hero.cardServing}
                  </div>
                  <p className="text-xs text-ink-soft/70 mt-2">
                    {language === 'as' ? 'শোণিতপুৰ, বিশ্বনাথ চাৰিআলি • অসম – ৭৮৪১৭৬' : 'Sonitpur, Biswanath Chariali • Assam – 784176'}
                  </p>
                </div>

                {/* Core Highlights */}
                <div className="relative space-y-2.5 pt-5 border-t border-ink/10 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 p-3 bg-paper border border-ink/5 text-ink">
                    <ShieldCheck className="w-4 h-4 text-glass shrink-0" />
                    <span className="font-medium">{t.hero.cardQuality}</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 bg-paper border border-ink/5 text-ink">
                    <ShieldCheck className="w-4 h-4 text-brass-dark shrink-0" />
                    <span className="font-medium">{t.hero.cardProducts}</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-3.5 border-t border-dashed border-ink/15 flex items-center justify-between text-xs text-ink-soft/80">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {BUSINESS_INFO.openingHours}
                  </span>
                  <span className="font-semibold text-glass-dark">{t.hero.cardRetail}</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
