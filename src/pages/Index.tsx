
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IntroductionSection from '@/components/IntroductionSection';
import JourneySection from '@/components/JourneySection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import HighlightsSection from '@/components/HighlightsSection';
import ImplementationSection from '@/components/ImplementationSection';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll function for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Account for fixed header
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <JourneySection />
      <FeaturesSection />
      <BenefitsSection />
      <HighlightsSection />
      <ImplementationSection />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
