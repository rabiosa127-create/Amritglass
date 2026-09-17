import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { useLanguage } from '../context/LanguageContext';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 rounded-full bg-white/90 hover:bg-white text-ink-soft hover:text-ink border border-ink/10 shadow-md backdrop-blur-md transition-all active:scale-95 animate-in fade-in slide-in-from-bottom-2"
          aria-label={t.footer.backToTop}
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Quick Contact Card / Pill */}
      <div className="pointer-events-auto glass-pill rounded-full p-1.5 shadow-lg flex items-center gap-1.5 bg-white/95">
        
        {/* Call Quick Action */}
        <a
          href={`tel:+91${BUSINESS_INFO.phones[0].number}`}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-ink hover:bg-paper transition-colors"
          title={`${t.floating.call} ${BUSINESS_INFO.phones[0].display}`}
        >
          <Phone className="w-3.5 h-3.5 text-brass-dark" />
          <span className="hidden xs:inline">{t.floating.call}</span>
        </a>

        <div className="w-[1px] h-4 bg-ink/10" />

        {/* WhatsApp Quick Action */}
        <a
          href={BUSINESS_INFO.whatsapp.link()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold text-white bg-[#128C7E] hover:bg-[#0d6f63] shadow-xs transition-all active:scale-95"
          title={t.floating.whatsApp}
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>{t.floating.whatsApp}</span>
        </a>

      </div>

    </div>
  );
};
