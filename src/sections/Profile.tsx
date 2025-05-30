import React from 'react';
import Image, { StaticImageData } from 'next/image';
import bodhipic from '../../public/bodhi_pic.jpeg';
import { motion } from 'framer-motion';
import { useDeviceDetect } from '../utils/deviceDetect';

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
        role: "Fullstack Developer / Mobile Developer",
        profilePicture: bodhipic,
        linkedinUrl: "https://www.linkedin.com/in/bodhidharma-ong-483839150/",
        githubUrl: "https://github.com/BodhiOng",
        location: "Kuala Lumpur, Malaysia",
    }
];

// Mobile version of the Profile component
const MobileProfile: React.FC<{ data: ProfileProps }> = ({ data }) => {
    return (
        <motion.div 
            className="flex flex-col items-center w-full rounded-xl p-5 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div 
                className="w-32 h-32 relative mb-4"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 -z-10"></div>
                <Image
                    src={data.profilePicture}
                    alt={`${data.name}'s profile`}
                    width={128}
                    height={128}
                    priority
                    draggable={false}
                    className="rounded-full object-cover ring-2 ring-gray-700/50 shadow-lg w-full h-full z-10"
                />
            </motion.div>
            
            <div className="text-center flex flex-col items-center">
                <motion.h2 
                    className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-1 tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {data.name}
                </motion.h2>
                
                <motion.p 
                    className="text-gray-300 text-sm font-medium mb-2 tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {data.role}
                </motion.p>
                
                <motion.div 
                    className="flex items-center justify-center text-gray-300 text-xs mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <svg className="w-3 h-3 mr-1 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0C6.12 0 3 3.12 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.88-3.12-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 4.5 10 4.5s2.5 1.12 2.5 2.5S11.38 9.5 10 9.5z" />
                    </svg>
                    {data.location}
                </motion.div>
                
                <motion.div 
                    className="flex gap-3 justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <a
                        href={data.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 bg-gray-700/50 hover:bg-blue-600 rounded-full transition-all duration-300 group"
                        aria-label="LinkedIn Profile"
                    >
                        <svg
                            className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                    <a
                        href={data.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 bg-gray-700/50 hover:bg-gray-900 rounded-full transition-all duration-300 group"
                        aria-label="GitHub Profile"
                    >
                        <svg
                            className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

// Desktop version of the Profile component
const DesktopProfile: React.FC<{ data: ProfileProps }> = ({ data }) => {
    return (
        <motion.div 
            className="flex flex-row items-start gap-8 w-full bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div 
                className="flex-shrink-0 w-48 h-48 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 -z-10"></div>
                <Image
                    src={data.profilePicture}
                    alt={`${data.name}'s profile`}
                    width={192}
                    height={192}
                    priority
                    draggable={false}
                    className="rounded-full object-cover ring-4 ring-gray-700/50 shadow-lg w-full h-full z-10"
                />
            </motion.div>
            
            <div className="flex-grow text-left flex flex-col justify-center">
                <motion.h2 
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2 tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {data.name}
                </motion.h2>
                
                <motion.p 
                    className="text-gray-300 text-lg font-medium mb-3 tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {data.role}
                </motion.p>
                
                <motion.div 
                    className="flex items-center text-gray-300 text-sm mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0C6.12 0 3 3.12 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.88-3.12-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 4.5 10 4.5s2.5 1.12 2.5 2.5S11.38 9.5 10 9.5z" />
                    </svg>
                    {data.location}
                </motion.div>
                
                <motion.div 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <a
                        href={data.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-3 bg-gray-700/50 hover:bg-blue-600 rounded-full transition-all duration-300 group"
                        aria-label="LinkedIn Profile"
                    >
                        <svg
                            className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                    <a
                        href={data.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-3 bg-gray-700/50 hover:bg-gray-900 rounded-full transition-all duration-300 group"
                        aria-label="GitHub Profile"
                    >
                        <svg
                            className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

// Main Profile component that conditionally renders mobile or desktop version
const Profile: React.FC = () => { 
    const { isMobile } = useDeviceDetect();
    
    return (
        <div className="max-w-4xl mx-auto flex items-center justify-center select-none pt-4 w-full">
            {profileData.map((item, index) => (
                <div key={index} className="w-full">
                    {isMobile ? (
                        <MobileProfile data={item} />
                    ) : (
                        <DesktopProfile data={item} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Profile;
