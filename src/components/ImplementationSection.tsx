
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  progressValue: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onToggle,
  progressValue
}) => {
  return (
    <div className="mb-4">
      <button
        className={cn(
          "w-full text-left p-4 flex items-center justify-between rounded-lg transition-all",
          isOpen ? "bg-mile-blue text-white" : "neumorphic text-mile-dark-gray hover:bg-mile-light-gray"
        )}
        onClick={onToggle}
      >
        <div className="flex items-center">
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          <span className="ml-2 font-semibold">{title}</span>
        </div>
        <div className="w-16 h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 rounded-full bg-mile-orange" 
            style={{ width: `${progressValue}%` }}
          ></div>
        </div>
      </button>
      
      {isOpen && (
        <div className="p-4 border border-mile-light-gray rounded-b-lg mt-1 animate-accordion-down">
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
      content: (
        <div>
          <p className="mb-4">The MILE implementation process follows a structured approach to ensure seamless integration:</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-mile-blue/20 text-mile-blue flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <span>Initial consultation and needs assessment</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-mile-blue/20 text-mile-blue flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <span>Platform customization based on requirements</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-mile-blue/20 text-mile-blue flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <span>Content integration and curriculum alignment</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-mile-blue/20 text-mile-blue flex items-center justify-center mr-3 flex-shrink-0">4</span>
              <span>User onboarding and training sessions</span>
            </li>
          </ul>
        </div>
      ),
      progressValue: 100
    },
    {
      id: 'structure',
      title: 'Structure',
      content: (
        <div>
          <p className="mb-4">MILE's implementation structure ensures clear roles and responsibilities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="neumorphic p-4">
              <h4 className="font-semibold mb-2">Platform Admin Team</h4>
              <p>Responsible for technical setup, user access management, and system configurations</p>
            </div>
            <div className="neumorphic p-4">
              <h4 className="font-semibold mb-2">Content Development Team</h4>
              <p>Handles curriculum integration, content creation, and learning path development</p>
            </div>
            <div className="neumorphic p-4">
              <h4 className="font-semibold mb-2">Success Coaches</h4>
              <p>Provides user training, ongoing support, and adoption guidance</p>
            </div>
            <div className="neumorphic p-4">
              <h4 className="font-semibold mb-2">Analytics Team</h4>
              <p>Monitors platform usage, generates insights, and recommends optimizations</p>
            </div>
          </div>
        </div>
      ),
      progressValue: 75
    },
    {
      id: 'governance',
      title: 'Governance & KPIs',
      content: (
        <div>
          <p className="mb-4">Clear governance structure and key performance indicators ensure successful implementation:</p>
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Governance Structure</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-blue mr-2 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Joint steering committee with key stakeholders</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-blue mr-2 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Regular review meetings and progress tracking</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-blue mr-2 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Defined escalation paths for issue resolution</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Key Performance Indicators</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-mile-light-gray p-3 rounded-lg">
                <h5 className="font-medium mb-1">User Adoption</h5>
                <p className="text-sm">Target: 85% active users within first month</p>
              </div>
              <div className="bg-mile-light-gray p-3 rounded-lg">
                <h5 className="font-medium mb-1">Engagement Metrics</h5>
                <p className="text-sm">Target: 4+ hours weekly platform interaction</p>
              </div>
              <div className="bg-mile-light-gray p-3 rounded-lg">
                <h5 className="font-medium mb-1">Completion Rates</h5>
                <p className="text-sm">Target: 70% program completion rate</p>
              </div>
            </div>
          </div>
        </div>
      ),
      progressValue: 50
    },
    {
      id: 'support',
      title: 'Support',
      content: (
        <div>
          <p className="mb-4">Comprehensive support ensures smooth implementation and ongoing success:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Implementation Support</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-blue mr-2 mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Dedicated implementation manager</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-blue mr-2 mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Technical assistance for integration</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-blue mr-2 mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Training workshops for admin teams</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Ongoing Support</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-blue mr-2 mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>24/7 technical support via multiple channels</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-blue mr-2 mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Monthly review meetings and performance reports</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-blue mr-2 mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Quarterly platform updates and enhancements</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-mile-blue/10 rounded-lg">
            <h4 className="font-semibold mb-2">Implementation Timeline</h4>
            <p>A standard MILE implementation takes 4-6 weeks from initial consultation to full deployment, with ongoing support and optimization.</p>
          </div>
        </div>
      ),
      progressValue: 25
    }
  ];
  
  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="implementation" className="section">
      <h2 className="section-heading">Implementation <span className="text-mile-blue">Plan</span></h2>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg mb-10">
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
              progressValue={item.progressValue}
            />
          ))}
        </div>
        
        {/* Overall Progress */}
        <div className="neumorphic p-6">
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold">Overall Implementation Progress</h3>
            <span>4-6 Weeks</span>
          </div>
          <div className="w-full h-3 bg-mile-light-gray rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-mile-blue to-mile-orange" style={{ width: '60%' }}></div>
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
