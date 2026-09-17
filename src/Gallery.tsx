import React, { useState } from 'react';
import { Eye, X, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/businessData';
import { GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const { t } = useLanguage();

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const getTranslatedGalleryInfo = (item: GalleryItem) => {
    const keyMap: Record<string, keyof typeof t.gallery.items> = {
      'g-frosted': 'frosted',
      'g-rack': 'rack',
      'g-tower-bolt': 'towerBolt',
      'g-clear': 'clear',
      'g-hinges': 'hinges',
      'g-tinted': 'tinted',
      'g-screws': 'screws',
      'g-ultra-clear': 'ultraClear',
      'g-nails': 'nails',
    };
    const transKey = keyMap[item.id];
    if (transKey && t.gallery.items[transKey]) {
      return t.gallery.items[transKey];
    }
    return { title: item.title, category: item.category };
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-glass-dark mb-3">
            {t.gallery.badge}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight mb-4">
            {t.gallery.heading}
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            {t.gallery.sub}
          </p>
        </div>

        {/* Gallery Grid (Responsive Asymmetric / Bento Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => {
            const isLarge = idx === 0 || idx === 3;
            const { title, category } = getTranslatedGalleryInfo(item);

            return (
              <div
                key={item.id}
                id={`gallery-item-${idx}`}
                onClick={() => openLightbox(item)}
                className={`group relative overflow-hidden bg-paper border border-ink/10 cursor-pointer hover:border-brass transition-colors duration-300 ${
                  isLarge ? 'lg:col-span-2 sm:row-span-1' : ''
                }`}
              >
                <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.altText}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold text-brass-light uppercase tracking-wider">
                          {category}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-white tracking-tight mt-1">
                          {title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-ink transition-colors">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (() => {
        const { title, category } = getTranslatedGalleryInfo(selectedItem);
        return (
          <div
            id="gallery-lightbox-modal"
            className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl w-full bg-ink-soft border border-white/10 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header / Close */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-ink/60">
                <div>
                  <span className="text-xs font-semibold text-brass-light uppercase tracking-wider">
                    {category}
                  </span>
                  <h4 className="font-display text-lg font-semibold text-white">
                    {title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-2 rounded-xl text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={t.gallery.close}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.altText}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              {/* Modal Footer CTA */}
              <div className="px-6 py-4 bg-ink flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                <p className="text-xs sm:text-sm text-white/50">
                  {BUSINESS_INFO.name} • Biswanath Chariali, Assam (PIN: 784176)
                </p>
                <a
                  href={BUSINESS_INFO.whatsapp.link(`Hello Amrit Glass, I am enquiring regarding ${title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#0d6f63] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{t.gallery.enquireOnWhatsApp}</span>
                </a>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};
