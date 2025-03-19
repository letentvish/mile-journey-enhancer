
import React, { useEffect, useRef } from 'react';
import { Lightbulb, Settings, Crown, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MilestoneProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  position: 'top' | 'bottom';
  index: number;
}

const Milestone = ({ title, description, icon: Icon, color, position, index }: MilestoneProps) => {
  const milestoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (milestoneRef.current) {
              milestoneRef.current.classList.add('opacity-100');
              milestoneRef.current.classList.remove('opacity-0');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (milestoneRef.current) {
      observer.observe(milestoneRef.current);
    }

    return () => {
      if (milestoneRef.current) {
        observer.unobserve(milestoneRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={milestoneRef}
      className={cn(
        "flex flex-col items-center opacity-0 transition-all duration-500",
        position === 'top' ? 'md:-mt-32' : 'md:mt-32',
        position === 'top' ? 'md:pb-32' : 'md:pt-32',
        index % 2 === 0 ? 'md:items-start' : 'md:items-end'
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative flex flex-col items-center">
        {/* Badge */}
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center mb-2 relative z-10",
          "border border-mile-stroke bg-white/10 backdrop-blur-sm shadow-lg"
        )}>
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center"
          )} style={{ backgroundColor: `${color}20` }}>
            <Icon size={24} style={{ color: color }} />
          </div>
        </div>
        
        {/* Milestone marker */}
        <div className={cn(
          "w-6 h-6 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2",
          "border-2 border-white z-20"
        )}
        style={{ backgroundColor: color }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-xs md:max-w-sm shadow-lg border border-white/20 mt-4">
        <h4 className="font-bold text-sm mb-1" style={{ color: color }}>{title}</h4>
        <p className="text-xs text-mile-accent">{description}</p>
      </div>
    </div>
  );
};

const JourneySection = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (pathRef.current) {
              pathRef.current.classList.add('animate-draw-path');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const milestones = [
    {
      title: 'Prarambh Explorer',
      description: 'Start your journey with self-awareness, time management, and digital communication skills. Focus on foundational skills for academic and personal success.',
      icon: Lightbulb,
      color: '#FFC107',
      position: 'top' as const,
    },
    {
      title: 'Pragati Innovator',
      description: 'Dive into advanced communication, technical skills, AI literacy, and digital marketing. Transition to industry-relevant skills through masterclasses and group learning.',
      icon: Settings,
      color: '#4CAF50',
      position: 'bottom' as const,
    },
    {
      title: 'Udyam Achiever',
      description: 'Apply your skills through real-world projects, hackathons, and internships. Focus on leadership, critical thinking, and agile methodologies to prepare for career entry.',
      icon: Crown,
      color: '#FF9800',
      position: 'top' as const,
    },
    {
      title: 'Udaan Champion',
      description: 'Join the MILE alumni network for lifelong learning. Focus on career preparation, entrepreneurial skills, financial literacy, and industry connections.',
      icon: Trophy,
      color: '#2196F3',
      position: 'bottom' as const,
    },
  ];

  return (
    <section id="journey" ref={sectionRef} className="section bg-[#2E2E3D] text-white relative py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-mile-orange">
          Your MILE Journey: Gamified Learning with Badges
        </h2>
        
        <p className="text-base text-center text-gray-300 max-w-3xl mx-auto mb-16">
          Embark on a transformative 6-8 month journey with MILE, where learning is gamified to keep you motivated. 
          Earn badges at each milestone as you progress from self-awareness to career-ready skills, real-world application, 
          and lifelong community engagement.
        </p>
        
        {/* Desktop Journey Path */}
        <div className="hidden md:block relative h-64 max-w-5xl mx-auto mb-12">
          {/* Path SVG */}
          <svg className="w-full h-full absolute top-0" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path 
              d="M0,100 C150,30 300,170 500,100 C700,30 850,170 1000,100" 
              fill="none" 
              stroke="#1A1A2E" 
              strokeWidth="30" 
              strokeLinecap="round"
            />
            <path 
              ref={pathRef}
              d="M0,100 C150,30 300,170 500,100 C700,30 850,170 1000,100" 
              fill="none" 
              stroke="#FFC107" 
              strokeWidth="5" 
              strokeDasharray="20,20"
              strokeLinecap="round"
              className="path-dashing"
              strokeDashoffset="1500"
              style={{
                strokeDasharray: "1500",
                transition: "stroke-dashoffset 2s ease-in-out"
              }}
            />
          </svg>
          
          {/* Milestone Markers */}
          <div className="flex justify-between absolute inset-0">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative" style={{left: `${index * 28 + 8}%`, position: 'absolute', top: milestone.position === 'top' ? '0' : '100%', transform: milestone.position === 'top' ? 'translateY(0)' : 'translateY(-100%)'}}>
                <Milestone
                  {...milestone}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Journey Path */}
        <div className="md:hidden">
          <div className="relative w-2 bg-[#1A1A2E] mx-auto" style={{minHeight: '800px'}}>
            <div className="absolute inset-0 w-full h-full">
              <div className="h-full w-0.5 bg-mile-gold/50 mx-auto" style={{backgroundImage: 'linear-gradient(#FFC107 33%, rgba(255,255,255,0) 0%)', backgroundPosition: 'right', backgroundSize: '2px 30px', backgroundRepeat: 'repeat-y'}}></div>
            </div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className="py-8 relative" style={{ top: `${index * 180}px`, position: 'absolute', width: '100%' }}>
                <div className={cn("flex items-center", index % 2 === 0 ? "justify-start" : "justify-end")}>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 rounded-full border-2 border-white z-10" style={{ backgroundColor: milestone.color }}></div>
                  </div>
                  <div className="w-full pl-8">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center">
                      <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-3" style={{ backgroundColor: `${milestone.color}20` }}>
                        <milestone.icon size={24} style={{ color: milestone.color }} />
                      </div>
                      <h4 className="font-bold text-sm mb-1" style={{ color: milestone.color }}>{title}</h4>
                      <p className="text-xs text-mile-accent">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl font-bold text-mile-gold mb-6">Earn Rewards, Build Skills, Soar High!</p>
          <button className="bg-mile-orange hover:bg-[#FFCA28] text-mile-dark-gray font-bold px-6 py-3 rounded-full transition-all">
            View Your Badges
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
