import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const highlightsData = [
  { 
    icon: "fas fa-rocket", 
    title: "Production Websites", 
    desc: "Built real-world production-level websites used by actual businesses",
    gradient: "from-cyan-500 to-blue-500"
  },
   { 
    icon: "fas fa-user-shield", 
    title: "Role-Based Systems", 
    desc: "Implemented multi-role systems (User, Admin, Super Admin) with secure access control",
    gradient: "from-blue-500 to-indigo-500"
  },
   { 
    icon: "fas fa-envelope", 
    title: "Email Automation", 
    desc: "Integrated email services using Nodemailer for notifications and user communication",
    gradient: "from-pink-500 to-rose-500"
  },
 
  { 
    icon: "fas fa-database", 
    title: "Fullstack Development", 
    desc: "Experienced in building end-to-end applications with frontend, backend, and database integration",
    gradient: "from-rose-500 to-red-500"
  }
  
];

const Highlights = () => {
  return (
    <section className="section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10">
        <div data-aos="fade-up" className="text-center mb-12">
          {/* Glowing Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-4 border border-cyan-500/30">
         
            <span className="text-sm font-medium text-cyan-400">✨ Why Choose Me</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Makes Me{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Stand Out
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real experience that goes beyond typical portfolio projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightsData.map((item, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
              className="group"
            >
              <div className="glass-card p-6 text-center h-full transition-all duration-500 hover:transform hover:-translate-y-2">
                {/* Icon with Gradient */}
                <div className="relative mx-auto mb-4 w-20 h-20">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-20 group-hover:opacity-40 transition duration-300 blur-lg`}></div>
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition duration-300 shadow-lg`}>
                    <i className={`${item.icon} text-white text-3xl`}></i>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition duration-300">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Decorative Line */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - FIXED: changed </span> to </i> */}
       <div data-aos="fade-up" className="text-center mt-12">
  <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
    <i className="fas fa-medal text-cyan-400 text-xl"></i>
    <span className="text-gray-300">
     
      <span className="text-blue-400 font-semibold ml-2"> Role-Based Systems</span> • 
      <span className="text-purple-400 font-semibold ml-2"> Fullstack Development</span> • 
      <span className="text-pink-400 font-semibold ml-2"> Business Impact</span>
    </span>
  </div>
</div>
      </div>
    </section>
  );
};

export default Highlights;