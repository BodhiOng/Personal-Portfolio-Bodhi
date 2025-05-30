import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { useDeviceDetect } from '../utils/deviceDetect';

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

// Function to format courses into a more readable format
const formatCourses = (description: string) => {
    if (description.includes('Courses taken:')) {
        const intro = description.split('Courses taken:')[0];
        const coursesText = description.split('Courses taken:')[1];
        const courses = coursesText.split(',').map(course => course.trim());
        
        return (
            <>
                {intro && <p className="text-gray-300 mb-3">{intro}</p>}
                <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Courses taken:</h4>
                    <div className="flex flex-wrap gap-2">
                        {courses.map((course, idx) => (
                            <span key={idx} className="inline-block px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">
                                {course}
                            </span>
                        ))}
                    </div>
                </div>
            </>
        );
    }
    return <p className="text-gray-300">{description}</p>;
};

// Mobile version of Education component
const MobileEducation: React.FC = () => {
    return (
        <motion.div 
            className="p-5 backdrop-blur-sm rounded-xl shadow-xl w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <motion.h2 
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <FaGraduationCap className="text-blue-400 text-sm" />
                Education
            </motion.h2>
            
            <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {educationData.map((item, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-500/30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex flex-col justify-between mb-2">
                            <h3 className="text-lg font-bold text-blue-400">{item.degree}</h3>
                            <div className="flex items-center mt-1">
                                <span className="text-xs bg-blue-900/30 text-blue-300 py-1 px-2 rounded-full">
                                    {item.period}
                                </span>
                                {item.gpa && (
                                    <div className="flex items-center ml-2 px-2 py-1 rounded-full bg-emerald-900/30 text-emerald-300 text-xs border border-emerald-500/30">
                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        GPA: {item.gpa}
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm font-medium mb-1">{item.institution}</p>
                        
                        <div className="text-gray-400 text-xs mt-2">
                            {formatCourses(item.description)}
                        </div>
                        
                        {item.coursesLink && (
                            <motion.a 
                                href={item.coursesLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center mt-3 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                                whileTap={{ scale: 0.95 }}
                            >
                                View detailed curriculum
                                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.a>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

// Desktop version of Education component
const DesktopEducation: React.FC = () => {
    return (
        <motion.div 
            className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <motion.h2 
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <FaGraduationCap className="text-blue-400" />
                Education
            </motion.h2>
            
            <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {educationData.map((item, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-500/30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-blue-400">{item.degree}</h3>
                            <div className="flex items-center mt-1 md:mt-0">
                                <span className="text-sm bg-blue-900/30 text-blue-300 py-1 px-3 rounded-full">
                                    {item.period}
                                </span>
                                {item.gpa && (
                                    <div className="flex items-center ml-2 px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-300 text-sm border border-emerald-500/30">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        GPA: {item.gpa}
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <p className="text-gray-300 font-medium mb-2">{item.institution}</p>
                        
                        <div className="text-gray-400 text-sm mt-3">
                            {formatCourses(item.description)}
                        </div>
                        
                        {item.coursesLink && (
                            <motion.a 
                                href={item.coursesLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View detailed curriculum
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.a>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

// Main Education component that conditionally renders mobile or desktop version
const Education: React.FC = () => {
    const { isMobile } = useDeviceDetect();
    
    return (
        <div className="max-w-4xl mx-auto w-full">
            {isMobile ? <MobileEducation /> : <DesktopEducation />}
        </div>
    );
};

export default Education;
