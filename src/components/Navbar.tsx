
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
        isScrolled ? "bg-mile-navy/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM20 35C11.716 35 5 28.284 5 20C5 11.716 11.716 5 20 5C28.284 5 35 11.716 35 20C35 28.284 28.284 35 20 35Z" fill="#FFC107"/>
              <path d="M25 15C25 17.761 22.761 20 20 20C17.239 20 15 17.761 15 15C15 12.239 17.239 10 20 10C22.761 10 25 12.239 25 15Z" fill="#FFC107"/>
              <path d="M30 25C30 29.418 25.523 33 20 33C14.477 33 10 29.418 10 25C10 20.582 14.477 17 20 17C25.523 17 30 20.582 30 25Z" fill="#FFC107"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-white">
            Multiplierskraft
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center rounded-full px-4 py-2 mr-4">
            <a href="#" className="text-white hover:text-mile-gold transition-colors px-4 py-1">Home</a>
            <a href="#what-is-mile" className="text-white hover:text-mile-gold transition-colors px-4 py-1">About Us</a>
            <a href="#features" className="text-white hover:text-mile-gold transition-colors px-4 py-1">Solutions</a>
            <a href="#benefits" className="text-white hover:text-mile-gold transition-colors px-4 py-1">Blog</a>
            <a href="#highlights" className="text-white hover:text-mile-gold transition-colors px-4 py-1">Contact Us</a>
          </nav>
          <Button className="bg-mile-gold hover:bg-[#FFD54F] text-mile-dark-gray font-bold rounded-full">
            Login
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-mile-navy py-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-white hover:text-mile-gold transition-colors py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#what-is-mile" 
              className="text-white hover:text-mile-gold transition-colors py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#features" 
              className="text-white hover:text-mile-gold transition-colors py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#benefits" 
              className="text-white hover:text-mile-gold transition-colors py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="#highlights" 
              className="text-white hover:text-mile-gold transition-colors py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
            <Button 
              className="bg-mile-gold hover:bg-[#FFD54F] text-mile-dark-gray font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
