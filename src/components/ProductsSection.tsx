import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../data/businessData';
import { useLanguage } from '../context/LanguageContext';

interface ProductsSectionProps {
  onSelectImage?: (image: string, title: string, category: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectImage }) => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
            {t.products.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.products.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
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
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Product Image Area */}
                <div 
                  className="relative h-56 sm:h-64 overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => onSelectImage && onSelectImage(product.image, productName, 'Product Range')}
                >
                  <img
                    src={product.image}
                    alt={product.altText}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Index Tag */}
                  <span className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase">
                    0{index + 1}
                  </span>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-blue-900 transition-colors">
                    {productName}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                    {productDesc}
                  </p>

                  {/* Action Link: Enquire on WhatsApp */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#128C7E] hover:text-[#0d6f63] transition-colors group/btn"
                      title={`Enquire on WhatsApp about ${productName}`}
                    >
                      <MessageCircle className="w-4 h-4 fill-[#128C7E]" />
                      <span>{t.products.enquireBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
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
