import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppDrawer } from './components/WhatsAppDrawer';

export default function App() {
  const [quoteDrawerOpen, setQuoteDrawerOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenQuote = (defaultPlan?: string) => {
    setSelectedPlan(defaultPlan);
    setQuoteDrawerOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-[#14121F]">
        <Navbar onOpenQuote={handleOpenQuote} />
        <main>
          <Hero onOpenQuote={handleOpenQuote} />
          <AboutSection onOpenQuote={handleOpenQuote} />
          <ServicesSection onOpenQuote={handleOpenQuote} />
          <PortfolioSection onOpenQuote={handleOpenQuote} />
          <TestimonialsSection />
          <PricingSection onOpenQuote={handleOpenQuote} />
          <ContactSection />
        </main>
        <Footer />
        <FloatingWhatsApp onOpenQuote={handleOpenQuote} />
        <WhatsAppDrawer
          isOpen={quoteDrawerOpen}
          initialPlan={selectedPlan}
          onClose={() => setQuoteDrawerOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
