import React from 'react';
import Image from 'next/image';

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
];

const Projects = () => {
    return (
        <section className="py-8 select-none" id="projects">
            <div className="max-w-2xl mx-auto p-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">Projects</h2>
                
                <div className="space-y-8 border border-gray-800 rounded-lg p-6">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-lg p-6 shadow-sm-full hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="relative w-full overflow-hidden rounded-lg">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={1200}
                                        height={600}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col justify-between flex-1">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-foreground/80 mb-4 text-gray-400">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm border border-gray-800 text-gray-400"
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
                                                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-black hover:bg-black/90 transition-all duration-200 ease-in-out border border-gray-800 rounded-lg hover:shadow-sm hover:scale-105"
                                            >
                                                <Image
                                                    src="/github.png"
                                                    alt="GitHub"
                                                    width={24}
                                                    height={24}
                                                    className="object-contain"
                                                />
                                                <span className="font-medium">View on GitHub</span>
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
};

export default Projects;
