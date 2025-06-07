import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import image from 'next/image';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
    image: string;
}

const projectsData: Project[] = [
    {
        title: "Admin Dashboard for E-Commerce",
        description: "A full-stack admin dashboard for e-commerce with authentication, user/product/order management, and modern UI/UX.",
        technologies: ["Next.js", "React.js", "Tailwind CSS", "MongoDB", "Express.js", "Node.js"],
        github: "https://github.com/BodhiOng/Admin-Dashboard-ECommerce",
        image: "/ecommerce-preview.jpg"
    },
    {
        title: "Secondhand Marketplace App",
        description: "This is a secondhand marketplace app developed as part of the CT124-3-2-MAE (Mobile App Engineering) group assignment for the Asia Pacific University (APU) in 2025",
        technologies: ["Flutter", "Dart", "Firebase"],
        github: "https://github.com/BodhiOng/Secondhand-Marketplace-App",
        image: "/secondhand-preview.jpg"
    }
];

const Projects = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section className="w-full py-16 select-none relative" id="projects">
            {/* Decorative background elements that span full width */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
            
            {/* Content container with max-width for readability */}
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block mb-3">Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </motion.div>
                
                <motion.div 
                    className="space-y-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-full hover:shadow-blue-900/10 transition-all duration-500 border border-gray-700/30 group"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex flex-col">
                                <div className="relative w-full h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                                    <motion.div 
                                        className="absolute inset-0"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 1.2 }}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                    <div className="absolute bottom-4 left-4 right-4 z-20">
                                        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{project.title}</h3>
                                    </div>
                                </div>
                                
                                <div className="p-6 flex flex-col justify-between flex-1 bg-gradient-to-b from-gray-900 to-gray-800">
                                    <div>
                                        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-blue-900/20 text-blue-300 rounded-full text-sm font-medium border border-blue-800/30 hover:bg-blue-800/30 transition-colors duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-4 flex gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition-all duration-300 rounded-lg shadow-lg hover:shadow-blue-600/30 group"
                                            >
                                                <Image
                                                    src="/github.png"
                                                    alt="GitHub"
                                                    width={24}
                                                    height={24}
                                                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                                                />
                                                <span className="font-medium">View on GitHub</span>
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-lg hover:shadow-purple-600/30 group"
                                            >
                                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                </svg>
                                                <span className="font-medium">Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
