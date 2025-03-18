
import React from 'react';
import { BookOpen, Play, CheckSquare, MessageSquare, Smartphone } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Course and Content Management',
      description: 'Create, deliver, and organize courses with ease. Upload files in any format and integrate existing courses into a marketplace for learning and growth.',
      icon: BookOpen
    },
    {
      title: 'Bring Your Own Learning (BYOL)',
      description: 'Personalize your learning by creating and uploading your own content to the platform.',
      icon: Play
    },
    {
      title: 'Assessment and Evaluation',
      description: 'Design quizzes, exams, and projects with automated grading and feedback mechanisms to track progress.',
      icon: CheckSquare
    },
    {
      title: 'Social Learning and Gamification',
      description: 'Engage with peers and instructors through chat and collaboration tools, plus enjoy a gamified experience to enhance learning.',
      icon: MessageSquare
    },
    {
      title: 'Mobile Learning and Personalization',
      description: 'Access MILE on the go with mobile-optimized learning and personalized recommendations tailored to your needs.',
      icon: Smartphone
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <h2 className="h3-heading text-center mb-12">Key Features of <span className="text-mile-orange">MILE</span></h2>
      
      {/* Desktop View - Dynamic grid */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
