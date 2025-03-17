
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mile-dark-gray text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Multiplierskraft</h3>
            <p className="text-mile-light-gray mb-4">
              Delivering impact through innovative learning solutions for individuals and organizations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-mile-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-mile-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-mile-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-mile-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mile-orange">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mile-orange">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mile-orange">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-mile-light-gray hover:text-white transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-mile-light-gray">
          <p>&copy; {new Date().getFullYear()} Multiplierskraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
