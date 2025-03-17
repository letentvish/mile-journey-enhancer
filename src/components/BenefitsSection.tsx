
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { GraduationCap, Building2, School } from 'lucide-react';

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
      description: "MILE offers a comprehensive platform for student development, connecting you with industry leaders and providing hands-on experience through real-world projects.",
      benefits: [
        "Access to industry internships and job opportunities",
        "Mentorship from industry experts and leaders",
        "Personalized learning paths based on your career goals",
        "Portfolio building through real-world projects",
        "Networking with peers and professionals"
      ],
      cta: "Start Learning Now"
    },
    institutions: {
      title: "Enhance Your Academic Offerings",
      description: "Transform your institution's educational approach by integrating MILE's cutting-edge platform with your existing curriculum.",
      benefits: [
        "Detailed analytics on student performance and engagement",
        "Industry-academic collaboration opportunities",
        "Customizable learning modules that complement existing curriculum",
        "Reduced administrative burden through automation",
        "Improved student outcomes and satisfaction"
      ],
      cta: "Partner With Us"
    },
    organizations: {
      title: "Develop Your Future Workforce",
      description: "MILE helps organizations identify, nurture, and recruit top talent while providing continuous professional development for existing employees.",
      benefits: [
        "Access to pre-screened talent pool aligned with your needs",
        "Custom upskilling programs for existing employees",
        "Reduced hiring costs and improved retention rates",
        "Data-driven insights on workforce capabilities",
        "Scalable learning solutions for teams of all sizes"
      ],
      cta: "Explore Corporate Solutions"
    }
  };

  const activeContent = tabContent[activeTab];

  return (
    <section id="benefits" className="section">
      <h2 className="section-heading">
        MILE <span className="text-mile-blue">Benefits</span>
      </h2>
      
      {/* Tab Navigation - Desktop */}
      <div className="hidden md:flex justify-center mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-full font-medium mx-2 transition-all",
              activeTab === tab.id 
                ? "bg-mile-blue text-white shadow-lg" 
                : "bg-white text-mile-gray border border-mile-light-gray hover:bg-mile-light-gray"
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
              "flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all",
              activeTab === tab.id 
                ? "bg-mile-blue text-white shadow-lg" 
                : "bg-white text-mile-gray border border-mile-light-gray hover:bg-mile-light-gray"
            )}
          >
            <tab.icon size={20} />
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="glass animate-fade-in p-8 md:p-12 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">{activeContent.title}</h3>
        <p className="text-lg mb-8">{activeContent.description}</p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-xl font-semibold mb-4">Key Benefits:</h4>
            <ul className="space-y-3">
              {activeContent.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-blue mr-2 mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <button className="btn-primary mt-8">
              {activeContent.cta}
            </button>
          </div>
          
          <div className="neumorphic p-8 flex items-center justify-center">
            {activeTab === 'students' && (
              <div className="text-center">
                <div className="w-24 h-24 bg-mile-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap size={48} className="text-mile-blue" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Student Success</h4>
                <p className="text-mile-gray">93% of students report improved job prospects after completing MILE programs</p>
              </div>
            )}
            
            {activeTab === 'institutions' && (
              <div className="text-center">
                <div className="w-24 h-24 bg-mile-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <School size={48} className="text-mile-blue" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Institution Impact</h4>
                <p className="text-mile-gray">87% increase in student engagement with curriculum integrated MILE platform</p>
              </div>
            )}
            
            {activeTab === 'organizations' && (
              <div className="text-center">
                <div className="w-24 h-24 bg-mile-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 size={48} className="text-mile-blue" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Organizational Value</h4>
                <p className="text-mile-gray">76% reduction in time-to-hire and 68% improvement in employee retention</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
