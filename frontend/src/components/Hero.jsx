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
        // Typing
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        if (charIndex + 1 === currentWord.length) {
          // Word completed, wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
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
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-6 border border-cyan-500/30 animate-pulse">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span className="text-sm font-medium text-cyan-400">✨ Available for Opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                Haritha Shree G
              </span>
            </h1>
            
            {/* Typing Animation */}
            <div className="mb-3">
              <p className="text-2xl md:text-3xl font-semibold text-gray-300">
                I'm a{' '}
                <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 inline-block min-w-[200px]">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
            </div>
            
            <p className="text-lg text-gray-400 mb-6 max-w-lg">
              "Building real-world web solutions with practical business impact"
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToProjects} className="btn-primary">
                Explore Work <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
                Let's Connect <i className="fas fa-comment ml-2"></i>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-cyan-500/20">
              {[
                { value: '6+', label: 'Live Projects', icon: 'fas fa-rocket' },
                { value: '4+', label: 'Happy Clients', icon: 'fas fa-users' },
                { value: '100%', label: 'Real Impact', icon: 'fas fa-chart-line' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group cursor-pointer">
                  <i className={`${stat.icon} text-2xl text-cyan-400 mb-2 block group-hover:scale-110 transition`}></i>
                  <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Style Card */}
          <div data-aos="fade-left" className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative glass-card p-8 rounded-2xl">
                <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-laptop-code text-7xl text-cyan-400 mb-4 animate-pulse"></i>
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
                      <i className="fas fa-code text-2xl text-white"></i>
                    </div>
                    <p className="mt-4 text-sm text-gray-400">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add required CSS animation */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;