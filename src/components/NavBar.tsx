
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-cosmic-purple/10">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-display font-bold text-gradient">
            ISAHM
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="text-foreground/70 hover:text-foreground">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="ghost" className="text-foreground/70 hover:text-foreground">
            <Link to="#about">About</Link>
          </Button>
          <Button asChild variant="ghost" className="text-foreground/70 hover:text-foreground">
            <Link to="#author">Author</Link>
          </Button>
          <Button asChild variant="outline" className="button-glow">
            <Link to="/simulations">
              Run Simulations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
