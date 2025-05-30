import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import { useDeviceDetect } from '../utils/deviceDetect';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    image: string;
}

const projectsData: Project[] = [
    {
        title: "Admin Dashboard for E-Commerce",
        description: "A full-stack admin dashboard for e-commerce with authentication, user/product/order management, and modern UI/UX.",
        technologies: ["Next.js", "React.js", "Tailwind CSS", "MongoDB", "Express.js", "Node.js"],
        githubUrl: "https://github.com/BodhiOng/Admin-Dashboard-ECommerce",
        image: "/ecommerce-preview.jpg"
    },
    {
        title: "Secondhand Marketplace App",
        description: "A mobile application for users to buy and sell secondhand items locally with a user-friendly interface and a robust backend.",
        technologies: ["Flutter", "Firebase", "Dart"],
        githubUrl: "https://github.com/BodhiOng/Secondhand-Marketplace-App",
        image: "/secondhand-preview.jpg"
    }
];

// Mobile version of Projects component
const MobileProjects: React.FC = () => {
    return (
        <motion.div 
            className="p-5 backdrop-blur-sm rounded-xl shadow-xl w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <motion.h2 
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <FaFolder className="text-blue-400 text-sm" />
                Projects
            </motion.h2>
            
            <motion.div
                className="grid grid-cols-1 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {projectsData.map((project, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-500/30 flex flex-col h-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {project.image && (
                            <div className="relative w-full h-36 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                            </div>
                        )}
                        
                        <div className="p-4 flex-grow flex flex-col">
                            <h3 className="text-lg font-bold text-blue-400 mb-1">{project.title}</h3>
                            
                            <p className="text-gray-300 text-xs mb-3 flex-grow">{project.description}</p>
                            
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {project.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex} 
                                        className="px-1.5 py-0.5 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex gap-3">
                                {project.githubUrl && (
                                    <motion.a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-xs text-gray-300 hover:text-blue-400 transition-colors"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub className="text-sm" />
                                        Code
                                    </motion.a>
                                )}
                                
                                {project.liveUrl && (
                                    <motion.a 
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-xs text-gray-300 hover:text-blue-400 transition-colors"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt className="text-xs" />
                                        Live Demo
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

// Desktop version of Projects component
const DesktopProjects: React.FC = () => {
    return (
        <motion.div 
            className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <motion.h2 
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <FaFolder className="text-blue-400" />
                Projects
            </motion.h2>
            
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {projectsData.map((project, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-500/30 flex flex-col h-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                    >
                        {project.image && (
                            <div className="relative w-full h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                            </div>
                        )}
                        
                        <div className="p-5 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
                            
                            <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex} 
                                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex gap-3">
                                {project.githubUrl && (
                                    <motion.a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub className="text-lg" />
                                        Code
                                    </motion.a>
                                )}
                                
                                {project.liveUrl && (
                                    <motion.a 
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt />
                                        Live Demo
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

// Main Projects component that conditionally renders mobile or desktop version
const Projects: React.FC = () => {
    const { isMobile } = useDeviceDetect();
    
    return (
        <div className="max-w-4xl mx-auto w-full">
            {isMobile ? <MobileProjects /> : <DesktopProjects />}
        </div>
    );
};

export default Projects;
