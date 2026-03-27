import React, { useEffect } from 'react';
import { Construction, Clock, Rocket, Code2, Sparkles } from 'lucide-react';

function App() {
  useEffect(() => {
    // Add intersection observers for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Animated glowing orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
              opacity: 0.3 + Math.random() * 0.5
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Animated construction icon */}
        <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 mb-8">
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/50 backdrop-blur-sm">
            <Construction className="w-20 h-20 text-cyan-400 animate-bounce" />
          </div>
        </div>

        {/* Main title */}
        <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 delay-100 mb-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            Coming Soon
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
            <Clock className="w-8 h-8 text-cyan-400 animate-pulse" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
          </div>
        </div>

        {/* Description */}
        <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 delay-200 mb-8">
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Something Exciting is on the Horizon
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            We're crafting something extraordinary. Stay tuned for the launch of our revolutionary platform.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 delay-300 mb-12">
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Development Progress</span>
              <span>65%</span>
            </div>
            <div className="bg-gray-800/50 rounded-full h-2 mb-4 overflow-hidden backdrop-blur-sm">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full rounded-full transition-all duration-1000"
                style={{ width: '65%' }}
              >
                <div className="absolute right-0 top-0 h-full w-1 bg-white animate-pulse"></div>
              </div>
            </div>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Estimated Launch: Q2 2025
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </p>
          </div>
        </div>

        {/* Tech stack badges */}
        <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 delay-400">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 text-gray-300 text-sm flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              React
            </span>
            <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 text-gray-300 text-sm flex items-center gap-2">
              <Rocket className="w-4 h-4 text-cyan-400" />
              Modern Stack
            </span>
            <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 text-gray-300 text-sm">
              AI-Powered
            </span>
            <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 text-gray-300 text-sm">
              Cloud Native
            </span>
          </div>
        </div>

        {/* Optional: Newsletter signup (remove if not wanted) */}
        <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 delay-500 mt-12">
          <p className="text-gray-400 text-sm mb-3">Want to be notified when we launch?</p>
          <div className="flex max-w-sm mx-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              Notify Me
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards !important;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
