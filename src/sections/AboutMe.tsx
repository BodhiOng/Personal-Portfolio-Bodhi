import React from 'react';

const AboutMe = () => {
    return (
        <section className="w-full py-16 select-none relative">            
            {/* Content container with max-width for readability */}
            <div className="max-w-5xl mx-auto px-6">
                {/* Section header with decorative elements */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 pb-3 inline-block">
                        About Me
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-2"></div>
                    <p className="text-gray-400 italic mt-2">Passionate about creating impactful digital experiences</p>
                </div>

                {/* Main content with improved visual design */}
                <div className="space-y-8 text-gray-300 leading-relaxed text-left relative z-10">
                    {/* Introduction card */}
                    <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-6 rounded-xl border border-blue-700/30 shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
                        <h2 className="text-xl font-semibold text-blue-300 mb-3 flex items-center">
                            <span className="bg-blue-500/20 p-2 rounded-lg mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Who I Am
                        </h2>
                        <p className="text-lg font-medium text-blue-100">
                            As a dedicated Software Engineering student at Asia Pacific University (APU), I am pursuing a career in full-stack development with a strong interest in back-end work.
                        </p>
                    </div>

                    {/* Skills & Expertise */}
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700/50 transform hover:scale-[1.01] transition-transform duration-300">
                        <h2 className="text-xl font-semibold text-blue-300 mb-3 flex items-center">
                            <span className="bg-blue-500/20 p-2 rounded-lg mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Skills & Expertise
                        </h2>
                        <p className="mb-4">
                            My academic journey has equipped me with a solid foundation across both server-side and client-side development, enabling me to approach projects holistically. I enjoy taking on complex challenges and am committed to continuously expanding my skills across the full stack.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-blue-300 border border-blue-800/30">Full-stack Development</span>
                            <span className="px-3 py-1 bg-purple-900/30 rounded-full text-sm text-purple-300 border border-purple-800/30">Backend Architecture</span>
                            <span className="px-3 py-1 bg-indigo-900/30 rounded-full text-sm text-indigo-300 border border-indigo-800/30">Database Design</span>
                        </div>
                    </div>

                    {/* Mobile & Quant Development */}
                    <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 p-6 rounded-xl shadow-lg border border-indigo-700/30 transform hover:scale-[1.01] transition-transform duration-300">
                        <h2 className="text-xl font-semibold text-blue-300 mb-3 flex items-center">
                            <span className="bg-blue-500/20 p-2 rounded-lg mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Beyond Web Development
                        </h2>
                        <p className="mb-4">
                            I also dabble in mobile development, creating responsive and intuitive applications for Android platforms. My experience with Flutter allows me to build cross-platform solutions efficiently.
                        </p>
                        <p className="mb-4">
                            Additionally, I've ventured into quantitative development, applying programming skills to financial modeling and algorithmic trading strategies. This intersection of finance and technology has allowed me to develop data-driven solutions for complex financial problems.
                        </p>
                    </div>

                    {/* Experience & Approach */}
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700/50 transform hover:scale-[1.01] transition-transform duration-300">
                        <h2 className="text-xl font-semibold text-blue-300 mb-3 flex items-center">
                            <span className="bg-blue-500/20 p-2 rounded-lg mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                            </span>
                            Experience & Approach
                        </h2>
                        <p className="mb-4">
                            My hands-on experience with personal projects has honed my ability to work independently and deliver results effectively. Staying current with industry trends is essential to me, and I strive to implement best practices across my work.
                        </p>
                    </div>

                    {/* Connect card */}
                    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl shadow-lg border border-blue-700/30 transform hover:scale-[1.01] transition-transform duration-300">
                        <h2 className="text-xl font-semibold text-blue-300 mb-3 flex items-center">
                            <span className="bg-blue-500/20 p-2 rounded-lg mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Let's Connect
                        </h2>
                        <p className="text-base font-medium text-blue-100">
                            I'm excited to connect with professionals, mentors, and collaborators who are driven by a shared passion for innovative, practical solutions. Let's explore how we can bring creative ideas to life together!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(AboutMe);
