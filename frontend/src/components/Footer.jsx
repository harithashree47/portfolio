import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com/harithashree47", color: "hover:text-cyan-400" },
    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/harithashree-gr01/", color: "hover:text-blue-400" },
  { icon: "fas fa-envelope", url: "mailto:harithashree3047@gmail.com", color: "hover:text-red-400" },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-cyan-500/20 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Haritha Shree G
            </div>
            <p className="text-gray-500 text-sm mt-1">Full Stack Developer</p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © {currentYear} All rights reserved
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Building real-world web solutions with practical business impact
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;