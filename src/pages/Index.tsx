import { useState } from 'react';
import PreLoader from '@/components/PreLoader';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ManifestoSection from '@/components/ManifestoSection';
import AboutSection from '@/components/AboutSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import TechStackSection from '@/components/TechStackSection';
import CredentialsSection from '@/components/CredentialsSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <PreLoader onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-background transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <main>
          <HeroSection />
          <ManifestoSection />
          <AboutSection />
          <ExpertiseSection />
          <TechStackSection />
          <CredentialsSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
