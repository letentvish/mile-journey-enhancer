
import React from 'react';
import { GraduationCap } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <section id="what-is-mile" className="section">
      <h2 className="h2-heading text-center mb-8">What is <span className="text-mile-gold">MILE</span>?</h2>
      
      <div className="neumorphic max-w-4xl mx-auto p-8 md:p-12">
        <p className="body-regular text-center leading-relaxed mb-8">
          MILE (Multiply, Influence, Lead, Engage) is an AI-powered learning platform that shapes future-ready leaders and high performers. 
          Through personalized mentorship, immersive experiences, and actionable guidance, MILE empowers students, professionals, and institutions 
          to overcome career challenges and thrive in a dynamic world. Our motto: Democratizing Educational Experience.
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-mile-info/10 rounded-full flex items-center justify-center">
            <GraduationCap size={32} className="text-mile-info" />
          </div>
        </div>
        
        <p className="caption text-center">
          Your journey to success starts here.
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection;
