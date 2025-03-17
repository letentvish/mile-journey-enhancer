
import React from 'react';

const IntroductionSection = () => {
  return (
    <section id="what-is-mile" className="section">
      <h2 className="section-heading">What is <span className="text-mile-blue">MILE</span>?</h2>
      
      <div className="neumorphic max-w-4xl mx-auto p-8 md:p-12">
        <p className="text-lg md:text-xl text-center leading-relaxed">
          MILE shapes future-ready leaders through mentorship and immersive experiences.
          We are democratizing educational experiences by bringing together industry experts,
          academic institutions, and students on a single AI-powered platform.
        </p>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-mile-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-blue">
                <path d="M12 20H4a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v5"></path>
                <path d="M12 7v6"></path>
                <path d="M12 13h6"></path>
                <path d="M15.7 20.9a2 2 0 1 0 3.446-2 2 2 0 0 0-3.445 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Multiply</h3>
            <p>Multiply your skills through personalized learning paths</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-mile-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-blue">
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Influence</h3>
            <p>Develop your influence through real-world projects</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-mile-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-blue">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lead</h3>
            <p>Enhance leadership capacity through expert mentorship</p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <div className="w-16 h-16 bg-mile-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-orange">
              <path d="M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4"></path>
              <path d="M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.2"></path>
              <path d="M13.9 18.5c.2.8-.3 1.7-1.1 1.9-1.1.3-2.1-.4-2.5-1.4l-1.8-5.2c-.1-.3-.1-.7.1-1 .4-.5 1.2-.7 1.9-.4"></path>
              <path d="M14 13h1"></path>
              <path d="M7 13H6"></path>
              <path d="M22 10v0c0-1.7-1.5-3-3.1-3"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Engage</h3>
          <p className="max-w-md mx-auto">Connect and engage with industry professionals, peers, and academic mentors</p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
