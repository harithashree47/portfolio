import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const About = () => {
  const achievements = [
    { icon: "fas fa-briefcase", text: "Live Projects", value: "6+" },
    { icon: "fas fa-microchip", text: "Hardware Integration", value: "100%" },
    { icon: "fas fa-chart-line", text: "Efficiency Boost", value: "70%" },
    { icon: "fas fa-users", text: "Happy Clients", value: "100%" }
  ];

  const expertise = [
    "React.js & Modern Frontend",
    "NestJS Backend Architecture",
    "Prisma & Database Design",
    "Hardware Integration",
    "System Design",
    "Real-time Applications"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Turning complex problems into elegant solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3" data-aos="fade-right">
            <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-gray-700">
              {/* Quote */}
              <div className="mb-6">
                <p className="text-lg md:text-xl text-gray-200 italic">
                  "Building real-world web solutions with practical business impact"
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  I'm <span className="text-cyan-400 font-semibold">Haritha Shree G</span>, 
                  a Full Stack Developer passionate about creating impactful digital experiences. 
                  With hands-on experience in building live client projects, I transform ideas into 
                  robust, scalable applications.
                </p>
                
                <p>
                  My expertise spans <span className="text-cyan-400">service websites, ecommerce platforms, 
                  job portals, and retail automation systems</span> — each project focused on delivering 
                  measurable business value.
                </p>
                
                <p>
                  Currently mastering <span className="text-cyan-400">system design</span> and 
                  <span className="text-cyan-400"> scalable backend architecture</span> to build 
                  enterprise-grade applications.
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">
                  <i className="fas fa-code mr-2"></i>
                  Core Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-cyan-900/50 hover:text-cyan-400 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  className="bg-white/5 rounded-xl p-5 text-center border border-gray-700 hover:border-cyan-500/50 transition-all hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-3">
                    <i className={`${item.icon} text-white text-lg`}></i>
                  </div>
                  
                  {/* Value */}
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                    {item.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-xs text-gray-400">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Card */}
            <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-center">
              <p className="text-sm text-gray-300 mb-2">
                <i className="fas fa-rocket text-cyan-400 mr-2"></i>
                Available For
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">Freelance</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">Full-time</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">Contract</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Badge */}
        <div data-aos="fade-up" className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-gray-700">
            <span className="text-xs text-gray-400">
              <span className="text-cyan-400 font-semibold">6+ Real Projects</span> delivered with 
              <span className="text-purple-400 font-semibold"> 100% client satisfaction</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;