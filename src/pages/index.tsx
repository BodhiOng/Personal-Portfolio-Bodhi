import React from 'react';
import Profile from '../sections/Profile';
import AboutMe from '@/sections/AboutMe';
import Education from '@/sections/Education';
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  // Animation variants for page sections
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <motion.div 
      className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`
      }}
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900 to-gray-800 opacity-30"></div>
        
        {/* Fine grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] z-0"></div>
        
        {/* Subtle light streaks */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-b from-blue-500/5 to-transparent rotate-12 transform-gpu"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-t from-purple-500/5 to-transparent -rotate-12 transform-gpu"></div>
        
        {/* Subtle noise texture (simulated with tiny dots) */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/[0.03] rounded-full"
            style={{
              width: '1px',
              height: '1px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          ></div>
        ))}
      </div>
      {/* Hero section with profile */}
      <div className="w-full py-3">
        <Profile/>
      </div>
      
      {/* Content sections with consistent spacing */}
      <div className="w-full py-3">
        <AboutMe/>
      </div>
      
      <div className="w-full py-3">
        <Education/>
      </div>
      
      <div className="w-full py-3">
        <Skills/>
      </div>
      
      <div className="w-full py-3 mb-6">
        <Projects/>
      </div>
    </motion.div>
  );
};

export default App;