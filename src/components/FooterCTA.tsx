
import React from 'react';
import { Phone, Mail, GraduationCap } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="bg-gradient-to-br from-mile-navy to-mile-dark-navy text-mile-gray py-16 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('/lovable-uploads/cef2e7a1-9583-41fe-9f27-41e888f00506.png')] bg-repeat"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="h3-heading mb-4 text-mile-gold">Ready to Transform Your Learning Journey?</h2>
          <p className="body-regular max-w-3xl mx-auto text-white">
            Join MILE today to multiply your skills, influence your future, lead with confidence, and engage with a global community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-mile-navy/40 backdrop-blur-md border border-mile-gold/20 rounded-xl p-6 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 rounded-full bg-mile-gold/20 flex items-center justify-center mx-auto mb-4 border border-mile-gold/30">
              <GraduationCap size={28} className="text-mile-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">For Individuals</h3>
            <p className="mb-6 text-white/70">Accelerate your career growth and build in-demand skills</p>
            <button className="bg-mile-gold text-mile-dark-gray px-6 py-2 rounded-full font-bold hover:bg-[#FFD54F] transition-colors">
              Start Your Journey
            </button>
          </div>
          
          <div className="bg-mile-navy/40 backdrop-blur-md border border-mile-gold/20 rounded-xl p-6 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 rounded-full bg-mile-orange/20 flex items-center justify-center mx-auto mb-4 border border-mile-orange/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-orange">
                <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                <path d="M12 13v8"></path>
                <path d="M5 13v6a2 2 0 0 0 2 2h12"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">For Institutions</h3>
            <p className="mb-6 text-white/70">Enhance your academic offerings with cutting-edge technology</p>
            <button className="bg-mile-orange text-mile-dark-gray px-6 py-2 rounded-full font-bold hover:bg-[#FFCA28] transition-colors">
              Partner With Us
            </button>
          </div>
          
          <div className="bg-mile-navy/40 backdrop-blur-md border border-mile-gold/20 rounded-xl p-6 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 rounded-full bg-mile-info/20 flex items-center justify-center mx-auto mb-4 border border-mile-info/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mile-info">
                <path d="M19.435 5.445a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Z"></path>
                <path d="M5.425 19.445a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Z"></path>
                <path d="M19.435 14.435a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Z"></path>
                <path d="M5.435 5.445a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Z"></path>
                <path d="M6.425 5.435v3.1a5 5 0 0 0 5 5h1.1"></path>
                <path d="M18.435 14.435v3.1"></path>
                <path d="M6.435 14.435v3.1"></path>
                <path d="M17.435 5.435v3.1a5 5 0 0 1-5 5h-1.1"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">For Organizations</h3>
            <p className="mb-6 text-white/70">Develop your future workforce and upskill existing employees</p>
            <button className="bg-mile-gold text-mile-dark-gray px-6 py-2 rounded-full font-bold hover:bg-[#FFD54F] transition-colors">
              Corporate Solutions
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
          <a href="tel:+919611058522" className="flex items-center gap-2 text-white hover:text-mile-gold transition-colors">
            <Phone size={20} />
            +91-9611058522
          </a>
          <span className="hidden md:inline text-white">|</span>
          <a href="mailto:consult@multiplierskraft.com" className="flex items-center gap-2 text-white hover:text-mile-gold transition-colors">
            <Mail size={20} />
            consult@multiplierskraft.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
