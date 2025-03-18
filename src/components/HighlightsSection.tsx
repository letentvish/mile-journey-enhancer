
import React from 'react';
import { Users, Trophy, Compass, Briefcase } from 'lucide-react';
import HighlightCard from './HighlightCard';

const HighlightsSection = () => {
  const highlights = [
    {
      title: 'CXO & Expert Masterclasses',
      description: 'Attend high-impact masterclasses (offline and virtual) delivered by industry pioneers, IIM/IIT academics, and global experts from the US, Europe, and Canada.',
      icon: Users
    },
    {
      title: 'Networking Events & Competitions',
      description: 'Participate in hackathons, ideathons, and coding competitions to gain rewards, network with industry experts, and build your portfolio.',
      icon: Trophy
    },
    {
      title: 'Career Planning & Mentorship',
      description: 'Receive hyper-personalized 1:1 counseling, resume building, interview prep, and career guidance from industry experts.',
      icon: Compass
    },
    {
      title: 'Real-World Projects & Internships',
      description: 'Apply your skills through capstone projects, simulations, internships, and startup incubation programs with real-world impact.',
      icon: Briefcase
    }
  ];

  return (
    <section id="highlights" className="section bg-white">
      <h2 className="h3-heading text-center mb-12">What MILE Offers: <span className="text-mile-orange">Program Highlights</span></h2>
      
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
    </section>
  );
};

export default HighlightsSection;
