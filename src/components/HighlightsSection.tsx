
import React from 'react';
import { Users, Trophy, Compass, Briefcase } from 'lucide-react';

const HighlightCard = ({ 
  title, 
  description, 
  icon: Icon,
  color
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  color: string;
}) => {
  return (
    <div className="neumorphic group p-6 hover:scale-105 transition-all duration-300">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color}`}>
        <Icon size={30} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-mile-gray mb-5">{description}</p>
      <button className="text-mile-blue font-medium flex items-center group-hover:underline">
        Explore
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

const HighlightsSection = () => {
  const highlights = [
    {
      title: 'CXO & Expert Masterclasses',
      description: 'Learn directly from industry leaders and C-suite executives through exclusive masterclasses and interactive sessions.',
      icon: Users,
      color: 'bg-mile-blue'
    },
    {
      title: 'Networking Events & Competitions',
      description: 'Participate in hackathons, case competitions, and networking events to build your professional network and showcase your skills.',
      icon: Trophy,
      color: 'bg-mile-orange'
    },
    {
      title: 'Career Planning & Mentorship',
      description: 'Receive personalized career guidance and mentorship from experienced professionals in your field of interest.',
      icon: Compass,
      color: 'bg-mile-blue'
    },
    {
      title: 'Real-World Projects & Internships',
      description: 'Apply your knowledge and skills to real-world projects and gain valuable work experience through curated internship opportunities.',
      icon: Briefcase,
      color: 'bg-mile-orange'
    }
  ];

  return (
    <section id="highlights" className="section bg-mile-light-blue/20">
      <h2 className="section-heading">Program <span className="text-mile-blue">Highlights</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((highlight, index) => (
          <HighlightCard 
            key={index}
            title={highlight.title}
            description={highlight.description}
            icon={highlight.icon}
            color={highlight.color}
          />
        ))}
      </div>
      
      {/* Timeline Decoration - Desktop Only */}
      <div className="hidden lg:flex justify-center mt-16">
        <div className="relative flex items-center">
          <div className="h-1 bg-mile-blue/20 w-[800px] rounded-full"></div>
          {highlights.map((_, index) => (
            <div 
              key={index} 
              className="absolute w-6 h-6 rounded-full bg-mile-blue shadow-lg"
              style={{ left: `${index * (800 / 3)}px` }}
            >
              <div className="absolute w-12 h-12 rounded-full bg-mile-blue/20 -top-3 -left-3 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
