import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.whyChooseUs, href: '#why-choose-us' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Top Info Bar (Desktop only, minimal) */}
        <div className="hidden lg:flex items-center justify-between text-xs text-slate-600 mb-2 px-4 py-1">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              {t.nav.location}
            </span>
            <span className="text-slate-300">•</span>
            <span>{t.nav.open}: {BUSINESS_INFO.openingHours}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:+91${BUSINESS_INFO.phones[0].number}`}
              className="hover:text-blue-700 font-medium transition-colors"
            >
              {t.nav.call}: {BUSINESS_INFO.phones[0].display}
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={`tel:+91${BUSINESS_INFO.phones[1].number}`}
              className="hover:text-blue-700 font-medium transition-colors"
            >
              {BUSINESS_INFO.phones[1].display}
            </a>
          </div>
        </div>

        {/* Main Nav Container with Frosted Glass Effect */}
        <nav
          id="main-nav"
          className={`glass-nav rounded-2xl sm:rounded-full px-3.5 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 shadow-sm shadow-slate-200/50 ${
            isScrolled ? 'border-slate-300/80 shadow-md' : 'border-slate-200/80'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#home"
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 flex items-center justify-center text-white shadow-sm font-bold tracking-wider text-base sm:text-lg border border-white/20">
                AG
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-medium -mt-0.5 tracking-wide">
                  {t.nav.subtitle}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 lg:px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-900 text-white shadow-xs'
                        : 'text-slate-700 hover:text-blue-900 hover:bg-slate-100/80'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Actions: Language Switcher, WhatsApp & Mobile Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Language Switcher Pill */}
              <div
                id="language-switcher-navbar"
                className="inline-flex items-center bg-slate-100/90 p-0.5 sm:p-1 rounded-full border border-slate-200/90"
                role="group"
                aria-label={t.nav.langToggleAria}
              >
                <div className="hidden xs:flex items-center pl-1.5 pr-1 text-slate-400">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <button
                  type="button"
                  id="nav-lang-en-btn"
                  onClick={() => setLanguage('en')}
                  className={`px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-200 ${
                    language === 'en'
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  aria-pressed={language === 'en'}
                  title="Switch site to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  id="nav-lang-as-btn"
                  onClick={() => setLanguage('as')}
                  className={`px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-200 ${
                    language === 'as'
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  aria-pressed={language === 'as'}
                  title="অসমীয়া ভাষালৈ সলনি কৰক"
                >
                  অসমীয়া
                </button>
              </div>

              {/* Primary Action Button (WhatsApp) */}
              <a
                href={BUSINESS_INFO.whatsapp.link()}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-whatsapp-btn"
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#128C7E] hover:bg-[#0d6f63] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 active:scale-95"
                title="Chat with Amrit Glass on WhatsApp"
              >
                <MessageCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-white" />
                <span className="hidden sm:inline whitespace-nowrap">{t.nav.whatsAppUs}</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle"
                className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Frosted Glass Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden mt-2 glass-nav rounded-2xl p-4 shadow-xl border border-slate-200/90 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {/* Mobile Language Switcher Row */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/70">
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-700" />
                {t.nav.switchPrompt}
              </span>
              <div className="inline-flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                    language === 'en'
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('as')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                    language === 'as'
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  অসমীয়া
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-900 text-white'
                        : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200/70 flex flex-col gap-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{t.nav.location}</span>
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <a
                  href={`tel:+91${BUSINESS_INFO.phones[0].number}`}
                  className="flex items-center gap-2 text-slate-800 font-semibold py-1.5 px-3 bg-slate-100 rounded-lg hover:bg-slate-200"
                >
                  <Phone className="w-4 h-4 text-blue-700" />
                  {t.nav.call} {BUSINESS_INFO.phones[0].display}
                </a>
                <a
                  href={`tel:+91${BUSINESS_INFO.phones[1].number}`}
                  className="flex items-center gap-2 text-slate-800 font-semibold py-1.5 px-3 bg-slate-100 rounded-lg hover:bg-slate-200"
                >
                  <Phone className="w-4 h-4 text-blue-700" />
                  {t.nav.call} {BUSINESS_INFO.phones[1].display}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
