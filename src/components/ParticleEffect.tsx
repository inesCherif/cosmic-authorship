
import React, { useEffect, useRef } from 'react';

interface ParticleEffectProps {
  className?: string;
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    
    // Create particles
    const particleCount = 15;
    const particles: HTMLDivElement[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('star-particle');
      
      // Randomize position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Randomize size
      const size = 1 + Math.random() * 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Randomize animation delay
      particle.style.animationDelay = `${Math.random() * 10}s`;
      
      // Randomize animation duration
      particle.style.animationDuration = `${10 + Math.random() * 20}s`;
      
      // Randomize opacity
      particle.style.opacity = `${0.3 + Math.random() * 0.7}`;
      
      // Randomize color
      const colors = ['#33C3F0', '#8B5CF6', '#D946EF', 'white'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      container.appendChild(particle);
      particles.push(particle);
    }
    
    return () => {
      particles.forEach(particle => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className || ''}`}
    />
  );
};

export default ParticleEffect;
