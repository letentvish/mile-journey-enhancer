
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
      "mile-card hover:scale-105 transition-all duration-300",
      className
    )}>      
      {/* Content */}
      <div className="relative">
        <div className="mile-icon-container">
          <Icon className="text-mile-info" size={28} />
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-mile-dark-gray">{title}</h3>
        <p className="text-mile-gray mb-5 text-sm leading-relaxed">{description}</p>
        
        <button className="text-mile-gold font-bold flex items-center text-sm hover:text-[#FFD54F] transition-colors">
          Learn More
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
