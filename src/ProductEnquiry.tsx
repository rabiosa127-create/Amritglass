import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { useLanguage } from '../context/LanguageContext';

export const ProductEnquiry: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-ink text-paper p-8 sm:p-12 lg:p-14 border-l-4 border-brass">

          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-semibold text-brass-light mb-4">
              {t.enquiry.badge}
            </p>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-paper tracking-tight mb-3">
              {t.enquiry.heading}
            </h2>

            <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed">
              {t.enquiry.sub}
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.whatsapp.link()}
                target="_blank"
                rel="noopener noreferrer"
                id="enquiry-whatsapp-btn"
                className="inline-flex items-center gap-2.5 bg-[#128C7E] hover:bg-[#0d6f63] text-white px-6 py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{t.enquiry.enquireWhatsApp}</span>
              </a>

              <a
                href={`tel:+91${BUSINESS_INFO.phones[0].number}`}
                id="enquiry-call-btn-1"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-paper border border-white/20 px-6 py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 active:scale-98"
              >
                <Phone className="w-4 h-4 text-brass-light" />
                <span>{t.enquiry.callStore} {BUSINESS_INFO.phones[0].display}</span>
              </a>

              <a
                href={`tel:+91${BUSINESS_INFO.phones[1].number}`}
                id="enquiry-call-btn-2"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-paper border border-white/20 px-6 py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 active:scale-98"
              >
                <Phone className="w-4 h-4 text-brass-light" />
                <span>{t.enquiry.callStore} {BUSINESS_INFO.phones[1].display}</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
              <span>Biswanath Chariali, Assam</span>
              <span>·</span>
              <span>{t.footer.hours}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
