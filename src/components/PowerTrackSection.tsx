
import React, { useEffect, useRef } from 'react';
import { Lightbulb, BookOpen, Briefcase, Users, Shield, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface TrackStepProps {
  title: string;
  description: string;
  icon: React.ElementType;
  secondaryIcon: React.ElementType;
  color: string;
  index: number;
}

const TrackStep = ({ title, description, icon: Icon, secondaryIcon: SecondaryIcon, color, index }: TrackStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stepRef.current) {
              stepRef.current.classList.add('opacity-100', 'translate-y-0');
              stepRef.current.classList.remove('opacity-0', 'translate-y-10');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={stepRef}
      className={cn(
        "transition-all duration-500 opacity-0 translate-y-10 hover:scale-105",
        "bg-mile-navy/80 backdrop-blur-sm rounded-xl p-6 border border-mile-gold/20"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              "bg-mile-navy border border-mile-gold/30 shadow-md"
            )}>
              <Icon className="text-mile-gold" size={24} />
            </div>
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              "bg-mile-navy/60 border border-mile-gold/20 shadow-md"
            )}>
              <SecondaryIcon className="text-mile-info" size={16} />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="bg-mile-dark-navy border border-mile-gold/30 text-white p-4">
          <p className="text-sm">{description}</p>
        </HoverCardContent>
      </HoverCard>
      
      <p className="text-white/70 text-sm pl-16 leading-relaxed">{description}</p>
    </div>
  );
};

const CustomizationFeature = () => {
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (featureRef.current) {
              featureRef.current.classList.add('opacity-100', 'scale-100');
              featureRef.current.classList.remove('opacity-0', 'scale-95');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={featureRef}
      className="transition-all duration-500 opacity-0 scale-95 mt-12 bg-gradient-to-br from-mile-navy to-mile-dark-navy p-6 rounded-xl border border-mile-gold/20 hover:border-mile-gold/40"
    >
      <h3 className="text-xl font-semibold text-white mb-4">Make Your Own Track</h3>
      <p className="text-white/70 mb-6">
        Tailor the POWER TRACK to your institution's unique needs with our intuitive design tools, 
        ensuring a seamless experience for all stakeholders.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {['Content Creation', 'Assessments', 'Analytics', 'Community Tools'].map((tool, idx) => (
          <div 
            key={idx}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg text-center text-white text-sm hover:bg-white/10 transition-all cursor-move"
          >
            {tool}
          </div>
        ))}
      </div>
      
      <div className="bg-mile-navy/40 backdrop-blur-sm border border-mile-gold/20 p-4 rounded-lg text-center text-white/50 text-sm">
        Drag and drop modules to create your custom track
      </div>
    </div>
  );
};

const PowerTrackSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observers = [
      { ref: titleRef, delay: '300ms' },
      { ref: subtitleRef, delay: '500ms' },
      { ref: descriptionRef, delay: '700ms' },
      { ref: ctaRef, delay: '300ms' }
    ].map(({ ref, delay }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && ref.current) {
              ref.current.style.transitionDelay = delay;
              ref.current.classList.add('opacity-100', 'translate-y-0');
              ref.current.classList.remove('opacity-0', 'translate-y-10');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return observer;
    });
    
    return () => {
      observers.forEach((observer, index) => {
        const ref = [titleRef, subtitleRef, descriptionRef, ctaRef][index];
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  
  const trackSteps = [
    {
      title: 'Awareness & Discovery',
      description: 'Identify institutional goals and student needs through AI-driven insights and analytics.',
      icon: Lightbulb,
      secondaryIcon: BookOpen,
      color: '#2196F3',
    },
    {
      title: 'Learning & Engagement',
      description: 'Create engaging, personalized content with AI-powered LMS and gamified modules.',
      icon: BookOpen,
      secondaryIcon: Lightbulb, 
      color: '#2196F3',
    },
    {
      title: 'Application & Outcomes',
      description: 'Implement real-world projects and track measurable outcomes with analytics dashboards.',
      icon: Briefcase,
      secondaryIcon: Shield,
      color: '#2196F3',
    },
    {
      title: 'Community & Retention',
      description: 'Foster collaboration and long-term engagement through alumni networks and institutional communities.',
      icon: Users,
      secondaryIcon: Shield,
      color: '#2196F3',
    },
  ];
  
  return (
    <section id="power-track" className="section py-20 bg-[#0B1336] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('/lovable-uploads/cef2e7a1-9583-41fe-9f27-41e888f00506.png')] bg-repeat"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-mile-info/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          ref={titleRef} 
          className="transition-all duration-500 opacity-0 translate-y-10 text-2xl md:text-3xl font-bold text-center mb-4 text-mile-orange"
        >
          MILE - POWER TRACK: Anywhere Anytime Plug In - ONE FOR ALL, ALL FOR ONE
        </h2>
        
        <p 
          ref={subtitleRef} 
          className="transition-all duration-500 opacity-0 translate-y-10 text-center text-white/70 text-lg mb-6"
        >
          Hyper-Personalized and Customized Learning Tracks for Institutions
        </p>
        
        <p 
          ref={descriptionRef} 
          className="transition-all duration-500 opacity-0 translate-y-10 text-center text-white/70 max-w-4xl mx-auto mb-12"
        >
          Empower your institution with MILE's POWER TRACK, a flexible, AI-driven solution that lets you design 
          tailored learning paths for students, educators, and staff. Build your own track based on our proven roadmap, 
          accessible anywhere, anytime, with seamless plug-in integration for all stakeholders.
        </p>
        
        {/* Track Steps - Desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trackSteps.map((step, index) => (
            <TrackStep
              key={index}
              {...step}
              index={index}
            />
          ))}
        </div>
        
        {/* Track Steps - Mobile */}
        <div className="md:hidden space-y-6 mb-12">
          {trackSteps.map((step, index) => (
            <TrackStep
              key={index}
              {...step}
              index={index}
            />
          ))}
        </div>
        
        {/* Customization Feature */}
        <CustomizationFeature />
        
        {/* CTA */}
        <div 
          ref={ctaRef}
          className="transition-all duration-500 opacity-0 translate-y-10 mt-12 text-center"
        >
          <Button 
            className="bg-mile-gold hover:bg-[#FFD54F] text-mile-dark-gray px-6 py-6 text-lg font-bold rounded-full hover:scale-105 transition-all"
          >
            Design Your POWER TRACK Now
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PowerTrackSection;
