
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  className 
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "relative rounded-3xl overflow-hidden bg-gradient-to-br from-mile-navy/40 to-mile-navy p-6 hover:scale-105 transition-all duration-300",
      className
    )}>
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/c84191e4-2dce-482f-8982-57a18c2e05ef.png')] bg-cover opacity-30 mix-blend-overlay"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-mile-navy/80 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/10 shadow-lg">
          <Icon className="text-white" size={28} />
        </div>
        
        <h3 className="text-3xl font-semibold mb-4 text-white/90">{title}</h3>
        <p className="text-white/70 mb-5 text-sm leading-relaxed">{description}</p>
        
        <button className="text-mile-gold font-medium flex items-center text-sm hover:text-mile-gold/90 transition-colors">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
