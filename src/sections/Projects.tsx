import React from 'react';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
    image: string;
    category?: string;
    featured?: boolean;
}

const projectsData: Project[] = [
    {
        title: "Admin Dashboard for E-Commerce",
        description: "A full-stack admin dashboard for e-commerce with authentication, user/product/order management, and modern UI/UX.",
        technologies: ["Next.js", "React.js", "Tailwind CSS", "Express.js", "MongoDB"],
        github: "https://github.com/BodhiOng/Admin-Dashboard-ECommerce",
        image: "/ecommerce-preview.jpg",
        category: "Web Development",
        featured: true
    },
    {
        title: "Secondhand Marketplace App",
        description: "This is a secondhand marketplace app developed as part of the CT124-3-2-MAE (Mobile App Engineering) group assignment for the Asia Pacific University (APU) in 2025",
        technologies: ["Flutter", "Dart", "Firebase"],
        github: "https://github.com/BodhiOng/Secondhand-Marketplace-App",
        image: "/secondhand-preview.jpg",
        category: "Mobile Development"
    }
];

const Projects = React.memo(() => {
    return (
        <section className="w-full py-16 select-none relative" id="projects">            
            {/* Content container with max-width for readability */}
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="mb-12">
                    <div className="flex items-center mb-3">
                        <div className="p-2 bg-blue-900/30 rounded-lg mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block">Projects</h2>
                    </div>
                    <div className="ml-11">
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-2"></div>
                        <p className="text-gray-400 italic">Showcasing my development work</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-900/20 transition-all duration-300 border border-gray-700/30 group h-full transform hover:scale-[1.02]"
                        >
                            <div className="flex flex-col h-full">
                                {/* Project Image with Overlay */}
                                <div className="relative w-full h-64 md:h-72 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {/* Category Badge */}
                                    {project.category && (
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-xs font-medium border border-blue-800/40">
                                                {project.category}
                                            </span>
                                        </div>
                                    )}
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-xs font-medium border border-purple-800/40 flex items-center">
                                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                    {/* Project Title */}
                                    <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 to-black/0 pt-8 pb-4 px-6">
                                        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md group-hover:text-blue-300 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                                
                                {/* Project Details */}
                                <div className="p-6 flex flex-col justify-between flex-grow">
                                    <div>
                                        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                                        
                                        {/* Technologies */}
                                        <div className="mb-6">
                                            <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3 font-medium">Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => {
                                                    // Assign different colors based on technology type
                                                    let colorClass = "bg-blue-900/20 text-blue-300 border-blue-800/30 hover:bg-blue-800/30";
                                                    
                                                    if (tech.toLowerCase().includes('react') || tech.toLowerCase().includes('next')) {
                                                        colorClass = "bg-cyan-900/20 text-cyan-300 border-cyan-800/30 hover:bg-cyan-800/30";
                                                    } else if (tech.toLowerCase().includes('flutter') || tech.toLowerCase().includes('dart')) {
                                                        colorClass = "bg-sky-900/20 text-sky-300 border-sky-800/30 hover:bg-sky-800/30";
                                                    } else if (tech.toLowerCase().includes('firebase')) {
                                                        colorClass = "bg-amber-900/20 text-amber-300 border-amber-800/30 hover:bg-amber-800/30";
                                                    } else if (tech.toLowerCase().includes('mongo')) {
                                                        colorClass = "bg-green-900/20 text-green-300 border-green-800/30 hover:bg-green-800/30";
                                                    } else if (tech.toLowerCase().includes('tailwind')) {
                                                        colorClass = "bg-indigo-900/20 text-indigo-300 border-indigo-800/30 hover:bg-indigo-800/30";
                                                    }
                                                    
                                                    return (
                                                        <span
                                                            key={i}
                                                            className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors duration-300 ${colorClass}`}
                                                        >
                                                            {tech}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Action Buttons */}
                                    <div className="mt-auto flex flex-wrap gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 rounded-lg shadow-lg hover:shadow-gray-700/20 border border-gray-700/50 group"
                                            >
                                                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                <span>GitHub</span>
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition-all duration-300 rounded-lg shadow-lg hover:shadow-blue-600/30 border border-blue-700/50 group"
                                            >
                                                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                </svg>
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Projects;