import React from 'react';
import { motion } from 'framer-motion';

interface EducationItem {
    period: string;
    institution: string;
    degree: string;
    description: string;
    gpa?: string;
    coursesLink?: string;
}

const educationData: EducationItem[] = [
    {
        period: "2023 - 2026",
        institution: "Asia Pacific University (APU)",
        degree: "Bachelor of Science (Hons) In Software Engineering",
        description: "Courses taken: Programming with Python, Object Oriented Development with Java, Introduction To Object Oriented Programming, Mobile App Engineering, Introduction to Databases, Introduction to Networking, Data Structures, Software Architecture and Testing, Systems Analysis and Design, Operating Systems and Computer Architecture, Programming for Data Analysis, Requirements Engineering, Design Methods, Enterprise Systems, Digital Thinking and Innovation, Research Methods for Computing and Technology, Mathematical Concept For Computing, Computing Theory, Introduction to Artificial Intelligence",
        gpa: "3.25"
    },
];

const Education = () => {
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
        <section className="w-full py-16 select-none relative">            
            {/* Content container with max-width for readability */}
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                >
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block mb-3">Education</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </motion.div>

                <motion.div 
                    className="space-y-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-8 shadow-xl hover:shadow-blue-900/10 transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Subtle glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-purple-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 relative z-10">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {item.institution}
                                    </h3>
                                    <p className="text-blue-300 font-medium">
                                        {item.degree}
                                    </p>
                                </div>
                                <div className="mt-3 md:mt-0 md:ml-4 flex flex-col items-start md:items-end">
                                    <span className="px-4 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium border border-blue-800/30">
                                        {item.period}
                                    </span>
                                    {item.gpa && (
                                        <p className="text-sm text-emerald-400 mt-3 font-semibold flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            GPA: {item.gpa}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/30">
                                    <p className="text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
