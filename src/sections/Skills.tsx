import React, { memo, useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

// Explicitly typed skillIcons object
const skillIcons: { [key: string]: StaticImageData } = {
    JavaScript: require('../../public/javascript.png'),
    TypeScript: require('../../public/typescript.png'),
    Python: require('../../public/python.png'),
    'C#': require('../../public/csharp.png'),
    Java: require('../../public/java.png'),
    R: require('../../public/r.png'),
    'C++': require('../../public/c++.png'),
    Dart: require('../../public/dart.png'),
    'Express.js': require('../../public/expressjs.png'),
    'Next.js': require('../../public/nextjs.png'),
    'React.js': require('../../public/reactjs.png'),
    Bootstrap: require('../../public/bootstrap.png'),
    'Tailwind CSS': require('../../public/tailwindcss.png'),
    Flutter: require('../../public/flutter.png'),
    PostgreSQL: require('../../public/postgresql.png'),
    MySQL: require('../../public/mysql.png'),
    MongoDB: require('../../public/mongodb.png'),
    Git: require('../../public/git.png'),
    'Postman API': require('../../public/postmanapi.png'),
    Linux: require('../../public/linux.png'),
    GitHub: require('../../public/github.png'),
    'Microsoft SQL Server': require('../../public/mssql.png'),
    Firebase: require('../../public/firebase.png'),
};

interface SkillCardProps {
    name: string;
    icon: StaticImageData;
    bgColor?: string;
    textColor?: string;
    textSize?: string;
}

const SkillCard = memo(({ name, icon, bgColor = "bg-white", textColor = "text-white", textSize = "text-sm"}: SkillCardProps) => {
    return (
        <div
            className={`flex items-center justify-center p-3 rounded-lg ${textColor} ${bgColor} shadow-sm-full`}
            style={{ backgroundColor: bgColor.startsWith('#') ? bgColor : '' }}
        >
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                <Image
                    src={icon}
                    alt={`${name} icon`}
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    width={32}
                    height={32}
                    draggable={false}
                />
            </div>
            <div className="hidden md:flex ml-3 flex-col items-center">
                <span className={`${textSize} font-semibold ${textColor}`}>{name}</span>
            </div>
        </div>
    );
});

const skills = [
    { name: "JavaScript", bgColor: "#C6A700", textColor: "text-black", category: "Languages" },
    { name: "TypeScript", bgColor: "#1A4B8C", category: "Languages" },
    { name: "Python", bgColor: "#1E4B6C", category: "Languages" },
    { name: "C#", bgColor: "#3C1D8F", category: "Languages" },
    { name: "Java", bgColor: "#1A365D", category: "Languages" },
    { name: "R", bgColor: "#1A4B8C", category: "Languages" },
    { name: "C++", bgColor: "#00599C", category: "Languages" },
    { name: "Dart", bgColor: "#008080", category: "Languages" },
    { name: "Express.js", bgColor: "#333333", category: "Frameworks" },
    { name: "Next.js", bgColor: "#696969", category: "Frameworks" },
    { name: "React.js", bgColor: "#333333", category: "Frameworks" },
    { name: "Tailwind CSS", bgColor: "#1E3A8A", category: "Frameworks" },
    { name: "Flutter", bgColor: "#1565C0", category: "Frameworks" },
    { name: "PostgreSQL", bgColor: "#336791", category: "DBMS" },
    { name: "MySQL", bgColor: "#003B5C", category: "DBMS" },
    { name: "Microsoft SQL Server", bgColor: "#1A365D", category: "DBMS", textSize: "text-xs" },
    { name: "MongoDB", bgColor: "#001E2B", category: "DBMS" },
    { name: "Git", bgColor: "#8B0000", category: "Tools" },
    { name: "GitHub", bgColor: "#181717", category: "Tools" },
    { name: "Postman API", bgColor: "#E65100", category: "Tools" },
    { name: "Linux", bgColor: "#333333", category: "Tools" },
    { name: "Firebase", bgColor: "#E64A19", category: "Tools" },
].map(skill => ({
    ...skill,
    icon: skillIcons[skill.name],
    textColor: skill.textColor || "#f5f5f5"
}));

const Skills = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    
    const filters = ["All", "Languages", "Frameworks", "DBMS", "Tools"];
    
    const filteredSkills = activeFilter === "All" 
        ? skills 
        : skills.filter(skill => skill.category === activeFilter);

    return (
        <section className="max-w-2xl mx-auto py-12 px-6 select-none">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Technical Skills
            </h2>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`
                            px-3 py-2 h-10 flex items-center justify-center text-sm rounded-lg transition-all duration-300
                            ${activeFilter === filter 
                                ? 'bg-gray-700 text-white' 
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'}
                        `}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            
            <div className="grid grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-3 justify-between justify-items-stretch">
                {filteredSkills.map((skill) => (
                    <SkillCard
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        bgColor={skill.bgColor}
                        textColor={skill.textColor}
                        textSize={skill.textSize}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;