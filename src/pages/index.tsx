import React from 'react';
import Profile from '../sections/Profile';
import AboutMe from '@/sections/AboutMe';
import Education from '@/sections/Education';
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects';

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
      <div className="container mx-auto p-4">
        <Profile/>
        <AboutMe/>
        <Education/>
        <Skills/>
        <Projects/>
      </div>
    </div>
  );
};

export default App;