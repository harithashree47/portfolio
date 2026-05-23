import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "ReactJS Developer",
    "MERN Stack Developer",
    "NestJS Developer",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Typing Animation Effect
  useEffect(() => {
    const currentWord = roles[wordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 100 : 150);
    
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 max-w-full overflow-x-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right" className="w-full">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-cyan-500/30">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-cyan-400 whitespace-nowrap">✨ Available for Opportunities</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
              <div className="mb-1">Hi, I'm</div>
              <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient break-words">
                Haritha Shree G
              </div>
            </h1>
            
            {/* Typing Animation - Completely redesigned for mobile */}
            <div className="mb-3 sm:mb-4 min-h-[60px] sm:min-h-[80px]">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">
                <span className="block sm:inline">I'm a </span>
                <span className="text-cyan-400 inline-block break-words">
                  {typedText}
                  <span className="inline-block animate-pulse ml-0.5">|</span>
                </span>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-lg">
              "Building real-world web solutions with practical business impact"
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button onClick={scrollToProjects} className="btn-primary text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5">
                Explore Work <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5">
                Let's Connect <i className="fas fa-comment ml-2"></i>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-cyan-500/20">
              {[
                { value: '6+', label: 'Live Projects', icon: 'fas fa-rocket' },
                { value: '4+', label: 'Happy Clients', icon: 'fas fa-users' },
                { value: '100%', label: 'Real Impact', icon: 'fas fa-chart-line' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group cursor-pointer">
                  <i className={`${stat.icon} text-base sm:text-xl md:text-2xl text-cyan-400 mb-1 sm:mb-2 block group-hover:scale-110 transition`}></i>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" className="flex justify-center mt-6 lg:mt-0 w-full">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative glass-card p-4 sm:p-6 md:p-8 rounded-2xl">
                <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-laptop-code text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cyan-400 mb-2 sm:mb-3 md:mb-4 animate-pulse"></i>
                    <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
                      <i className="fas fa-code text-base sm:text-xl md:text-2xl text-white"></i>
                    </div>
                    <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm text-gray-400 whitespace-nowrap">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        /* Ensure no horizontal scroll on mobile */
        body {
          overflow-x: hidden;
          width: 100%;
        }
        
        .container {
          width: 100%;
          max-width: 100%;
        }
        
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          h1 div {
            word-break: break-word;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;