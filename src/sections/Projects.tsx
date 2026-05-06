import React from 'react';
import SectionBackdrop from '@/components/SectionBackdrop';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
    image?: string;
    category?: string;
    featured?: boolean;
}

const projectsData: Project[] = [
    {
        title: 'Proof-of-Publish Timestamping Portal',
        description: 'A blockchain-based proof-of-publish portal that records publication hashes on a local Ethereum network, stores metadata in PostgreSQL, and verifies authenticity through smart contract timestamps.',
        technologies: ['Next.js', 'PostgreSQL', 'Solidity', 'Hardhat'],
        github: 'https://github.com/BodhiOng/Proof-of-Publish-Timestamping-Portal',
        image: '/blockchain-preview.png',
        category: 'Blockchain Development'
    },
    {
        title: 'Secondhand Marketplace App',
        description: 'A feature-rich secondhand marketplace app that connects buyers and sellers through product browsing, search and filtering, saved favorites, secure checkout, in-app chat, order tracking, wallet-based payments, and seller tools for listing management, pricing, promotions, and sales monitoring.',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        github: 'https://github.com/BodhiOng/Secondhand-Marketplace-App',
        image: '/secondhand-preview.jpg',
        category: 'Mobile Development'
    },
        {
        title: 'Admin Dashboard for E-Commerce',
        description: 'A full-stack admin dashboard for e-commerce with authentication, user/product/order management, and modern UI/UX.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Express.js', 'MongoDB'],
        github: 'https://github.com/BodhiOng/Admin-Dashboard-ECommerce',
        image: '/ecommerce-preview.jpg',
        category: 'Web Development'
    }
];

const Projects = React.memo(() => {
    const trackRef = React.useRef<HTMLDivElement | null>(null);

    const handleScroll = (direction: 'left' | 'right') => {
        const track = trackRef.current;

        if (!track) {
            return;
        }

        const firstCard = track.querySelector<HTMLElement>('[data-project-card]');
        const cardWidth = firstCard?.getBoundingClientRect().width ?? track.clientWidth * 0.9;
        const gap = 24;
        const offset = cardWidth + gap;

        track.scrollBy({
            left: direction === 'left' ? -offset : offset,
            behavior: 'smooth'
        });
    };

    return (
        <section className="relative isolate w-full select-none overflow-hidden px-6 py-20 sm:px-8" id="projects">
            <SectionBackdrop accent="violet" />
            <div className="mx-auto max-w-6xl relative z-10">
                <div className="mb-10 md:hidden">
                    <p className="mb-3 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
                        Projects
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-blue-400/10 p-3 text-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-white">Selected work</h2>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                        A small set of projects that reflect the kinds of problems I like solving across web and mobile.
                    </p>
                </div>

                <div className="mb-10 hidden flex-col gap-4 md:flex lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="mb-3 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
                            Projects
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-blue-400/10 p-3 text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected work</h2>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                            A small set of projects that reflect the kinds of problems I like solving across web and mobile.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 self-start lg:self-auto">
                        <button
                            type="button"
                            onClick={() => handleScroll('left')}
                            aria-label="Scroll projects left"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:bg-white/10"
                        >
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => handleScroll('right')}
                            aria-label="Scroll projects right"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:bg-white/10"
                        >
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="grid gap-6 md:hidden">
                    {projectsData.map((project, index) => (
                        <article
                            key={index}
                            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 shadow-xl shadow-slate-950/30 backdrop-blur-xl"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/80 z-10"></div>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-end bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_36%),linear-gradient(135deg,#0f172a_0%,#111827_55%,#020617_100%)] p-6" />
                                )}

                                {project.category && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-100 backdrop-blur-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                )}

                                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/95 via-black/65 to-black/0 px-5 pb-4 pt-10">
                                    <h3 className="text-xl font-bold leading-tight text-white drop-shadow-md">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-5">
                                <p className="mb-5 text-sm leading-6 text-slate-300 line-clamp-4">
                                    {project.description}
                                </p>

                                <div className="mb-5">
                                    <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-400">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => {
                                            let colorClass = 'bg-blue-900/20 text-blue-300 border-blue-800/30';

                                            if (tech.toLowerCase().includes('react') || tech.toLowerCase().includes('next')) {
                                                colorClass = 'bg-cyan-900/20 text-cyan-300 border-cyan-800/30';
                                            } else if (tech.toLowerCase().includes('flutter') || tech.toLowerCase().includes('dart')) {
                                                colorClass = 'bg-sky-900/20 text-sky-300 border-sky-800/30';
                                            } else if (tech.toLowerCase().includes('firebase')) {
                                                colorClass = 'bg-amber-900/20 text-amber-300 border-amber-800/30';
                                            } else if (tech.toLowerCase().includes('mongo')) {
                                                colorClass = 'bg-green-900/20 text-green-300 border-green-800/30';
                                            } else if (tech.toLowerCase().includes('tailwind')) {
                                                colorClass = 'bg-indigo-900/20 text-indigo-300 border-indigo-800/30';
                                            }

                                            return (
                                                <span
                                                    key={i}
                                                    className={`rounded-full border px-3 py-1 text-sm font-medium ${colorClass}`}
                                                >
                                                    {tech}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 pt-1">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
                                        >
                                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            <span>GitHub</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div ref={trackRef} className="hidden flex gap-6 overflow-x-hidden pb-6 snap-x snap-mandatory scroll-smooth -mx-6 px-6 md:flex md:px-0">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            data-project-card
                            className="snap-start flex-none w-[92%] sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)] group h-[620px] sm:h-[660px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 shadow-xl shadow-slate-950/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/40 backdrop-blur-xl"
                        >
                            <div className="flex flex-col h-full">
                                <div className="relative h-64 w-full overflow-hidden md:h-72">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 z-10"></div>
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-end bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_36%),linear-gradient(135deg,#0f172a_0%,#111827_55%,#020617_100%)] p-6">
                                            <div className="relative z-20 max-w-sm">
                                                <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
                                                    Blockchain
                                                </div>
                                                <h3 className="text-2xl font-bold text-white drop-shadow-md transition-colors duration-300 group-hover:text-cyan-200">
                                                    {project.title}
                                                </h3>
                                                <p className="mt-3 text-sm leading-6 text-slate-300">
                                                    Built to prove publication timing with an auditable, modern web workflow.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {project.category && (
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-100 backdrop-blur-sm">
                                                {project.category}
                                            </span>
                                        </div>
                                    )}
                                    {project.featured && (
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="flex items-center rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs font-medium text-fuchsia-100 backdrop-blur-sm">
                                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                    {project.image && (
                                        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 to-black/0 pt-8 pb-4 px-6">
                                            <h3 className="mb-1 text-2xl font-bold text-white drop-shadow-md transition-colors duration-300 group-hover:text-cyan-200">
                                                {project.title}
                                            </h3>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-grow flex-col justify-between p-6">
                                    <div>
                                        <p
                                            className="mb-6 leading-relaxed text-slate-300"
                                            style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 5, overflow: 'hidden' }}
                                        >
                                            {project.description}
                                        </p>

                                        <div className="mb-6">
                                            <h4 className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => {
                                                    let colorClass = 'bg-blue-900/20 text-blue-300 border-blue-800/30 hover:bg-blue-800/30';

                                                    if (tech.toLowerCase().includes('react') || tech.toLowerCase().includes('next')) {
                                                        colorClass = 'bg-cyan-900/20 text-cyan-300 border-cyan-800/30 hover:bg-cyan-800/30';
                                                    } else if (tech.toLowerCase().includes('flutter') || tech.toLowerCase().includes('dart')) {
                                                        colorClass = 'bg-sky-900/20 text-sky-300 border-sky-800/30 hover:bg-sky-800/30';
                                                    } else if (tech.toLowerCase().includes('firebase')) {
                                                        colorClass = 'bg-amber-900/20 text-amber-300 border-amber-800/30 hover:bg-amber-800/30';
                                                    } else if (tech.toLowerCase().includes('mongo')) {
                                                        colorClass = 'bg-green-900/20 text-green-300 border-green-800/30 hover:bg-green-800/30';
                                                    } else if (tech.toLowerCase().includes('tailwind')) {
                                                        colorClass = 'bg-indigo-900/20 text-indigo-300 border-indigo-800/30 hover:bg-indigo-800/30';
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

                                    <div className="mt-auto flex flex-wrap gap-3 pt-2">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
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
                                                className="inline-flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-100 transition-all duration-300 hover:bg-blue-400/20"
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