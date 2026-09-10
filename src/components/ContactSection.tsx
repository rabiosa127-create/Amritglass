import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
            {t.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.contact.sub}
          </p>
        </div>

        {/* Contact Grid: Info Cards + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Details & Action Buttons (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Business Info Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center justify-between">
                <span>{language === 'as' ? 'অমৃত গ্লাছ' : BUSINESS_INFO.name}</span>
                <span className="text-xs font-semibold text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  {language === 'as' ? 'স্থাপিত ১৯৯৬' : 'Est. 1996'}
                </span>
              </h3>

              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{t.contact.addressLabel}</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {BUSINESS_INFO.location.address},<br />
                      {BUSINESS_INFO.location.state}, {BUSINESS_INFO.location.country}<br />
                      PIN: {BUSINESS_INFO.location.pin}
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{t.contact.hoursLabel}</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      {BUSINESS_INFO.openingHours}
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{t.contact.phoneLabel}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
                      <a
                        href={`tel:+91${BUSINESS_INFO.phones[0].number}`}
                        className="text-sm font-medium text-slate-700 hover:text-blue-900 transition-colors"
                      >
                        {BUSINESS_INFO.phones[0].display}
                      </a>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <a
                        href={`tel:+91${BUSINESS_INFO.phones[1].number}`}
                        className="text-sm font-medium text-slate-700 hover:text-blue-900 transition-colors"
                      >
                        {BUSINESS_INFO.phones[1].display}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{t.contact.whatsAppLabel}</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      {BUSINESS_INFO.whatsapp.display}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{t.contact.emailLabel}</h4>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm text-blue-900 hover:underline mt-1 block"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons as requested */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-3">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
                {t.contact.actionHeading}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:+91${BUSINESS_INFO.phones[0].number}`}
                  id="contact-call-btn-1"
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-950 text-white py-3 px-4 rounded-xl text-sm font-semibold transition-all active:scale-98 shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.contact.callBtn} {BUSINESS_INFO.phones[0].number}</span>
                </a>

                <a
                  href={`tel:+91${BUSINESS_INFO.phones[1].number}`}
                  id="contact-call-btn-2"
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-950 text-white py-3 px-4 rounded-xl text-sm font-semibold transition-all active:scale-98 shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.contact.callBtn} {BUSINESS_INFO.phones[1].number}</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsapp.link()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#0d6f63] text-white py-3 px-4 rounded-xl text-sm font-semibold transition-all active:scale-98 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{t.contact.whatsAppBtn}</span>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}?subject=Enquiry%20-%20Amrit%20Glass`}
                  id="contact-email-btn"
                  className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 py-3 px-4 rounded-xl text-sm font-semibold transition-all active:scale-98"
                >
                  <Mail className="w-4 h-4 text-blue-700" />
                  <span>{t.contact.emailBtn}</span>
                </a>
              </div>

              <a
                href={BUSINESS_INFO.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-directions-btn"
                className="w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-950 text-white py-3.5 px-4 rounded-xl text-sm font-semibold transition-all active:scale-98 shadow-xs mt-1"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.contact.directionsBtn}</span>
              </a>
            </div>

          </div>

          {/* Interactive Map & Local Presence Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
              
              {/* Map Container */}
              <div className="relative h-80 sm:h-96 w-full bg-slate-100">
                <iframe
                  title="Amrit Glass Location - Biswanath Chariali, Assam"
                  src={BUSINESS_INFO.location.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="p-5 bg-white border-t border-slate-100 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">
                    Biswanath Chariali, Assam – 784176
                  </span>
                  <a
                    href={BUSINESS_INFO.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-700 hover:underline"
                  >
                    {t.contact.openMaps}
                  </a>
                </div>
                <p className="text-xs text-slate-500">
                  {t.contact.mapNote}
                </p>
              </div>
            </div>

            {/* Timings & Visit Notice Card */}
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200/70 text-slate-800">
              <h4 className="text-sm font-bold text-blue-950 mb-2">
                {t.contact.showroomHeading}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                {t.contact.showroomP1}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                {t.contact.showroomP2}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
