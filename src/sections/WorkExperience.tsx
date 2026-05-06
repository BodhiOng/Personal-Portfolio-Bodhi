import React from 'react';
import Image from 'next/image';
import SectionBackdrop from '@/components/SectionBackdrop';

const WorkExperience = React.memo(() => {
    return (
        <section className="relative isolate w-full select-none overflow-hidden px-6 py-20 sm:px-8 [content-visibility:auto] [contain-intrinsic-size:1px_900px]" id="work-experience">
            <SectionBackdrop accent="blue" />
            <div className="mx-auto max-w-6xl relative z-10">
                <div className="mb-10 max-w-2xl">
                    <p className="mb-3 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
                        Work Experience
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Software Engineer Intern at Joget Inc.
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                        Aug 2025 - Dec 2025
                    </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-md md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                            <Image
                                src="/joget_inc.jpg"
                                alt="Joget Inc. company logo"
                                fill
                                sizes="44px"
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white sm:text-2xl">Joget Inc.</h3>
                            <p className="text-sm font-medium text-blue-200">Software Engineer Intern</p>
                        </div>
                    </div>

                    <p className="text-base leading-8 text-slate-300">
                        Developed custom Joget platform plugins in Java, plus supporting UI work in JavaScript, HTML, CSS, MySQL, and MariaDB.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">HTML</span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">MySQL</span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">MariaDB</span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">JavaScript</span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">Java</span>
                        </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">Core Contributions</h4>
                            <ul className="space-y-3 text-sm leading-7 text-slate-300">
                                <li>Built a cross-platform broadcast memo plugin and an admin dashboard for message priority and content management.</li>
                                <li>Integrated local Ollama into the platform UI for on-device AI assistance, including structured ZIP export for generated code.</li>
                                <li>Implemented client-side and server-side range calculations for times, dates, and datetimes.</li>
                                <li>Enhanced CRUD flows with a side-slider record panel and created a utility plugin for decrypting locked PDFs.</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/70 to-slate-950/80 p-5">
                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">Impact</h4>
                            <p className="text-sm leading-7 text-slate-300">
                                Focused on practical product work that blended backend plugin development, interface refinement, and platform automation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default WorkExperience;