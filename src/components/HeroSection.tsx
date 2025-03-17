
import React from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-mile-blue/20 to-white -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-mile-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-10 w-64 h-64 bg-mile-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-mile-blue">MILE:</span> Multiply, Influence, Lead, Engage
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-mile-dark-gray">
            Unlock your potential with an AI-powered platform for future leaders
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">
              Start Your Journey
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <Play size={20} className="text-mile-blue" />
              Watch MILE Movie
            </button>
          </div>
        </div>
        
        {/* Right Column - Dashboard Mockup */}
        <div className="relative">
          <div className={cn(
            "glass animate-scale-in relative",
            "p-6 rounded-xl"
          )}>
            {/* Dashboard Mockup */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Dashboard Header */}
              <div className="bg-mile-blue p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white text-sm">MILE Learning Dashboard</div>
                <div></div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-4">
                {/* Progress Bars */}
                <div className="mb-4">
                  <div className="flex justify-between mb-1 text-xs">
                    <span>Leadership Module</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-mile-blue rounded-full h-2" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-1 text-xs">
                    <span>Influence Skills</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-mile-orange rounded-full h-2" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                {/* Course Cards */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-mile-light-gray p-3 rounded-lg">
                    <div className="w-8 h-8 bg-mile-blue/20 rounded-full flex items-center justify-center mb-2">
                      <span className="text-mile-blue text-xs">1</span>
                    </div>
                    <h4 className="text-xs font-medium">Strategic Leadership</h4>
                  </div>
                  <div className="bg-mile-light-gray p-3 rounded-lg">
                    <div className="w-8 h-8 bg-mile-orange/20 rounded-full flex items-center justify-center mb-2">
                      <span className="text-mile-orange text-xs">2</span>
                    </div>
                    <h4 className="text-xs font-medium">Effective Communication</h4>
                  </div>
                </div>
                
                {/* Activity Graph */}
                <div className="bg-mile-light-gray p-3 rounded-lg">
                  <h4 className="text-xs font-medium mb-2">Learning Activity</h4>
                  <div className="flex items-end h-12 gap-1">
                    <div className="bg-mile-blue/20 w-full rounded-sm" style={{ height: '30%' }}></div>
                    <div className="bg-mile-blue/40 w-full rounded-sm" style={{ height: '50%' }}></div>
                    <div className="bg-mile-blue/60 w-full rounded-sm" style={{ height: '70%' }}></div>
                    <div className="bg-mile-blue/80 w-full rounded-sm" style={{ height: '40%' }}></div>
                    <div className="bg-mile-blue w-full rounded-sm" style={{ height: '90%' }}></div>
                    <div className="bg-mile-blue/50 w-full rounded-sm" style={{ height: '60%' }}></div>
                    <div className="bg-mile-orange w-full rounded-sm" style={{ height: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -right-4 top-1/4 w-12 h-12 bg-mile-orange/20 rounded-full animate-float"></div>
          <div className="absolute -left-6 bottom-1/4 w-16 h-16 bg-mile-blue/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
      
      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-white w-full h-12 md:h-24">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
