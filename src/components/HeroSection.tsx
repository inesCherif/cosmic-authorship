
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ParticleEffect from './ParticleEffect';

const HeroSection: React.FC = () => {
  return (
    <section className="cosmic-backdrop min-h-screen w-full flex flex-col items-center justify-center relative pt-20 pb-10">
      <ParticleEffect />

      <div className="container mx-auto relative z-10 px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-3/5 space-y-8 text-center lg:text-left">
            <div className="space-y-2">
              <h2 className="font-heading uppercase tracking-wider text-cosmic-blue/80 text-sm md:text-base">
                A Scientific Exploration of Faith
              </h2>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-glow pb-2 tracking-tight">
                <span className="text-gradient">THE PROBABILITY</span>
                <br />
                <span className="text-gradient">OF ISLAM</span>
              </h1>
              <p className="font-heading text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl">
                A Monte Carlo Approach to Key Religious Questions
              </p>
            </div>

            <p className="text-foreground/60 text-sm md:text-base max-w-2xl">
              Exploring the intersection of mathematics, probability theory, 
              and religious belief through advanced simulation techniques.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="button-glow bg-cosmic-purple hover:bg-cosmic-purple/90">
                <Link to="/simulations">
                  Run Simulations
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <a href="#about">
                  Learn More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-y-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:w-2/5 relative animate-float">
            <div className="relative w-full aspect-square max-w-md mx-auto cosmic-grid rounded-full overflow-hidden p-1">
              <div className="absolute inset-2 rounded-full overflow-hidden bg-cosmic-deep/80 backdrop-blur">
                <img
                  src="/lovable-uploads/aab924bf-c9bd-46dd-8a5a-82e7b0b3e5ef.png"
                  alt="The Probability of Islam"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-cosmic-purple/20 via-transparent to-cosmic-blue/20 rounded-full animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-cosmic-purple/50 hover:text-cosmic-purple transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
