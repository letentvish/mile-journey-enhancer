
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="bg-mile-blue text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Learning Journey?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Join thousands of individuals and organizations already leveraging MILE to accelerate skills development and career growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="glass p-6 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">For Individuals</h3>
            <p className="mb-6">Accelerate your career growth and build in-demand skills</p>
            <button className="bg-white text-mile-blue px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors">
              Start Your Journey
            </button>
          </div>
          
          <div className="glass p-6 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                <path d="M12 13v8"></path>
                <path d="M5 13v6a2 2 0 0 0 2 2h12"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">For Institutions</h3>
            <p className="mb-6">Enhance your academic offerings with cutting-edge technology</p>
            <button className="bg-white text-mile-blue px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors">
              Partner With Us
            </button>
          </div>
          
          <div className="glass p-6 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <h3 className="text-xl font-semibold mb-2">For Organizations</h3>
            <p className="mb-6">Develop your future workforce and upskill existing employees</p>
            <button className="bg-white text-mile-blue px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors">
              Corporate Solutions
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
          <a href="tel:+919611058522" className="flex items-center gap-2 hover:text-mile-orange transition-colors">
            <Phone size={20} />
            +91-9611058522
          </a>
          <span className="hidden md:inline">|</span>
          <a href="mailto:consult@multiplierskraft.com" className="flex items-center gap-2 hover:text-mile-orange transition-colors">
            <Mail size={20} />
            consult@multiplierskraft.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
