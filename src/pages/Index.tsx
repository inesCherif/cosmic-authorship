
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AuthorSection from '@/components/AuthorSection';
import FooterSection from '@/components/FooterSection';
import StarField from '@/components/StarField';

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background effects */}
      <StarField />
      
      {/* Content */}
      <NavBar />
      <HeroSection />
      <AboutSection />
      <AuthorSection />
      <FooterSection />
    </div>
  );
};

export default Index;
