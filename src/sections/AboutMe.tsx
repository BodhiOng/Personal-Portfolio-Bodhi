import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';
import { useDeviceDetect } from '../utils/deviceDetect';

// Mobile version of AboutMe component
const MobileAboutMe: React.FC = () => {
    return (
        <motion.div 
            className="p-5 select-none backdrop-blur-sm rounded-xl shadow-xl w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <motion.h2 
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3 flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <FaLightbulb className="text-yellow-400 text-sm" />
                About Me
            </motion.h2>
            
            <motion.div
                className="space-y-3 text-gray-300 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <p>
                    As a dedicated Software Engineering student at Asia Pacific University (APU), I am pursuing a career in full-stack development with a strong interest in back-end work.
                </p>
                <p>
                    My academic journey has equipped me with a solid foundation across both server-side and client-side development, enabling me to approach projects holistically. I enjoy taking on complex challenges and am committed to continuously expanding my skills across the full stack.
                </p>
                <p>
                    My hands-on experience with personal projects has honed my ability to work independently and deliver results effectively. Staying current with industry trends is essential to me, and I strive to implement best practices across my work.
                </p>
                <p className="text-xs font-medium bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-3 rounded-lg border-l-3 border-purple-500">
                    I'm excited to connect with professionals, mentors, and collaborators who are driven by a shared passion for innovative, practical solutions. Let's explore how we can bring creative ideas to life together!
                </p>
            </motion.div>
        </motion.div>
    );
};

// Desktop version of AboutMe component
const DesktopAboutMe: React.FC = () => {
    return (
        <motion.div 
            className="p-6 select-none bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <motion.h2 
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <FaLightbulb className="text-yellow-400" />
                About Me
            </motion.h2>
            
            <motion.div
                className="space-y-4 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <p>
                    As a dedicated Software Engineering student at Asia Pacific University (APU), I am pursuing a career in full-stack development with a strong interest in back-end work.
                </p>
                <p>
                    My academic journey has equipped me with a solid foundation across both server-side and client-side development, enabling me to approach projects holistically. I enjoy taking on complex challenges and am committed to continuously expanding my skills across the full stack.
                </p>
                <p>
                    My hands-on experience with personal projects has honed my ability to work independently and deliver results effectively. Staying current with industry trends is essential to me, and I strive to implement best practices across my work.
                </p>
                <p className="text-base font-medium bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-lg border-l-4 border-purple-500">
                    I'm excited to connect with professionals, mentors, and collaborators who are driven by a shared passion for innovative, practical solutions. Let's explore how we can bring creative ideas to life together!
                </p>
            </motion.div>
        </motion.div>
    );
};

// Main AboutMe component that conditionally renders mobile or desktop version
const AboutMe: React.FC = () => {
    const { isMobile } = useDeviceDetect();
    
    return (
        <div className="max-w-4xl mx-auto w-full">
            {isMobile ? <MobileAboutMe /> : <DesktopAboutMe />}
        </div>
    );
};

export default AboutMe;
