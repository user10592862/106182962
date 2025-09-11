import React, { useEffect, useRef } from 'react';
import { ArrowRight, Brain, Heart, Globe, Shield, Cpu, Rocket, Users, Book, Microscope } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Add intersection observers for animations
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all elements with the 'animate-on-scroll' class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-x-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Hero Section - Hidden on mobile */}
      <section ref={heroRef} className="hidden lg:block relative min-h-screen flex items-center justify-center overflow-hidden pt-44">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="text-center lg:text-left lg:w-1/2">
              <div className="mb-8 animate-fade-in-up">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight">
                  FANG ENTERPRISES
                </h1>
              </div>
              
              <div className="mb-8 animate-fade-in-up animation-delay-200">
                <div className="flex flex-col space-y-2">
                  <div className="text-2xl md:text-3xl font-semibold tracking-wider">
                    <span className="text-blue-400">FLEXIBLE</span>
                    <span className="text-gray-400"> · </span>
                    <span className="text-cyan-400">RELIABLE</span>
                    <span className="text-gray-400"> · </span>
                    <span className="text-blue-400">SCALABLE</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400">
                A forward-thinking innovation company dedicated to transforming industries through technology, healthcare, and beyond. We build cutting-edge ventures that empower organizations and communities worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
                <button
                  onClick={() => onNavigate('solutions')}
                  className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  Explore Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  Partner With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Animated Illustration - Shown on desktop only */}
            <div className="lg:w-1/2 flex justify-center animate-fade-in-up animation-delay-800">
              <div className="relative w-full max-w-md">
                <div className="relative z-10 bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-2xl shadow-blue-500/10">
                  <div className="flex justify-center mb-6">
                    <div className="w-56 h-56 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                      <div className="w-48 h-48 bg-gray-900 rounded-full flex items-center justify-center">
                        <div className="w-40 h-40 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                          <Rocket className="w-20 h-20 text-gray-900" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="h-2 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: `${item * 300}ms` }}></div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-3/4 h-3 bg-cyan-400/40 rounded-full mb-4 animate-pulse animation-delay-1000"></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg animate-pulse animation-delay-1200"></div>
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg animate-pulse animation-delay-1400"></div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full filter blur-xl opacity-50 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-cyan-500 rounded-full filter blur-xl opacity-50 animate-float animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transforming Industries Section - Added extra top padding for mobile */}
      <section className="pt-20 lg:pt-12 pb-12 lg:pb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">Transforming Industries</h1>
            <p className="hidden lg:block text-xl text-gray-300 max-w-3xl mx-auto">
              We're reshaping many sectors through revolutionary never-seen-before solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
{ icon: Cpu, title: 'Technology', description: 'Advanced humanoids, cybersecurity, and digital infrastructure solutions designed to empower organizations.' },
{ icon: Heart, title: 'Healthcare', description: 'Revolutionary medical technologies and transformative health solutions that improve care, efficiency, and patient outcomes.' },
{ icon: Book, title: 'Education', description: 'Innovative learning platforms, training programs, and tools that empower institutions, educators, and learners to achieve better outcomes.' },
{ icon: Microscope, title: 'Research', description: 'Scientific and industrial research solutions that enable organizations to explore and develop breakthroughs across multiple disciplines.' },
            ].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div 
                  key={index} 
                  className="text-center p-5 lg:p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400 transition-all duration-300 animate-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-gray-900" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">{industry.title}</h3>
                  <p className="text-gray-300 text-sm lg:text-base">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Preview Section */}
<section className="py-12 lg:py-20 relative z-10">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 lg:mb-16 animate-on-scroll">
      <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">Our Solutions</h1>
      <p className="hidden lg:block text-xl text-gray-300 max-w-3xl mx-auto">
        Discover our suite of products and ventures designed to transform industries
      </p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <div className="animate-on-scroll">
        <div className="p-5 lg:p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400 transition-all duration-300 h-full">
          <div className="flex items-center mb-4 lg:mb-6">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-3 lg:mr-4">
              <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white">Fang VPN</h3>
          </div>
          <p className="text-gray-300 mb-4 lg:mb-6 text-sm lg:text-base">
            Lightning-fast VPN service with military-grade encryption for ultimate privacy and security. 
            Browse anonymously and access global content without restrictions.
          </p>
          <ul className="space-y-2 mb-6 lg:mb-8">
            {['Zero-log policy', 'Global server network', 'Kill switch protection', 'Multi-device support'].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                {item}
              </li>
            ))}
          </ul>
          <button 
            onClick={() => onNavigate('solutions')}
            className="btn-primary text-sm lg:text-base"
          >
            Learn More
          </button>
        </div>
      </div>
      
      <div className="animate-on-scroll animation-delay-200">
        <div className="p-5 lg:p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400 transition-all duration-300 h-full">
          <div className="flex items-center mb-4 lg:mb-6">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-3 lg:mr-4">
              <Brain className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white">Fang AI</h3>
          </div>
          <p className="text-gray-300 mb-4 lg:mb-6 text-sm lg:text-base">
            Advanced AI tools and automation solutions designed to transform operations. 
            Harness the power of machine learning to drive innovation and efficiency.
          </p>
          <ul className="space-y-2 mb-6 lg:mb-8">
            {['Natural language processing', 'Predictive analytics', 'Custom AI models', 'API integration'].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                {item}
              </li>
            ))}
          </ul>
          <button 
            onClick={() => onNavigate('solutions')}
            className="btn-primary text-sm lg:text-base"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
    
    <div className="text-center mt-8 lg:mt-12 animate-on-scroll">
      <button 
        onClick={() => onNavigate('solutions')}
        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-base lg:text-lg"
      >
        View All Solutions
        <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default HomePage;