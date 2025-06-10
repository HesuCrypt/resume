import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, Code, Database, Wrench, LucideIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  status: 'Completed' | 'In Development';
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  category: 'Full-Stack Web Development' | 'Hardware & Networking' | 'Frontend Development';
  image: string;
  icon: LucideIcon;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Library Management System',
      subtitle: 'Capstone Project',
      period: 'July 2024 - February 2025',
      status: 'In Development',
      description: 'Developed a comprehensive Library Management System as a capstone project, leveraging MySQL, PHP, CSS, and HTML to build an intuitive application for managing books, members, and transactions efficiently.',
      longDescription: 'This full-stack web application serves as my capstone project, demonstrating proficiency in database design, server-side programming, and user interface development. The system features a clean, responsive design that provides librarians with powerful tools for inventory management, member registration, and transaction tracking.',
      technologies: ['MySQL', 'PHP', 'CSS', 'HTML', 'JavaScript'],
      features: [
        'Book inventory management with search and filtering',
        'Member registration and profile management',
        'Check-in/check-out transaction system',
        'Overdue book tracking and notifications',
        'Administrative dashboard with analytics',
        'Responsive design for mobile and desktop'
      ],
      category: 'Full-Stack Web Development',
      image: '/api/placeholder/600/400',
      icon: Database
    },
    {
      id: 2,
      title: 'Hardware & Network Infrastructure',
      subtitle: 'Technical Skills Project',
      period: 'November 2024 - January 2025',
      status: 'Completed',
      description: 'Gained hands-on experience in computer hardware assembly, troubleshooting, and network infrastructure setup including data rack assembly and cable management.',
      longDescription: 'This comprehensive technical skills project involved practical training in both computer hardware and network infrastructure. The experience provided deep understanding of system architecture, component compatibility, and professional networking standards.',
      technologies: ['Hardware Assembly', 'Network Configuration', 'Cable Management', 'Troubleshooting'],
      features: [
        'Complete computer assembly and disassembly',
        'Hardware component troubleshooting and diagnosis',
        'Data rack assembly and organization',
        'Professional cable management techniques',
        'Network equipment installation and configuration',
        'System testing and quality assurance'
      ],
      category: 'Hardware & Networking',
      image: '/api/placeholder/600/400',
      icon: Wrench
    },
    {
      id: 3,
      title: 'Portfolio Website',
      subtitle: 'Personal Project',
      period: 'January 2025',
      status: 'Completed',
      description: 'Designed and developed a modern, responsive portfolio website using React and Tailwind CSS with smooth animations and professional aesthetics.',
      longDescription: 'A modern portfolio website built with cutting-edge web technologies, featuring smooth animations, responsive design, and optimized performance. The site showcases my projects, skills, and experience with a focus on user experience and visual appeal.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      features: [
        'Responsive design optimized for all devices',
        'Smooth scroll animations and micro-interactions',
        'Modern black and white aesthetic',
        'Interactive project showcase',
        'Contact form with validation',
        'SEO optimization and performance tuning'
      ],
      category: 'Frontend Development',
      image: '/api/placeholder/600/400',
      icon: Code
    }
  ];

  const getCategoryIcon = (category: Project['category']): LucideIcon => {
    switch (category) {
      case 'Full-Stack Web Development':
        return Database;
      case 'Hardware & Networking':
        return Wrench;
      case 'Frontend Development':
        return Code;
      default:
        return Code;
    }
  };

  const getStatusColor = (status: Project['status']): string => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Development':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-black mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            A showcase of my technical projects demonstrating proficiency in web development, 
            database management, and system administration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {projects.map((project, index) => {
            const IconComponent = getCategoryIcon(project.category);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <IconComponent size={40} className="text-gray-400 group-hover:text-black transition-colors duration-300" />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2">
                    <Calendar size={12} className="sm:w-4 sm:h-4" />
                    <span>{project.period}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.slice(0, 3).map((tech: string) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-medium text-gray-500">{project.category}</span>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
                      >
                        <ExternalLink size={12} className="sm:w-4 sm:h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2">{selectedProject.title}</h2>
                      <p className="text-sm sm:text-base text-gray-600">{selectedProject.subtitle}</p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                    >
                      ×
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div>
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg sm:rounded-xl h-48 sm:h-64 flex items-center justify-center mb-4 sm:mb-6">
                        <selectedProject.icon size={48} className="sm:w-16 sm:h-16 text-gray-400" />
                      </div>
                      
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {selectedProject.technologies.map((tech: string) => (
                              <span
                                key={tech}
                                className="px-2 sm:px-3 py-1 bg-black text-white text-xs sm:text-sm rounded-md font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-black mb-2 text-sm sm:text-base">Project Details:</h4>
                          <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                            <div className="flex justify-between">
                              <span>Duration:</span>
                              <span>{selectedProject.period}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Status:</span>
                              <span className={`px-2 py-0.5 sm:py-1 rounded-full text-xs ${getStatusColor(selectedProject.status)}`}>
                                {selectedProject.status}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Category:</span>
                              <span>{selectedProject.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-2 sm:mb-4 text-sm sm:text-base">Project Description:</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                        {selectedProject.longDescription}
                      </p>

                      <h4 className="font-semibold text-black mb-2 sm:mb-4 text-sm sm:text-base">Key Features:</h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {selectedProject.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;