import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    // Animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="w-full py-16 select-none relative">            
            {/* Content container with max-width for readability */}
            <div className="max-w-5xl mx-auto px-6">
                {/* Background decorative elements */}
                
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 pb-3 inline-block">
                    About Me
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8"></div>
            </motion.div>

                <motion.div 
                    className="space-y-6 text-gray-300 leading-relaxed text-left relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-xl"
                        variants={itemVariants}
                    >
                        <p className="font-bold text-lg text-blue-300">
                            As a dedicated Software Engineering student at Asia Pacific University (APU), I am pursuing a career in full-stack development with a strong interest in back-end work.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700/50"
                        variants={itemVariants}
                    >
                        <p className="text-base">
                            My academic journey has equipped me with a solid foundation across both server-side and client-side development, enabling me to approach projects holistically. I enjoy taking on complex challenges and am committed to continuously expanding my skills across the full stack.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700/50"
                        variants={itemVariants}
                    >
                        <p className="text-base">
                            My hands-on experience with personal projects has honed my ability to work independently and deliver results effectively. Staying current with industry trends is essential to me, and I strive to implement best practices across my work.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg shadow-lg border border-blue-700/30"
                        variants={itemVariants}
                    >
                        <p className="text-base font-medium">
                            I'm excited to connect with professionals, mentors, and collaborators who are driven by a shared passion for innovative, practical solutions. Let's explore how we can bring creative ideas to life together!
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
