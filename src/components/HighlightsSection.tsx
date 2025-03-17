import React from 'react';
import { Users, Trophy, Compass, Briefcase } from 'lucide-react';
import HighlightCard from './HighlightCard';

const HighlightsSection = () => {
  const highlights = [
    {
      title: 'CXO & Expert Masterclasses',
      description: 'Learn directly from industry leaders and C-suite executives through exclusive masterclasses and interactive sessions.',
      icon: Users
    },
    {
      title: 'Networking Events',
      description: 'Participate in hackathons, case competitions, and networking events to build your professional network and showcase your skills.',
      icon: Trophy
    },
    {
      title: 'Career Mentorship',
      description: 'Receive personalized career guidance and mentorship from experienced professionals in your field of interest.',
      icon: Compass
    },
    {
      title: 'Real-World Projects',
      description: 'Apply your knowledge and skills to real-world projects and gain valuable work experience through curated internship opportunities.',
      icon: Briefcase
    }
  ];

  return (
    <section id="highlights" className="section bg-mile-navy/10">
      <h2 className="section-heading">Program <span className="text-mile-gold">Highlights</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((highlight, index) => (
          <HighlightCard 
            key={index}
            title={highlight.title}
            description={highlight.description}
            icon={highlight.icon}
          />
        ))}
      </div>
      
      {/* Timeline Decoration - Removed as it doesn't fit the new design */}
    </section>
  );
};

export default HighlightsSection;
