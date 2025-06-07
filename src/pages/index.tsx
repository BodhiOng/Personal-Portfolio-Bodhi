import React from 'react';
import Profile from '../sections/Profile';
import AboutMe from '@/sections/AboutMe';
import Education from '@/sections/Education';
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-900">
        <Profile/>
        <AboutMe/>
        <Education/>
        <Skills/>
        <Projects/>
    </div>
  );
};

export default App;