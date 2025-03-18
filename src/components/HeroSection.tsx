
import React from 'react';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

const FeatureTag = ({ text }: { text: string }) => {
  return (
    <div className="bg-white/20 backdrop-blur-sm text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
      {text === "AI-Powered Learning" && (
        <div className="w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
            <path d="M13 7H11V13H17V11H13V7Z" fill="white"/>
          </svg>
        </div>
      )}
      {text === "Performance Analytics" && (
        <div className="w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M3 13H5V21H3V13Z" fill="white"/>
            <path d="M9 9H11V21H9V9Z" fill="white"/>
            <path d="M15 5H17V21H15V5Z" fill="white"/>
            <path d="M21 3H3V5H21V3Z" fill="white"/>
          </svg>
        </div>
      )}
      {text === "Industry-Aligned" && (
        <div className="w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="white"/>
          </svg>
        </div>
      )}
      {text}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 overflow-hidden bg-gradient-to-br from-mile-navy to-mile-dark-navy">
      {/* Decorative elements - interconnected nodes graphic */}
      <div className="absolute inset-0 opacity-20 bg-[url('/lovable-uploads/nodes-pattern.png')] bg-repeat"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="animate-fade-in z-10">
          <div className="inline-block mb-6 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-white text-sm">
            EXPERIENCE THE JOURNEY
          </div>
          
          <h1 className="h1-heading mb-2 text-mile-gray animate-glow">
            MILE: <span className="text-mile-gold">Multiply, Influence, Lead, Engage</span>
          </h1>
          
          <p className="body-bold mb-8 text-mile-gray">
            Unlock your potential with an AI-powered learning platform designed for skill acceleration and personalized growth.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="btn-primary flex items-center">
              Start Your Journey
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <Play size={16} />
              Watch MILE Movie
            </button>
          </div>
        </div>
        
        {/* Right Column - Dashboard Mockup */}
        <div className="relative">
          <div className={cn(
            "relative rounded-2xl border-4 border-mile-gold/30 overflow-hidden animate-scale-in shadow-xl",
          )}>
            {/* Dashboard Mockup */}
            <img 
              src="/lovable-uploads/b29f304a-848f-44ca-a270-512ffa2d831b.png" 
              alt="MILE Dashboard Mockup" 
              className="w-full h-auto rounded-xl"
            />
            
            {/* Feature Tags - Positioned around the image */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <FeatureTag text="AI-Powered Learning" />
            </div>
            
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <FeatureTag text="Performance Analytics" />
            </div>
            
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
              <FeatureTag text="Industry-Aligned" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
