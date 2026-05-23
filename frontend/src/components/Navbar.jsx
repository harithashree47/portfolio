import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-code' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-cogs' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-cyan-500/20 py-3' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div 
              className="text-xl md:text-2xl font-bold cursor-pointer" 
              onClick={() => scrollToSection('home')}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Haritha G
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Hamburger Button */}
            <button 
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300" 
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-white text-xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-[550] lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-[#0a0a0a] z-[560] lg:hidden shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header - Reduced padding */}
          <div className="px-6 py-4 border-b border-white/10">
            <div className="flex justify-between items-center">
              <span className="text-base font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Menu
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors"
              >
                <i className="fas fa-times text-gray-400 text-xs"></i>
              </button>
            </div>
          </div>

          {/* Navigation Items - Reduced spacing */}
          <div className="flex-1 py-4 px-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400' 
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <i className={`${item.icon} w-4 text-sm`}></i>
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer - Reduced padding */}
          <div className="px-6 py-4 border-t border-white/10">
            <p className="text-gray-500 text-xs text-center">© 2026 Haritha Shree G</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;