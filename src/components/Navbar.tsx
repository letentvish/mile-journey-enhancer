
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-mile-blue">
            Multiplierskraft
          </h1>
          <span className="text-xs ml-2 text-mile-orange font-medium">Delivering Impact</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#what-is-mile" className="text-mile-dark-gray hover:text-mile-blue transition-colors">About</a>
          <a href="#features" className="text-mile-dark-gray hover:text-mile-blue transition-colors">Features</a>
          <a href="#benefits" className="text-mile-dark-gray hover:text-mile-blue transition-colors">Benefits</a>
          <a href="#highlights" className="text-mile-dark-gray hover:text-mile-blue transition-colors">Highlights</a>
          <Button className="bg-mile-blue hover:bg-mile-blue/90">Get Started</Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-mile-blue" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#what-is-mile" 
              className="text-mile-dark-gray hover:text-mile-blue transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#features" 
              className="text-mile-dark-gray hover:text-mile-blue transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#benefits" 
              className="text-mile-dark-gray hover:text-mile-blue transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#highlights" 
              className="text-mile-dark-gray hover:text-mile-blue transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Highlights
            </a>
            <Button 
              className="bg-mile-blue hover:bg-mile-blue/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
