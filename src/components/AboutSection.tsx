
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ParticleEffect from './ParticleEffect';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-cosmic-deep">
      <ParticleEffect />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gradient">
            About The Research
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            An innovative application of computational methods to religious inquiry, 
            offering a fresh perspective on age-old questions about faith and belief.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-background/40 backdrop-blur border-cosmic-purple/10 hover:border-cosmic-purple/30 transition-colors group">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-cosmic-purple/10 flex items-center justify-center mb-6 group-hover:bg-cosmic-purple/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cosmic-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Monte Carlo Methodology
              </h3>
              <p className="text-foreground/70">
                Using randomized sampling techniques to model complex religious 
                premises and evaluate their probabilistic outcomes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/40 backdrop-blur border-cosmic-purple/10 hover:border-cosmic-purple/30 transition-colors group">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-cosmic-purple/10 flex items-center justify-center mb-6 group-hover:bg-cosmic-purple/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cosmic-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Key Religious Questions
              </h3>
              <p className="text-foreground/70">
                Addressing fundamental inquiries about the existence of God, 
                the authenticity of religious texts, and more.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/40 backdrop-blur border-cosmic-purple/10 hover:border-cosmic-purple/30 transition-colors group">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-cosmic-purple/10 flex items-center justify-center mb-6 group-hover:bg-cosmic-purple/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cosmic-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Data-Driven Insights
              </h3>
              <p className="text-foreground/70">
                Synthesizing historical, textual, and scientific evidence 
                to inform simulation parameters and analysis.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 max-w-3xl mx-auto bg-gradient-to-r from-cosmic-deep via-background to-cosmic-deep p-8 rounded-lg border border-cosmic-purple/10">
          <h3 className="font-heading text-2xl font-bold mb-4 text-center">Report Objectives</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-cosmic-purple mr-2">•</span>
              <span className="text-foreground/80">To bridge the perceived gap between scientific methodology and religious inquiry</span>
            </li>
            <li className="flex items-start">
              <span className="text-cosmic-purple mr-2">•</span>
              <span className="text-foreground/80">To quantify levels of certainty regarding key Islamic theological propositions</span>
            </li>
            <li className="flex items-start">
              <span className="text-cosmic-purple mr-2">•</span>
              <span className="text-foreground/80">To provide a framework for rational evaluation of religious claims</span>
            </li>
            <li className="flex items-start">
              <span className="text-cosmic-purple mr-2">•</span>
              <span className="text-foreground/80">To encourage meaningful dialogue between scientific and religious communities</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
