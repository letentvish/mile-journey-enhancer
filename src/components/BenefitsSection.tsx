
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { GraduationCap, Building2, School, CheckCircle } from 'lucide-react';

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
    <section id="benefits" className="section bg-[#0D1639] relative">
      <div className="absolute inset-0 opacity-10 bg-[url('/lovable-uploads/cef2e7a1-9583-41fe-9f27-41e888f00506.png')] bg-repeat"></div>
      
      <div className="relative z-10">
        <h2 className="h3-heading text-center mb-8 text-white">
          Who Can Benefit from <span className="text-mile-orange">MILE</span>?
        </h2>
        
        {/* Tab Navigation - Desktop */}
        <div className="hidden md:flex justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full font-bold mx-2 transition-all",
                activeTab === tab.id 
                  ? "bg-mile-info text-white shadow-lg" 
                  : "bg-mile-navy/60 text-white border border-mile-gold/20 hover:bg-mile-navy"
              )}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Tab Navigation - Mobile */}
        <div className="md:hidden grid grid-cols-1 gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 rounded-lg font-bold transition-all",
                activeTab === tab.id 
                  ? "bg-mile-info text-white shadow-lg" 
                  : "bg-mile-navy/60 text-white border border-mile-gold/20 hover:bg-mile-navy"
              )}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="bg-mile-navy/60 backdrop-blur-sm border border-mile-gold/20 rounded-xl animate-fade-in p-8 md:p-12 max-w-5xl mx-auto shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-white">{activeContent.title}</h3>
          <p className="text-lg mb-8 text-blue-100">{activeContent.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-mile-gold">Key Benefits:</h4>
              <ul className="space-y-3">
                {activeContent.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-mile-info mt-1 flex-shrink-0" />
                    <span className="text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button className={cn(
                "mt-8 px-6 py-3 rounded-full font-bold transition-all",
                activeTab === 'institutions' 
                  ? "bg-mile-orange text-mile-dark-gray hover:bg-[#FFCA28]" 
                  : "bg-mile-gold text-mile-dark-gray hover:bg-[#FFD54F]"
              )}>
                {activeContent.cta}
              </button>
            </div>
            
            <div className="bg-mile-navy/80 backdrop-blur-sm p-8 rounded-xl flex items-center justify-center border border-mile-gold/20">
              {activeTab === 'students' && (
                <div className="text-center">
                  <div className="w-24 h-24 bg-mile-info/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-mile-info/30">
                    <GraduationCap size={48} className="text-mile-info" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">Student Success</h4>
                  <p className="text-white/80">93% of students report improved job prospects after completing MILE programs</p>
                </div>
              )}
              
              {activeTab === 'institutions' && (
                <div className="text-center">
                  <div className="w-24 h-24 bg-mile-info/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-mile-info/30">
                    <School size={48} className="text-mile-info" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">Institution Impact</h4>
                  <p className="text-white/80">87% increase in student engagement with curriculum integrated MILE platform</p>
                </div>
              )}
              
              {activeTab === 'organizations' && (
                <div className="text-center">
                  <div className="w-24 h-24 bg-mile-info/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-mile-info/30">
                    <Building2 size={48} className="text-mile-info" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">Organizational Value</h4>
                  <p className="text-white/80">76% reduction in time-to-hire and 68% improvement in employee retention</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
