import React, { memo, useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

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
        <motion.div
            className="flex flex-col items-center justify-center p-4 rounded-xl shadow-lg relative overflow-hidden group"
            style={{ 
                background: bgColor.startsWith('#') ? 
                    `linear-gradient(135deg, ${bgColor}dd, ${bgColor})` : 
                    'linear-gradient(135deg, #2d3748, #1a202c)' 
            }}
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 rounded-full p-3 mb-3 backdrop-blur-sm">
                    <Image
                        src={icon}
                        alt={`${name} icon`}
                        className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                        width={40}
                        height={40}
                        draggable={false}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <span className={`${textSize} font-bold ${textColor} text-center`}>{name}</span>
                </div>
            </div>
        </motion.div>
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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section className="w-full py-16 select-none relative">
            {/* Decorative background elements that span full width */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
            
            {/* Content container with max-width for readability */}
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block mb-3">
                    Technical Skills
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            </motion.div>
            
            {/* Filters */}
            <motion.div 
                className="flex flex-wrap justify-center gap-3 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {filters.map((filter, index) => (
                    <motion.button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`
                            px-5 py-2 flex items-center justify-center text-sm rounded-full transition-all duration-300 font-medium
                            ${activeFilter === filter 
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-700/20' 
                                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white backdrop-blur-sm border border-gray-700/50'}
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                        {filter}
                    </motion.button>
                ))}
            </motion.div>
            
            <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-between justify-items-stretch"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {filteredSkills.map((skill) => (
                    <motion.div key={skill.name} variants={itemVariants}>
                        <SkillCard
                            name={skill.name}
                            icon={skill.icon}
                            bgColor={skill.bgColor}
                            textColor={skill.textColor}
                            textSize={skill.textSize || "text-sm"}
                        />
                    </motion.div>
                ))}
            </motion.div>
            </div>
        </section>
    );
};

export default Skills;