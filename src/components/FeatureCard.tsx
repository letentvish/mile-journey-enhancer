
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

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
      "bg-mile-navy/40 backdrop-blur-sm border border-mile-gold/20 rounded-xl p-6 hover:border-mile-gold hover:scale-105 transition-all duration-300 shadow-lg",
      className
    )}>      
      {/* Content */}
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-mile-navy flex items-center justify-center mb-6 border border-mile-gold/30 shadow-md">
          <Icon className="text-mile-gold" size={28} />
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-white/70 mb-5 text-sm leading-relaxed">{description}</p>
        
        <button className="text-mile-gold font-bold flex items-center text-sm hover:text-[#FFD54F] transition-colors">
          Learn More
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
