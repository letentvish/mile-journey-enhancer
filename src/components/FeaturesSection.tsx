
import React from 'react';
import { BookOpen, Code, BarChart3, Users, Smartphone } from 'lucide-react';

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType 
}) => {
  return (
    <div className="neumorphic group p-6 flex flex-col items-center hover:scale-105 transition-all duration-300">
      <div className="w-16 h-16 rounded-full bg-mile-blue/10 flex items-center justify-center mb-4 group-hover:bg-mile-blue/20 transition-colors">
        <Icon className="text-mile-blue" size={30} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
      <p className="text-center text-mile-gray mb-5">{description}</p>
      <button className="text-mile-blue font-medium flex items-center group-hover:underline">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: 'Course and Content Management',
      description: 'Curated learning materials personalized to your skill level and career goals.',
      icon: BookOpen
    },
    {
      title: 'Bring Your Own Learning (BYOL)',
      description: 'Integrate your existing learning resources and track progress across platforms.',
      icon: Code
    },
    {
      title: 'Assessment and Evaluation',
      description: 'AI-powered skill assessment with detailed feedback and improvement suggestions.',
      icon: BarChart3
    },
    {
      title: 'Social Learning and Gamification',
      description: 'Collaborative learning environment with rewards and recognition systems.',
      icon: Users
    },
    {
      title: 'Mobile Learning & Personalization',
      description: 'Learn anytime, anywhere with content tailored to your unique learning style.',
      icon: Smartphone
    }
  ];

  return (
    <section id="features" className="section bg-mile-light-blue/20">
      <h2 className="section-heading">Key <span className="text-mile-blue">Features</span></h2>
      
      {/* Desktop View - 5 column grid */}
      <div className="hidden md:grid grid-cols-5 gap-6">
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
      <div className="md:hidden grid grid-cols-1 gap-8">
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
