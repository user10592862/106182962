import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ currentPage, scrollY, isMenuOpen, isHeaderHidden, onPageChange, onMenuToggle, navItems }) => {
  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      scrollY > 30 
        ? 'bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-800/95 backdrop-blur-md border-b border-gray-700 py-1' 
        : 'bg-transparent py-2'
    } ${isHeaderHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <img 
                src="/images/Logo.png" 
                alt="Fang Enterprises Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Fang Enterprises
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-12 flex items-baseline space-x-8 lg:space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`px-3 py-2 text-base font-medium transition-all duration-200 relative group ${
                    currentPage === item.id
                      ? 'text-blue-400'
                      : 'text-white hover:text-blue-400'
                  }`}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full ${
                    currentPage === item.id ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={onMenuToggle}
              className="text-white hover:text-blue-400 p-2 bg-gray-800/50 rounded-lg transition-all duration-200 hover:bg-blue-500/20"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-800/95 backdrop-blur-md border-b border-gray-700 z-40">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  onMenuToggle();
                }}
                className={`block px-4 py-3 text-base font-medium w-full text-left transition-all duration-200 rounded-lg ${
                  currentPage === item.id 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-white hover:text-blue-400 hover:bg-blue-500/10'
                }`}
                aria-current={currentPage === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;