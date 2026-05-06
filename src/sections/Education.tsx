import React from 'react';
import SectionBackdrop from '@/components/SectionBackdrop';

interface EducationItem {
    period: string;
    institution: string;
    degree: string;
    courses: string[];
    gpa?: string;
    coursesLink?: string;
}

const educationData: EducationItem[] = [
    {
        period: "2023 - 2026",
        institution: "Asia Pacific University (APU)",
        degree: "Bachelor of Science (Hons) In Software Engineering",
        courses: [
            "Programming with Python",
            "Object Oriented Development with Java",
            "Introduction To Object Oriented Programming",
            "Mobile App Engineering",
            "Introduction to Databases",
            "Introduction to Networking",
            "Data Structures",
            "Software Architecture and Testing",
            "Systems Analysis and Design",
            "Operating Systems and Computer Architecture",
            "Programming for Data Analysis",
            "Requirements Engineering",
            "Design Methods",
            "Enterprise Systems",
            "Digital Thinking and Innovation",
            "Research Methods for Computing and Technology",
            "Mathematical Concept For Computing",
            "Computing Theory",
            "Introduction to Artificial Intelligence",
            "Blockchain Development",
            "Algorithmics",
            "Venture Building",
            "Design Patterns",
            "Advanced Programming Language Concepts",
            "Project Management",
            "Software Quality Engineering",
            "Designing and Developing Applications in the Cloud",
            "Optimisation and Deep Learning"
        ],
        gpa: "3.25"
    },
];

const Education = React.memo(() => {
    // Group courses into categories for better organization
    const groupedCourses = {
        programming: ['Programming with Python', 'Object Oriented Development with Java', 'Introduction To Object Oriented Programming', 'Advanced Programming Language Concepts', 'Programming for Data Analysis'],
        design: ['Software Architecture and Testing', 'Design Methods', 'Design Patterns', 'Software Quality Engineering'],
        systems: ['Introduction to Databases', 'Introduction to Networking', 'Operating Systems and Computer Architecture', 'Enterprise Systems', 'Designing and Developing Applications in the Cloud'],
        product: ['Requirements Engineering', 'Project Management', 'Venture Building', 'Digital Thinking and Innovation'],
        intelligence: ['Data Structure & Algorithms', 'Mathematical Concept For Computing', 'Computing Theory', 'Introduction to Artificial Intelligence', 'Optimisation and Deep Learning', 'Blockchain Development'],
        mobile: ['Mobile App Engineering', 'Systems Analysis and Design', 'Research Methods for Computing and Technology']
    };

    return (
        <section className="relative isolate w-full select-none overflow-hidden px-6 py-20 sm:px-8">            
            <SectionBackdrop accent="blue" />
            <div className="mx-auto max-w-6xl relative z-10">
                <div className="mb-10 max-w-2xl">
                    <p className="mb-3 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
                        Education
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Academic foundation and coursework</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                        A focused view of my degree, results, and the subjects that shaped my technical direction.
                    </p>
                </div>

                <div className="space-y-10">
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-xl md:p-8"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
                            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <div className="mb-3 flex items-center">
                                        <div className="mr-3 rounded-2xl bg-blue-400/10 p-3 text-blue-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-white md:text-2xl">
                                            {item.institution}
                                        </h3>
                                    </div>
                                    <p className="max-w-3xl text-base font-medium text-blue-200 md:ml-15 md:text-lg">
                                        {item.degree}
                                    </p>
                                </div>
                                <div className="flex flex-col items-start gap-3 md:items-end">
                                    <span className="flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {item.period}
                                    </span>
                                    {item.gpa && (
                                        <div className="flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            GPA: {item.gpa}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Courses section with categories */}
                            <div className="mt-8">
                                <h4 className="mb-4 flex items-center text-lg font-semibold text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    Coursework
                                </h4>
                                
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <h5 className="mb-2 flex items-center font-medium text-violet-200">
                                            <span className="mr-2 h-2 w-2 rounded-full bg-violet-300"></span>
                                            Programming
                                        </h5>
                                        <ul className="space-y-1 text-sm text-slate-300">
                                            {groupedCourses.programming.map((course, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="mr-2 text-violet-300">•</span>
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <h5 className="mb-2 flex items-center font-medium text-blue-200">
                                            <span className="mr-2 h-2 w-2 rounded-full bg-blue-300"></span>
                                            Software Design
                                        </h5>
                                        <ul className="space-y-1 text-sm text-slate-300">
                                            {groupedCourses.design.map((course, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="mr-2 text-blue-300">•</span>
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <h5 className="mb-2 flex items-center font-medium text-emerald-200">
                                            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-300"></span>
                                            Systems & Cloud
                                        </h5>
                                        <ul className="space-y-1 text-sm text-slate-300">
                                            {groupedCourses.systems.map((course, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="mr-2 text-emerald-300">•</span>
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <h5 className="mb-2 flex items-center font-medium text-amber-200">
                                            <span className="mr-2 h-2 w-2 rounded-full bg-amber-300"></span>
                                            Product & Management
                                        </h5>
                                        <ul className="space-y-1 text-sm text-slate-300">
                                            {groupedCourses.product.map((course, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="mr-2 text-amber-300">•</span>
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <h5 className="mb-2 flex items-center font-medium text-fuchsia-200">
                                            <span className="mr-2 h-2 w-2 rounded-full bg-fuchsia-300"></span>
                                            Algorithms & AI
                                        </h5>
                                        <ul className="space-y-1 text-sm text-slate-300">
                                            {groupedCourses.intelligence.map((course, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="mr-2 text-fuchsia-300">•</span>
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <h5 className="mb-2 flex items-center font-medium text-cyan-200">
                                            <span className="mr-2 h-2 w-2 rounded-full bg-cyan-300"></span>
                                            Mobile, Research & Innovation
                                        </h5>
                                        <ul className="space-y-1 text-sm text-slate-300">
                                            {groupedCourses.mobile.map((course, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="mr-2 text-cyan-300">•</span>
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>
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

export default Education;
