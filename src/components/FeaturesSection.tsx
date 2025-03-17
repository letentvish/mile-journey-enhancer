
import React from 'react';
import { BookOpen, Code, BarChart3, Users, Smartphone } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Acquire',
      description: 'AI-driven recruitment & skill assessment to find the perfect match for your organization.',
      icon: BookOpen
    },
    {
      title: 'Retain',
      description: 'Personalized learning paths & upskilling programs to keep your talent engaged and growing.',
      icon: Code
    },
    {
      title: 'Multiply',
      description: 'Drive business growth through continuous learning and performance improvement.',
      icon: BarChart3
    },
    {
      title: 'Engage',
      description: 'Build a culture of continuous learning through collaborative social experiences.',
      icon: Users
    },
    {
      title: 'Accelerate',
      description: 'Fast-track skill development with AI-powered mobile learning platforms tailored to your needs.',
      icon: Smartphone
    }
  ];

  return (
    <section id="features" className="section bg-mile-navy/10">
      <h2 className="section-heading">Key <span className="text-mile-gold">Features</span></h2>
      
      {/* Desktop View - Dynamic grid */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
      
      {/* Mobile View - Single column stack */}
      <div className="md:hidden grid grid-cols-1 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
