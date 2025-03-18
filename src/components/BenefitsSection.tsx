
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { GraduationCap, Building2, School, Check } from 'lucide-react';

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'institutions' | 'organizations'>('students');

  const tabs = [
    { id: 'students', label: 'For Students', icon: GraduationCap },
    { id: 'institutions', label: 'For Academic Institutions', icon: School },
    { id: 'organizations', label: 'For Organizations', icon: Building2 }
  ];

  const tabContent = {
    students: {
      title: "Accelerate Your Career Growth",
      description: "MILE empowers students (ages 14-24) to build career-ready skills through personalized learning journeys and real-world exposure.",
      benefits: [
        "Early exposure to industry networks through internships and projects",
        "Skill tracks in trending areas like Cloud Computing, Cybersecurity, and Generative AI",
        "Networking opportunities via hackathons, ideathons, and competitions",
        "Entrepreneurial support with incubators, accelerators, and funding opportunities"
      ],
      cta: "Start Learning Now"
    },
    institutions: {
      title: "Enhance Your Academic Offerings",
      description: "Enhance your institution's educational offerings with MILE's AI-powered tools, designed to improve outcomes and brand value.",
      benefits: [
        "Seamless learning management with an integrated LMS platform",
        "AI-driven assessments and analytics to track student progress",
        "Career planning and mentorship programs to boost placement rates",
        "Collaborative events like hackathons and masterclasses to engage students"
      ],
      cta: "Partner With Us"
    },
    organizations: {
      title: "Develop Your Future Workforce",
      description: "Upskill your workforce with MILE's personalized learning paths, focusing on both technical and people skills.",
      benefits: [
        "Tailored skill tracks in areas like Data Analytics, AI, and Project Management",
        "Soft skills development, including emotional intelligence and ethical leadership",
        "Flexible, self-paced learning with anytime, anywhere access",
        "Real-world projects and simulations to apply new skills"
      ],
      cta: "Explore Corporate Solutions"
    }
  };

  const activeContent = tabContent[activeTab];

  return (
    <section id="benefits" className="section bg-gradient-to-b from-gray-300 to-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Who Can Benefit from <span className="text-mile-gold">MILE</span>?
        </h2>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all",
                activeTab === tab.id 
                  ? "bg-white/20 text-white shadow-lg border-2 border-mile-gold/50" 
                  : "bg-white/10 text-white/80 backdrop-blur-sm hover:bg-white/15"
              )}
            >
              <tab.icon size={20} className={activeTab === tab.id ? "text-mile-gold" : "text-white/70"} />
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center text-left px-6">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-4">{activeContent.title}</h3>
            <p className="text-lg mb-8 text-white/80">{activeContent.description}</p>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Key Benefits:</h4>
              <ul className="space-y-5">
                {activeContent.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-mile-gold/20 flex items-center justify-center">
                      <Check size={16} className="text-mile-gold" />
                    </span>
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-10 px-8 py-3 rounded-full font-bold bg-white/10 backdrop-blur-sm border border-mile-gold/50 text-white hover:bg-white/20 transition-all">
                {activeContent.cta}
              </button>
            </div>
          </div>
          
          <div className="bg-gray-600/20 backdrop-blur-md rounded-3xl p-10 text-center border border-white/10">
            <div className="w-20 h-20 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
              <GraduationCap size={40} className="text-white" />
            </div>
            <h4 className="text-2xl font-semibold mb-4 text-white">Student Success</h4>
            <p className="text-white/80">
              93% of students report improved job prospects after completing MILE programs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
