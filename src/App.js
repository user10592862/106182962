import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center relative overflow-hidden">
      {/* Deep mysterious background - dark red/black gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950" />
      
      {/* Dark smoke effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 0, 0, 0.4) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(100, 0, 0, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 40% 20%, rgba(180, 0, 0, 0.2) 0%, transparent 50%)`,
        }}></div>
      </div>
      
      {/* Dark glowing orbs - deep red and burgundy */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-900 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-maroon-900 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-800 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Dark floating particles - red tint */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
              opacity: 0.2 + Math.random() * 0.4
            }}
          />
        ))}
      </div>

      {/* Subtle dark grain texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px'
      }}></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 w-full">
        {/* Main title */}
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 tracking-tight"
              style={{
                textShadow: '0 0 30px rgba(139, 0, 0, 0.5), 0 0 60px rgba(139, 0, 0, 0.3)'
              }}>
            COMING SOON
          </h1>
        </div>

        {/* Development Progress Section - Made bigger */}
        <div className="max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          <div className="flex justify-between text-lg md:text-xl text-gray-300 mb-4">
            <span className="font-medium tracking-wide">DEVELOPMENT PROGRESS</span>
            <span className="text-red-400 font-bold">65%</span>
          </div>
          <div className="bg-gray-900/80 rounded-full h-4 md:h-5 mb-8 overflow-hidden backdrop-blur-sm border border-red-900/30">
            <div 
              className="bg-gradient-to-r from-red-700 to-red-500 h-full rounded-full transition-all duration-1000 relative"
              style={{ width: '65%' }}
            >
              <div className="absolute right-0 top-0 h-full w-1 bg-red-300 animate-pulse"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-400 text-base">
            <div className="w-8 h-px bg-red-700"></div>
            <span className="tracking-wide">Estimated Launch: Q2 2027</span>
            <div className="w-8 h-px bg-red-700"></div>
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
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default App;
