import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ProductEnquiry } from './components/ProductEnquiry';
import { TargetCustomers } from './components/TargetCustomers';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OurCommitment } from './components/OurCommitment';
import { Gallery } from './components/Gallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'products', 'why-choose-us', 'gallery', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-blue-100 selection:text-blue-950 font-sans">
      {/* Sticky / Floating Navigation */}
      <Navbar activeSection={activeSection} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Products Section */}
        <ProductsSection />

        {/* 5. Product Enquiry CTA */}
        <ProductEnquiry />

        {/* 6. Target Customers (For Every Home & Project) */}
        <TargetCustomers />

        {/* 7. Why Choose Amrit Glass? */}
        <WhyChooseUs />

        {/* 8. Our Commitment */}
        <OurCommitment />

        {/* 9. Visual Gallery with Lightbox */}
        <Gallery />

        {/* 10. Visit Amrit Glass (Contact & Map) */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating Quick Actions (WhatsApp & Call) */}
      <FloatingActions />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
