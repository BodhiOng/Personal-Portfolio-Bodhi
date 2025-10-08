import React, { memo, useState } from 'react';

// ==============================
// Types
// ==============================
interface SkillCardProps {
    name: string;
    icon: string;
    bgColor?: string;
    textColor?: string;
    textSize?: string;
    category: string;
}

// ==============================
// Skill Icons
// ==============================
// Define skill icons directly with their paths
const skillIcons: { [key: string]: string } = {
    "JavaScript": "/javascript.png",
    "TypeScript": "/typescript.png",
    "Python": "/python.png",
    "C#": "/csharp.png",
    "Java": "/java.png",
    "R": "/r.png",
    "C++": "/c++.png",
    "Dart": "/dart.png",
    "Express.js": "/expressjs.png",
    "Next.js": "/nextjs.png",
    "React.js": "/reactjs.png",
    "Bootstrap": "/bootstrap.png",
    "Tailwind CSS": "/tailwindcss.png",
    "Flutter": "/flutter.png",
    "PostgreSQL": "/postgresql.png",
    "MySQL": "/mysql.png",
    "MongoDB": "/mongodb.png",
    "Git": "/git.png",
    "Postman API": "/postmanapi.png",
    "Linux": "/linux.png",
    "GitHub": "/github.png",
    "Microsoft SQL Server": "/mssql.png",
    "Firebase": "/firebase.png"
};

// ==============================
// Skill Card Component
// ==============================
const SkillCard = memo(({
    name,
    icon,
    bgColor = "bg-white",
    textColor = "text-white",
    textSize = "text-sm",
    category
}: SkillCardProps) => {

    return (
        <div
            className="flex flex-col items-center justify-center p-4 rounded-xl shadow-lg relative overflow-hidden group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            style={{
                background: bgColor.startsWith('#')
                    ? `linear-gradient(135deg, ${bgColor}dd, ${bgColor})`
                    : 'linear-gradient(135deg, #2d3748, #1a202c)'
            }}
        >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

            {/* No category indicator */}

            <div className="relative z-10 flex flex-col items-center">
                {/* Skill Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 rounded-full p-3 mb-3 border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                    <img
                        src={icon}
                        alt={`${name} icon`}
                        className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        draggable={false}
                    />
                </div>

                {/* Skill Name */}
                <div className="flex flex-col items-center">
                    <span className={`${textSize} font-bold ${textColor} text-center`}>{name}</span>
                </div>
            </div>
        </div>
    );
});

// ==============================
// Skills Data
// ==============================
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
    textColor: skill.textColor || "text-white"
}));

// ==============================
// Category Icons
// ==============================
const getCategoryIcon = (category: string) => {
    switch (category) {
        case "All":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            );
        case "Languages":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            );
        case "Frameworks":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            );
        case "DBMS":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            );
        case "Tools":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            );
        default:
            return null;
    }
};

// ==============================
// Main Component
// ==============================
const Skills = memo(() => {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Languages", "Frameworks", "DBMS", "Tools"];

    const filteredSkills = activeFilter === "All"
        ? skills
        : skills.filter(skill => skill.category === activeFilter);

    return (
        <section className="w-full py-16 select-none relative">
            {/* Content container with max-width for readability */}
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-12">
                    <div className="flex items-center justify-center mb-3">
                        <div className="p-2 bg-blue-900/30 rounded-lg mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block">
                            Technical Skills
                        </h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-2"></div>
                        <p className="text-gray-400 italic">Technologies I work with</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter;
                        return (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`
                  px-5 py-2 flex items-center justify-center text-sm rounded-full 
                  transition-all duration-300 font-medium
                  ${isActive
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-700/20'
                                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-700/50'}
                `}
                            >
                                {getCategoryIcon(filter)}
                                {filter}
                                {isActive && (
                                    <span className="ml-1.5 bg-white/20 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {filter === "All" ? skills.length : skills.filter(s => s.category === filter).length}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* No legend needed */}

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-between justify-items-stretch">
                    {filteredSkills.map((skill) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                            bgColor={skill.bgColor}
                            textColor={skill.textColor}
                            textSize={skill.textSize || "text-sm"}
                            category={skill.category}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Skills;