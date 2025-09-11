import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { navItems } from './data/content';

// Lazy load page components for better performance
const HomePage = lazy(() => import('./components/pages/HomePage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const SolutionsPage = lazy(() => import('./components/pages/SolutionsPage'));
const LeadershipPage = lazy(() => import('./components/pages/LeadershipPage'));
const CareersPage = lazy(() => import('./components/pages/CareersPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));

// Main app component with routing
const AppWithRouting = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  // Get current page from URL path
  const getCurrentPageFromPath = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'about';
    if (path === '/solutions') return 'solutions';
    if (path === '/leadership') return 'leadership';
    if (path === '/careers') return 'careers';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const currentPage = getCurrentPageFromPath();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle custom events for hiding/showing header
  useEffect(() => {
    const handleHideHeader = () => {
      setIsHeaderHidden(true);
    };
    
    const handleShowHeader = () => {
      setIsHeaderHidden(false);
    };
    
    window.addEventListener('hideHeader', handleHideHeader);
    window.addEventListener('showHeader', handleShowHeader);
    
    return () => {
      window.removeEventListener('hideHeader', handleHideHeader);
      window.removeEventListener('showHeader', handleShowHeader);
    };
  }, []);

  // Handle page transitions with loading state
  const handlePageChange = (pageId) => {
    setIsLoading(true);
    setIsMenuOpen(false);
    
    // Navigate to the correct route
    const route = pageId === 'home' ? '/' : `/${pageId}`;
    navigate(route);
    
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Simulate loading for demonstration
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 font-sans">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <Header 
        currentPage={currentPage} 
        scrollY={scrollY}
        isMenuOpen={isMenuOpen}
        isHeaderHidden={isHeaderHidden}
        onPageChange={handlePageChange}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        navItems={navItems}
      />
      
      <main className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          {isLoading ? <LoadingSpinner /> : (
            <Routes>
              <Route path="/" element={<HomePage onNavigate={handlePageChange} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/leadership" element={<LeadershipPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Redirect any unknown routes to home */}
              <Route path="*" element={<HomePage onNavigate={handlePageChange} />} />
            </Routes>
          )}
        </Suspense>
      </main>
      
      <Footer onPageChange={handlePageChange} navItems={navItems} />
    </div>
  );
};

// Main app wrapper with Router
const FangEnterprisesWebsite = () => {
  return (
    <Router>
      <AppWithRouting />
    </Router>
  );
};

export default FangEnterprisesWebsite;