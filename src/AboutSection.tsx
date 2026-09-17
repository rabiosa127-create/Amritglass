import React from 'react';
import { MapPin, Clock, CheckCircle2, Shield, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import clearFloatGlassImg from '../assets/images/clear_float_glass.jpg';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image & Key Badges Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Subtle background card border */}
              <div className="relative overflow-hidden border border-ink/10 glass-edge shadow-sm bg-paper">
                <img
                  src={clearFloatGlassImg}
                  alt="Amrit Glass architectural glass and materials in Biswanath Chariali"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />

                {/* Overlay information card */}
                <div className="p-5 bg-white border-t border-ink/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-glass-dark uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {t.about.cardBadge}
                    </span>
                    <span className="text-xs text-ink-soft/70 font-medium">{t.about.cardTown}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-ink/10 text-xs">
                    <div className="flex items-center gap-1.5 text-ink-soft">
                      <Clock className="w-3.5 h-3.5 text-brass-dark shrink-0" />
                      <span>{BUSINESS_INFO.openingHours}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-ink-soft">
                      <MapPin className="w-3.5 h-3.5 text-brass-dark shrink-0" />
                      <span>{t.about.pin}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accent Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-brass px-4 py-2.5 shadow-md items-center gap-2 text-xs font-bold text-ink">
                <Shield className="w-4 h-4" />
                <span>{t.about.floatingBadge}</span>
              </div>
            </div>
          </div>

          {/* Business Text Side */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-sm font-semibold text-glass-dark mb-3">
              {t.about.badge}
            </p>

            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight leading-tight mb-6">
              {t.about.heading}
            </h2>

            <div className="space-y-4 text-ink-soft text-base sm:text-lg leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p className="text-ink font-medium">{t.about.p3}</p>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-ink/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-glass shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-ink">{t.trustStrip.qualityTitle}</h3>
                  <p className="text-xs text-ink-soft/70 mt-0.5">{t.trustStrip.qualitySub}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-glass shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-ink">{t.trustStrip.priceTitle}</h3>
                  <p className="text-xs text-ink-soft/70 mt-0.5">{t.trustStrip.priceSub}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-glass shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-ink">{t.trustStrip.serviceTitle}</h3>
                  <p className="text-xs text-ink-soft/70 mt-0.5">{t.trustStrip.serviceSub}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
