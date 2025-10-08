import React from 'react';

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
            "Introduction to Artificial Intelligence"
        ],
        gpa: "3.25"
    },
];

const Education = React.memo(() => {
    // Group courses into categories for better organization
    const groupedCourses = {
        programming: ['Programming with Python', 'Object Oriented Development with Java', 'Introduction To Object Oriented Programming', 'Programming for Data Analysis'],
        engineering: ['Mobile App Engineering', 'Software Architecture and Testing', 'Requirements Engineering', 'Design Methods'],
        systems: ['Introduction to Databases', 'Introduction to Networking', 'Data Structures', 'Operating Systems and Computer Architecture', 'Enterprise Systems'],
        theory: ['Digital Thinking and Innovation', 'Research Methods for Computing and Technology', 'Mathematical Concept For Computing', 'Computing Theory', 'Introduction to Artificial Intelligence', 'Systems Analysis and Design']
    };

    return (
        <section className="w-full py-16 select-none relative">            
            {/* Content container with max-width for readability */}
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block mb-3">Education</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-2"></div>
                    <p className="text-gray-400 italic">Academic journey and coursework</p>
                </div>

                <div className="space-y-10">
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-6 md:p-8 shadow-xl hover:shadow-blue-900/20 transition-all duration-300 relative overflow-hidden group transform hover:scale-[1.01]"
                        >
                            {/* Header section with institution and period */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 relative z-10">
                                <div>
                                    <div className="flex items-center mb-2">
                                        <div className="p-2 bg-blue-900/30 rounded-lg mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">
                                            {item.institution}
                                        </h3>
                                    </div>
                                    <p className="text-blue-300 font-medium text-lg ml-11">
                                        {item.degree}
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-0 md:ml-4 flex flex-col items-start md:items-end">
                                    <span className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium border border-blue-800/30 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {item.period}
                                    </span>
                                    {item.gpa && (
                                        <div className="mt-3 px-4 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-semibold border border-emerald-800/30 flex items-center">
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
                                <h4 className="text-lg font-semibold text-blue-300 mb-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    Coursework
                                </h4>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Programming Courses */}
                                    <div className="bg-gray-800/50 rounded-lg border border-gray-700/30 p-4">
                                        <h5 className="font-medium text-purple-300 mb-2 flex items-center">
                                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                                            Programming
                                        </h5>
                                        <ul className="space-y-1 text-sm text-gray-300">
                                            {groupedCourses.programming.map((course, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-purple-400 mr-2">•</span>
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* Engineering Courses */}
                                    <div className="bg-gray-800/50 rounded-lg border border-gray-700/30 p-4">
                                        <h5 className="font-medium text-blue-300 mb-2 flex items-center">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                            Engineering
                                        </h5>
                                        <ul className="space-y-1 text-sm text-gray-300">
                                            {groupedCourses.engineering.map((course, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-blue-400 mr-2">•</span>
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* Systems Courses */}
                                    <div className="bg-gray-800/50 rounded-lg border border-gray-700/30 p-4">
                                        <h5 className="font-medium text-green-300 mb-2 flex items-center">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                            Systems & Infrastructure
                                        </h5>
                                        <ul className="space-y-1 text-sm text-gray-300">
                                            {groupedCourses.systems.map((course, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-green-400 mr-2">•</span>
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* Theory Courses */}
                                    <div className="bg-gray-800/50 rounded-lg border border-gray-700/30 p-4">
                                        <h5 className="font-medium text-yellow-300 mb-2 flex items-center">
                                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                            Theory & Methodology
                                        </h5>
                                        <ul className="space-y-1 text-sm text-gray-300">
                                            {groupedCourses.theory.map((course, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-yellow-400 mr-2">•</span>
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
