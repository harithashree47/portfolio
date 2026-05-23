import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode, toggleDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Track window width for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenu && windowWidth < 1024) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenu, windowWidth]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenu(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-code' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-cogs' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  const isDesktop = windowWidth >= 1024; // Show full menu on 1024px and above

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? darkMode 
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl border-b border-cyan-500/20' 
            : 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200'
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <div className="relative group cursor-pointer z-10" onClick={() => scrollToSection('home')}>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative text-xl sm:text-2xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Haritha G</span>
                
              </div>
            </div>

            {/* Desktop Navigation - Only on large screens */}
            {isDesktop && (
              <div className="flex items-center gap-4 lg:gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-2 lg:px-3 py-2 font-medium transition-all duration-300 group text-sm lg:text-base ${
                      activeSection === item.id 
                        ? 'text-cyan-400' 
                        : darkMode 
                          ? 'text-gray-300 hover:text-cyan-400' 
                          : 'text-gray-600 hover:text-cyan-500'
                    }`}
                  >
                    <i className={`${item.icon} mr-1 lg:mr-2 text-xs lg:text-sm`}></i>
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></span>
                    )}
                  </button>
                ))}
                
                {/* Dark/Light Mode Toggle Button - Desktop */}
                <button
                  onClick={toggleDark}
                  className={`relative w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <i className="fas fa-sun text-sm lg:text-lg"></i>
                  ) : (
                    <i className="fas fa-moon text-sm lg:text-lg"></i>
                  )}
                </button>
              </div>
            )}

            {/* Mobile Navigation - Only on small screens */}
            {!isDesktop && (
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Dark Mode Toggle for Mobile */}
                <button
                  onClick={toggleDark}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-800 text-yellow-400' 
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <i className="fas fa-sun text-sm sm:text-lg"></i>
                  ) : (
                    <i className="fas fa-moon text-sm sm:text-lg"></i>
                  )}
                </button>
                
                {/* Hamburger Menu Button */}
                <button 
                  onClick={() => setMobileMenu(!mobileMenu)} 
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-800 text-white hover:bg-gray-700' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                  aria-label="Menu"
                >
                  <i className={`fas ${mobileMenu ? 'fa-times' : 'fa-bars'} text-sm sm:text-lg`}></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenu && !isDesktop && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-[90]"
            onClick={() => setMobileMenu(false)}
          ></div>
          
          {/* Mobile Menu Panel */}
          <div 
            className="fixed top-0 right-0 h-full w-64 sm:w-80 z-[95] animate-slide-in"
            style={{
              backgroundColor: darkMode ? '#0a0a0a' : '#ffffff',
              backdropFilter: 'blur(12px)',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-4 sm:p-5 border-b border-cyan-500/20">
              <div className="text-lg sm:text-xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Menu</span>
              </div>
              <button 
                onClick={() => setMobileMenu(false)} 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-times text-base sm:text-lg"></i>
              </button>
            </div>
            
            {/* Mobile Menu Items */}
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left py-3 sm:py-4 px-5 sm:px-6 flex items-center gap-3 transition ${
                    activeSection === item.id 
                      ? 'bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400' 
                      : darkMode 
                        ? 'text-gray-300 hover:bg-white/5' 
                        : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <i className={`${item.icon} w-5 text-base sm:text-lg`}></i>
                  <span className="font-medium text-sm sm:text-base">{item.label}</span>
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Footer */}
            <div className={`absolute bottom-0 left-0 right-0 p-4 text-center text-xs ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            } border-t border-cyan-500/20`}>
              <p>© 2026 Haritha Shree G</p>
              <p className="text-[10px] mt-1">Full Stack Developer</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;