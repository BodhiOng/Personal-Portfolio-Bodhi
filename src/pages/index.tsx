import React from 'react';
import ProfileCard from '../sections/Profile';
import AboutMe from '@/sections/AboutMe';
import Education from '@/sections/Education';
import Skills from '@/sections/Skills'


const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
      <div className="container mx-auto p-4">
        <ProfileCard/>
        <AboutMe/>
        <Education/>
        <Skills/>
      </div>
    </div>
  );
};

export default App;