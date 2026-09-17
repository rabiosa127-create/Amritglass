import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.whyChooseUs, href: '#why-choose-us' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const productCategories = [
    t.products.items.glass.name,
    t.products.items.doors.name,
    t.products.items.windowGlass.name,
    t.products.items.locksHandles.name,
    t.products.items.bathroomFittings.name,
    t.products.items.plywoodLaminates.name,
  ];

  return (
    <footer className="bg-ink text-white/50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brass flex items-center justify-center text-ink font-display font-semibold text-lg">
                AG
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white tracking-tight">
                  {language === 'as' ? 'অমৃত গ্লাছ' : BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-white/40 font-medium">
                  {language === 'as' ? 'স্থাপিত ১৯৯৬' : `Established ${BUSINESS_INFO.established}`}
                </p>
              </div>
            </div>

            <p className="font-display italic text-base text-white/70 mb-3">
              {t.footer.tagline}
            </p>

            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-sm">
              {t.footer.desc}
            </p>

            <div className="flex items-start gap-2.5 text-xs text-white/50">
              <MapPin className="w-4 h-4 text-brass-light shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.location.fullDisplay}</span>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white/90 uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white/90 uppercase tracking-wider mb-4">
              {t.footer.categories}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {productCategories.slice(1).map((cat) => (
                <li key={cat}>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white/90 uppercase tracking-wider mb-4">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brass-light shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a
                    href={`tel:+91${BUSINESS_INFO.phones[0].number}`}
                    className="hover:text-white transition-colors"
                  >
                    {BUSINESS_INFO.phones[0].display}
                  </a>
                  <a
                    href={`tel:+91${BUSINESS_INFO.phones[1].number}`}
                    className="hover:text-white transition-colors"
                  >
                    {BUSINESS_INFO.phones[1].display}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#128C7E] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsapp.link()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {BUSINESS_INFO.whatsapp.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brass-light shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/40">
              {t.footer.hours}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {language === 'as' ? 'অমৃত গ্লাছ' : BUSINESS_INFO.name}. {t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <span>{t.footer.servingSince}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-white transition-colors"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
