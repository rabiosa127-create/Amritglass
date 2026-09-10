import React from 'react';
import { MessageCircle, ArrowDownRight, Award, ShieldCheck, MapPin, Calendar, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50"
    >
      {/* Subtle Architectural Blueprint/Grid Accents in Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Trust Badge / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 text-xs sm:text-sm font-semibold mb-6 w-fit shadow-xs">
              <Award className="w-4 h-4 text-blue-700" />
              <span>{t.hero.estBadge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4">
              {language === 'as' ? 'অমৃত গ্লাছ' : BUSINESS_INFO.name}
            </h1>

            {/* Supporting Headline */}
            <p className="text-xl sm:text-2xl font-semibold text-blue-900 tracking-tight mb-4">
              {t.hero.tagline}
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#products"
                id="hero-explore-products-btn"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-950 text-white px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 active:scale-98"
              >
                <span>{t.hero.exploreProducts}</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.whatsapp.link()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 bg-[#128C7E] hover:bg-[#0d6f63] text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{t.hero.whatsAppUs}</span>
              </a>
            </div>

            {/* Quick Location & Longevity pill */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{t.hero.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.hero.dependable}</span>
              </div>
            </div>
          </div>

          {/* Establishment Showcase Card (Replaces photo) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Glow / Elevation */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-100/80 via-slate-100/60 to-blue-50/80 rounded-3xl -rotate-1 transform blur-xs" />
              
              {/* Prestigious Establishment Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl p-6 sm:p-8">
                
                {/* Subtle blueprint grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Card Header */}
                <div className="relative flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-blue-700" />
                    <span>{t.hero.cardEstablished}</span>
                  </div>
                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    Biswanath Chariali
                  </span>
                </div>

                {/* Big Year Display */}
                <div className="relative py-8 text-center">
                  <div className="text-[76px] sm:text-[92px] font-extrabold tracking-tighter text-slate-900 leading-none select-none">
                    {language === 'as' ? '১৯৯৬' : BUSINESS_INFO.established}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-bold tracking-[0.2em] text-blue-900 uppercase">
                    {t.hero.cardServing}
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    {language === 'as' ? 'শোণিতপুৰ, বিশ্বনাথ চাৰিআলি • অসম – ৭৮৪১৭৬' : 'Sonitpur, Biswanath Chariali • Assam – 784176'}
                  </p>
                </div>

                {/* Core Highlights */}
                <div className="relative space-y-2.5 pt-5 border-t border-slate-100 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">{t.hero.cardQuality}</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-800">
                    <Award className="w-4 h-4 text-blue-700 shrink-0" />
                    <span className="font-medium">{t.hero.cardProducts}</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-3.5 border-t border-dashed border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {BUSINESS_INFO.openingHours}
                  </span>
                  <span className="font-semibold text-blue-900">{t.hero.cardRetail}</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
