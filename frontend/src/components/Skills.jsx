import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const skillsData = {
  frontend: {
    icon: "fas fa-laptop-code",
    title: "Frontend Development",
    color: "from-cyan-500 to-blue-500",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  backend: {
    icon: "fas fa-server",
    title: "Backend Development",
    color: "from-blue-500 to-indigo-500",
    skills: ["NestJS", "Node.js", "Express.js"]
  },
  database: {
    icon: "fas fa-database",
    title: "Database",
    color: "from-indigo-500 to-purple-500",
    skills: ["Prisma ORM", "PostgreSQL", "MongoDB"]
  },
  tools: {
    icon: "fas fa-tools",
    title: "Tools & DevOps",
    color: "from-purple-500 to-pink-500",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  }
};

const SkillCard = ({ category, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      data-aos="fade-up" 
      data-aos-delay={index * 150}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-card p-6 h-full">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
          <i className={`${category.icon} text-white text-2xl`}></i>
        </div>
        <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <span key={i} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div data-aos="fade-up">
          <h2 className="section-title">Tech Stack & Skills</h2>
          <p className="section-subtitle">
            Technologies I master to build exceptional digital experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsData).map(([key, category], idx) => (
            <SkillCard key={key} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;