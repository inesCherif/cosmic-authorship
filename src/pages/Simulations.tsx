
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import StarField from '@/components/StarField';

const Simulations = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      <StarField />
      
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
          Simulation Dashboard
        </h1>
        <p className="text-foreground/80 max-w-2xl mx-auto mb-10">
          This page is under development. The simulation features for "The Probability of Islam" 
          will be available in the future.
        </p>
        
        <Button asChild className="button-glow">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Simulations;
