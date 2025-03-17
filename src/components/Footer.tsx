
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mile-navy text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM20 35C11.716 35 5 28.284 5 20C5 11.716 11.716 5 20 5C28.284 5 35 11.716 35 20C35 28.284 28.284 35 20 35Z" fill="#F9B331"/>
                  <path d="M25 15C25 17.761 22.761 20 20 20C17.239 20 15 17.761 15 15C15 12.239 17.239 10 20 10C22.761 10 25 12.239 25 15Z" fill="#F9B331"/>
                  <path d="M30 25C30 29.418 25.523 33 20 33C14.477 33 10 29.418 10 25C10 20.582 14.477 17 20 17C25.523 17 30 20.582 30 25Z" fill="#F9B331"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Multiplierskraft</h3>
            </div>
            <p className="text-white/70 mb-4">
              Delivering impact through innovative learning solutions for individuals and organizations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-mile-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-mile-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-mile-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-mile-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mile-gold">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mile-gold">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mile-gold">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} Multiplierskraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
