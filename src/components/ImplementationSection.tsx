
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Clock, Cog, BarChart3, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
  timeframe: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onToggle,
  icon,
  timeframe
}) => {
  return (
    <div className="mb-4">
      <button
        className={cn(
          "w-full text-left p-4 flex items-center justify-between rounded-lg transition-all border",
          isOpen 
            ? "bg-mile-info text-white border-mile-info" 
            : "bg-white text-mile-dark-gray hover:bg-mile-light-gray border-mile-stroke"
        )}
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-semibold">{title}</span>
          <span className="text-sm opacity-70">({timeframe})</span>
        </div>
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
      
      {isOpen && (
        <div className="p-6 border border-mile-stroke rounded-b-lg mt-1 animate-accordion-down bg-white">
          {content}
        </div>
      )}
    </div>
  );
};

const ImplementationSection = () => {
  const [openItem, setOpenItem] = useState<string | null>('process');
  
  const accordionItems = [
    {
      id: 'process',
      title: 'Process',
      timeframe: '2-3 Weeks',
      icon: <Clock size={20} className="text-mile-info" />,
      content: (
        <div>
          <p className="mb-4 text-mile-gray">We start with an MoU and service agreement, followed by MILE deployment, a go-live plan, and pre-registration of students.</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-mile-info/20 text-mile-info flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <span className="text-mile-gray">Initial consultation and needs assessment</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-mile-info/20 text-mile-info flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <span className="text-mile-gray">Platform customization based on requirements</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-mile-info/20 text-mile-info flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <span className="text-mile-gray">Content integration and curriculum alignment</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-mile-info/20 text-mile-info flex items-center justify-center mr-3 flex-shrink-0">4</span>
              <span className="text-mile-gray">User onboarding and training sessions</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'structure',
      title: 'Structure',
      timeframe: '2-3 Weeks',
      icon: <Cog size={20} className="text-mile-info" />,
      content: (
        <div>
          <p className="mb-4 text-mile-gray">Customize the platform, set up end-to-end learning paths, and launch with a live orientation event, including a calendar of sessions and events.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="neumorphic p-4">
              <h4 className="font-semibold mb-2 text-mile-dark-gray">Platform Admin Team</h4>
              <p className="text-mile-gray">Responsible for technical setup, user access management, and system configurations</p>
            </div>
            <div className="neumorphic p-4">
              <h4 className="font-semibold mb-2 text-mile-dark-gray">Content Development Team</h4>
              <p className="text-mile-gray">Handles curriculum integration, content creation, and learning path development</p>
            </div>
            <div className="neumorphic p-4">
              <h4 className="font-semibold mb-2 text-mile-dark-gray">Success Coaches</h4>
              <p className="text-mile-gray">Provides user training, ongoing support, and adoption guidance</p>
            </div>
            <div className="neumorphic p-4">
              <h4 className="font-semibold mb-2 text-mile-dark-gray">Analytics Team</h4>
              <p className="text-mile-gray">Monitors platform usage, generates insights, and recommends optimizations</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'governance',
      title: 'Governance & KPIs',
      timeframe: 'Every Quarter',
      icon: <BarChart3 size={20} className="text-mile-info" />,
      content: (
        <div>
          <p className="mb-4 text-mile-gray">Conduct feedback reviews with students, quarterly meetings with placement teams and HoDs, and define clear success criteria using CRM tools.</p>
          <div className="mb-6">
            <h4 className="font-semibold mb-2 text-mile-dark-gray">Governance Structure</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-info mr-2 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-mile-gray">Joint steering committee with key stakeholders</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-info mr-2 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-mile-gray">Regular review meetings and progress tracking</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-info mr-2 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-mile-gray">Defined escalation paths for issue resolution</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-mile-dark-gray">Key Performance Indicators</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-mile-light-gray p-3 rounded-lg">
                <h5 className="font-medium mb-1 text-mile-dark-gray">User Adoption</h5>
                <p className="text-sm text-mile-gray">Target: 85% active users within first month</p>
              </div>
              <div className="bg-mile-light-gray p-3 rounded-lg">
                <h5 className="font-medium mb-1 text-mile-dark-gray">Engagement Metrics</h5>
                <p className="text-sm text-mile-gray">Target: 4+ hours weekly platform interaction</p>
              </div>
              <div className="bg-mile-light-gray p-3 rounded-lg">
                <h5 className="font-medium mb-1 text-mile-dark-gray">Completion Rates</h5>
                <p className="text-sm text-mile-gray">Target: 70% program completion rate</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'support',
      title: 'Support',
      timeframe: '12 Months',
      icon: <Headphones size={20} className="text-mile-info" />,
      content: (
        <div>
          <p className="mb-4 text-mile-gray">Access ongoing support via on-call/email tech support, an AI-enabled chatbot, and a dedicated student hotline.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-mile-dark-gray">Implementation Support</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-info mr-2 mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-mile-gray">Dedicated implementation manager</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-info mr-2 mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-mile-gray">Technical assistance for integration</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-info mr-2 mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-mile-gray">Training workshops for admin teams</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-mile-dark-gray">Ongoing Support</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-info mr-2 mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-mile-gray">24/7 technical support via multiple channels</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-info mr-2 mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-mile-gray">Monthly review meetings and performance reports</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-info mr-2 mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-mile-gray">Quarterly platform updates and enhancements</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-mile-info/10 rounded-lg">
            <h4 className="font-semibold mb-2 text-mile-dark-gray">Implementation Timeline</h4>
            <p className="text-mile-gray">A standard MILE implementation takes 4-6 weeks from initial consultation to full deployment, with ongoing support and optimization.</p>
          </div>
        </div>
      )
    }
  ];
  
  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="implementation" className="section bg-mile-light-gray/50">
      <h2 className="h3-heading text-center mb-12">How MILE Works: <span className="text-mile-orange">Implementation Plan</span></h2>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg mb-10 text-mile-gray">
          MILE offers a structured 4-6 week implementation process to ensure a smooth transition and successful adoption.
        </p>
        
        <div className="mb-8">
          {accordionItems.map((item) => (
            <AccordionItem
              key={item.id}
              title={item.title}
              content={item.content}
              isOpen={openItem === item.id}
              onToggle={() => handleToggle(item.id)}
              icon={item.icon}
              timeframe={item.timeframe}
            />
          ))}
        </div>
        
        {/* Overall Progress */}
        <div className="bg-white border border-mile-stroke rounded-xl p-6 shadow-lg">
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold text-mile-dark-gray">Overall Implementation Progress</h3>
            <span className="text-mile-gray">4-6 Weeks</span>
          </div>
          <div className="w-full h-3 bg-mile-light-gray rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-mile-info to-mile-gold" style={{ width: '60%' }}></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-mile-gray">
            <span>Kick-off</span>
            <span>Week 2</span>
            <span>Week 4</span>
            <span>Week 6</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;
