import React from 'react';

const ProjectCard = ({ project, index }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={index * 100}>
      <div className="project-card group">
        <div className="p-6">
          {/* Title & Highlight Badge */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold group-hover:text-blue-600 transition">
              {project.title}
            </h3>
            {project.isHighlight && (
              <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs px-2 py-1 rounded-full">
                <i className="fas fa-star mr-1"></i> Featured
              </span>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {(project.techStack || []).map((tech, i) => (
                <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {(project.features || []).map((feature, i) => (
                <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <i className="fas fa-check-circle text-green-500 text-xs mt-1"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Real-world Impact */}
          <div className="border-t dark:border-gray-700 pt-3 mt-2">
            <div className="flex items-start gap-2">
              <i className="fas fa-chart-line text-blue-500 mt-1"></i>
              <div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Real Impact:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300">{project.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;