import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projectsData } from '../data';

AOS.init();

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      data-aos="fade-up" 
      data-aos-delay={index * 100}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-card p-6 h-full relative overflow-hidden">
        {/* Gradient Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className={`text-xs px-2 py-1 rounded-full ${
            project.category === 'fullstack' 
              ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
              : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
          }`}>
            {project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
          </span>
        </div>
        
        {/* Icon */}
       <div 
  onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 cursor-pointer`}
>
  <i className={`${project.icon} text-white text-2xl`}></i>
</div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition">
          {project.title}
        </h3>
        
        {project.isHighlight && (
          <span className="inline-flex items-center gap-1 bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full mb-3 border border-cyan-500/30">
            <i className="fas fa-star text-xs"></i> Featured Project
          </span>
        )}
        
        <p className="text-gray-400 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span key={i} className="skill-badge text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Features Preview */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 2).map((feature, i) => (
              <span key={i} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
                {feature}
              </span>
            ))}
            {project.features.length > 2 && (
              <span className="text-xs text-gray-500">+{project.features.length - 2} more</span>
            )}
          </div>
        </div>
        
        {/* Impact Badge */}
        <div className="border-t border-cyan-500/20 pt-3 mt-2">
          <div className="flex items-center gap-2">
            <i className="fas fa-chart-line text-cyan-400 text-sm"></i>
            <span className="text-xs text-gray-400">Impact:</span>
            <span className="text-xs text-cyan-400 font-medium">{project.impact}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects', icon: 'fas fa-th-large' },
  
    { id: 'fullstack', label: 'Full Stack', icon: 'fas fa-layer-group' },
    { id: 'featured', label: 'Featured', icon: 'fas fa-star' }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : filter === 'featured' 
      ? projectsData.filter(p => p.isHighlight)
      : projectsData.filter(p => p.category === filter);

  // Calculate statistics
  const frontendCount = projectsData.filter(p => p.category === 'frontend').length;
  const fullstackCount = projectsData.filter(p => p.category === 'fullstack').length;
  const featuredCount = projectsData.filter(p => p.isHighlight).length;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div data-aos="fade-up">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world solutions with measurable business impact
          </p>
        </div>
        
        {/* Filter Buttons with Counts */}
        <div data-aos="fade-up" className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === f.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <i className={f.icon}></i>
              {f.label}
              {f.id !== 'all' && f.id !== 'featured' && (
                <span className={`ml-1 text-xs ${
                  filter === f.id ? 'text-white' : 'text-gray-500'
                }`}>
                  ({f.id === 'frontend' ? frontendCount : fullstackCount})
                </span>
              )}
              {f.id === 'featured' && featuredCount > 0 && (
                <span className={`ml-1 text-xs ${
                  filter === f.id ? 'text-white' : 'text-gray-500'
                }`}>
                  ({featuredCount})
                </span>
              )}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <i className="fas fa-folder-open text-6xl text-gray-600 mb-4"></i>
              <p className="text-gray-400">No projects found in this category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;