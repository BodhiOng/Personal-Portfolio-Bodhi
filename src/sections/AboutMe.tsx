import React from 'react';
import SectionBackdrop from '@/components/SectionBackdrop';

const AboutMe = () => {
    return (
        <section className="relative isolate w-full select-none overflow-hidden px-6 py-20 sm:px-8 [content-visibility:auto] [contain-intrinsic-size:1px_900px]">
            <SectionBackdrop accent="violet" />
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 max-w-2xl">
                    <p className="mb-3 inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-violet-200">
                        About Me
                    </p>
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Practical systems, clean interfaces, and a bias toward shipping.
                    </h1>
                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                        A focused snapshot of how I approach development, what I care about technically, and where I like to apply those skills.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-md">
                        <h2 className="mb-4 flex items-center text-xl font-semibold text-white">
                            <span className="mr-3 rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Who I Am
                        </h2>
                        <p className="text-base leading-8 text-slate-300">
                            As a Software Engineering student at Asia Pacific University, I am building toward full-stack development with a particular interest in the back end, where structure and reliability matter most.
                        </p>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-blue-950/70 to-slate-950/80 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-md">
                        <h2 className="mb-4 flex items-center text-xl font-semibold text-white">
                            <span className="mr-3 rounded-2xl bg-blue-400/10 p-3 text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Skills & Expertise
                        </h2>
                        <p className="text-base leading-8 text-slate-300">
                            My academic journey has given me a solid foundation across client-side and server-side development, and I enjoy connecting those layers into something that feels cohesive and dependable.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">Full-stack Development</span>
                            <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-sm text-violet-200">Backend Architecture</span>
                            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">Database Design</span>
                        </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-indigo-950/70 to-slate-950/80 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-md">
                        <h2 className="mb-4 flex items-center text-xl font-semibold text-white">
                            <span className="mr-3 rounded-2xl bg-indigo-400/10 p-3 text-indigo-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Beyond Web Development
                        </h2>
                        <p className="mb-4 text-base leading-8 text-slate-300">
                            I also explore mobile development, building responsive applications with Flutter for Android and cross-platform use cases.
                        </p>
                        <p className="text-base leading-8 text-slate-300">
                            I have also ventured into quantitative development, using programming for financial modeling and algorithmic trading ideas where data-driven thinking matters.
                        </p>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-md">
                        <h2 className="mb-4 flex items-center text-xl font-semibold text-white">
                            <span className="mr-3 rounded-2xl bg-amber-400/10 p-3 text-amber-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                            </span>
                            Experience & Approach
                        </h2>
                        <p className="text-base leading-8 text-slate-300">
                            Personal projects have sharpened my ability to work independently, make pragmatic decisions, and keep iterating until the result is both functional and polished.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(AboutMe);
