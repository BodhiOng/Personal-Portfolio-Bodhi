import React from 'react';
import Image, { StaticImageData } from 'next/image';
import bodhipic from '../../public/bodhi_pic.jpeg';
import { motion } from 'framer-motion';

interface ProfileProps {
    name: string;
    role: string;
    profilePicture: StaticImageData;
    linkedinUrl: string;
    githubUrl: string;
    location: string;
}

const profileData: ProfileProps[] = [
    {
        name: "Bodhidharma Ong",
        role: "Fullstack Developer",
        profilePicture: bodhipic,
        linkedinUrl: "https://www.linkedin.com/in/bodhidharma-ong-483839150/",
        githubUrl: "https://github.com/BodhiOng",
        location: "Kuala Lumpur, Malaysia",
    }
];

const Profile: React.FC = () => { 
    return (
        <div className="w-full select-none relative py-12">
            {/* Decorative background elements that span full width */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            
            {/* Content container with max-width for readability */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-center">
                {profileData.map((item, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col py-8 sm:flex-row items-center sm:items-start gap-6 sm:gap-10 w-full"
                    >
                        <motion.div 
                            className="flex-shrink-0 w-36 h-36 sm:w-48 sm:h-48 relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-md opacity-70 -z-10 transform scale-110"></div>
                            <Image
                                src={item.profilePicture}
                                alt={`${item.name}'s profile`}
                                width={200}
                                height={200}
                                draggable={false}
                                className="rounded-full object-cover ring-2 ring-white/20 shadow-xl w-full h-full"
                            />
                        </motion.div>
                        <div className="flex-grow text-center sm:text-left flex flex-col justify-center z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2 tracking-wide">
                                    {item.name}
                                </h2>
                                <p className="text-gray-300 text-lg mb-3 font-medium">
                                    {item.role}
                                </p>
                                <div className="flex items-center justify-center sm:justify-start text-gray-300 text-sm mb-6 backdrop-blur-sm bg-white/5 rounded-full px-4 py-2 w-fit">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0C6.12 0 3 3.12 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.88-3.12-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 4.5 10 4.5s2.5 1.12 2.5 2.5S11.38 9.5 10 9.5z" />
                                    </svg>
                                    {item.location}
                                </div>
                            </motion.div>
                            <motion.div 
                                className="flex gap-4 justify-center sm:justify-start"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <a
                                    href={item.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href={item.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 shadow-lg hover:shadow-gray-700/20 transition-all duration-300 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
