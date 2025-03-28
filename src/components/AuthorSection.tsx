import React from 'react';
import { Button } from '@/components/ui/button';
import ParticleEffect from './ParticleEffect';
const AuthorSection: React.FC = () => {
  return <section id="author" className="py-24 relative">
      <ParticleEffect />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-cosmic-blue via-cosmic-purple to-cosmic-pink rounded-2xl p-1">
                  <div className="w-full h-full bg-cosmic-deep flex items-center justify-center rounded-xl overflow-hidden">
                    {/* Placeholder for author image - replace with actual image */}
                    <div className="w-full h-full bg-cosmic-deep flex items-center justify-center relative overflow-hidden">
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-full h-full text-cosmic-purple/10">
                        <path fill="currentColor" d="M42.7,-62.9C53.8,-55.9,60.3,-41.3,65.6,-26.2C70.9,-11.1,75.1,4.6,70.6,17.2C66.2,29.8,53.1,39.4,40,48.6C26.9,57.8,13.4,66.6,-0.7,67.6C-14.8,68.5,-29.6,61.6,-40.8,51.5C-52,41.4,-59.6,28.2,-64.3,13.2C-69,
                        -1.8,-70.7,-18.6,-64.2,-31C-57.7,-43.4,-42.9,-51.5,-29.5,-57.3C-16.1,-63,-8,-66.6,3.6,-71.9C15.3,-77.3,30.5,-84.6,42.7,-79.9C54.8,-75.2,72.5,-58.3,42.7,-62.9Z" transform="translate(100 100)" />
                      </svg>
                      <div className="relative z-10 text-center p-6">
                        <span className="text-6xl">👩‍🚀</span>
                        <h3 className="font-display text-xl mt-4">Ines Cherif</h3>
                        <p className="text-sm text-foreground/60 mt-1">Researcher & Author</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-cosmic-blue/30 via-cosmic-purple/30 to-cosmic-pink/30 rounded-2xl -z-10"></div>
              </div>
            </div>
            
            <div className="lg:w-3/5 space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">
                About the Author
              </h2>
              
              <p className="text-foreground/80 leading-relaxed">Ines Cherif is an aspiring engineer and computer science student with a strong foundation in web development and problem-solving. With her passion for both technology and learning, she combines her technical expertise in full-stack development with her drive to master complex mathematical concepts, particularly in areas like linear algebra and networking.</p>
              
              <p className="text-foreground/80 leading-relaxed">Her journey as a self-motivated learner has been marked by an ongoing commitment to improving her skills in coding, algorithm design, and practical applications, while also embracing the interdisciplinary nature of technology. Through her work, Ines seeks to bridge the gap between theory and real-world problem-solving, always striving for simplicity and clarity in her approach to complex challenges.</p>
              
              <div className="border-l-4 border-cosmic-purple/50 pl-4 py-2 italic text-foreground/70">Knowledge is an infinite ocean, and the more you dive, the more you discover. As the Quran says:   عَلَّمَ ٱلْإِنسَـٰنَ مَا لَمْ يَعْلَمْ ٥ - taught humanity what they knew not (Al-Alaq 96:5). This is the foundation of my pursuit: always seeking new knowledge and using it to better understand the world."</div>
              
              <div className="pt-4">
                <Button className="button-glow bg-cosmic-purple hover:bg-cosmic-purple/90">
                  Contact Author
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AuthorSection;