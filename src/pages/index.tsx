import React from 'react';
import ProfileCard from '../sections/Profile';
import bodhipic from '../../public/bodhi_pic.jpeg';
import AboutMe from '@/sections/AboutMe';


const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
      <div className="container mx-auto p-4">
        <ProfileCard
          name="Bodhidharma Ong"
          role="Fullstack Developer"
          profilePicture={bodhipic}
          linkedinUrl="https://www.linkedin.com/in/bodhidharma-ong-483839150/"
          githubUrl="https://github.com/BodhiOng"
          location="Kuala Lumpur, Malaysia"
        />
        <AboutMe/>
      </div>
    </div>
  );
};

export default App;