import React from 'react';
import dynamic from 'next/dynamic';
import Profile from '../sections/Profile';

const AboutMe = dynamic(() => import('@/sections/AboutMe'), { ssr: true });
const Education = dynamic(() => import('@/sections/Education'), { ssr: true });
const Skills = dynamic(() => import('@/sections/Skills'), { ssr: true });
const Projects = dynamic(() => import('@/sections/Projects'), { ssr: true });

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden text-slate-100">
        <Profile/>
        <AboutMe/>
        <Education/>
        <Skills/>
        <Projects/>
    </div>
  );
};

export default App;