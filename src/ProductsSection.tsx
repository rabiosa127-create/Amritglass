import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../data/businessData';
import { useLanguage } from '../context/LanguageContext';

interface ProductsSectionProps {
  onSelectImage?: (image: string, title: string, category: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectImage }) => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-16 sm:py-24 bg-paper border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-glass-dark mb-3">
            {t.products.badge}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight mb-4">
            {t.products.heading}
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            {t.products.sub}
          </p>
        </div>

        {/* 6 Product Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product, index) => {
            const keyMap: Record<string, keyof typeof t.products.items> = {
              'glass': 'glass',
              'doors': 'doors',
              'window-glass': 'windowGlass',
              'locks-handles': 'locksHandles',
              'bathroom-fittings': 'bathroomFittings',
              'plywood-laminates': 'plywoodLaminates',
            };
            const itemKey = keyMap[product.id];
            const productTrans = (itemKey && t.products.items[itemKey]) || { name: product.name, description: product.description };
            const productName = productTrans.name;
            const productDesc = productTrans.description;
            const enquiryMessage = `Hello Amrit Glass, I am enquiring about ${productName}.`;
            const whatsappLink = BUSINESS_INFO.whatsapp.link(enquiryMessage);

            return (
              <article
                key={product.id}
                id={`product-card-${product.id}`}
                className="group flex flex-col bg-white overflow-hidden border border-ink/10 hover:border-glass transition-colors duration-300"
              >
                {/* Product Image Area */}
                <div 
                  className="relative h-56 sm:h-64 overflow-hidden bg-paper-dim cursor-pointer"
                  onClick={() => onSelectImage && onSelectImage(product.image, productName, 'Product Range')}
                >
                  <img
                    src={product.image}
                    alt={product.altText}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Catalog Index Tag */}
                  <span className="absolute top-3 left-3 bg-ink/85 backdrop-blur-xs text-paper text-[11px] font-semibold px-2.5 py-1 figure-tight">
                    Cat. 0{index + 1}
                  </span>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-display text-xl font-semibold text-ink tracking-tight mb-2">
                    {productName}
                  </h3>

                  <p className="text-sm text-ink-soft leading-relaxed mb-6 flex-1">
                    {productDesc}
                  </p>

                  {/* Action Link: Enquire on WhatsApp */}
                  <div className="pt-4 border-t border-ink/10 flex items-center justify-between">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#128C7E] hover:text-[#0d6f63] transition-colors"
                      title={`Enquire on WhatsApp about ${productName}`}
                    >
                      <MessageCircle className="w-4 h-4 fill-[#128C7E]" />
                      <span>{t.products.enquireBtn}</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
