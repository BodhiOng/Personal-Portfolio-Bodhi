import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { useDeviceDetect } from '../utils/deviceDetect';
import Image from 'next/image';

interface SkillCardProps {
    name: string;
    iconPath: string;
    bgColor?: string;
    textColor?: string;
    textSize?: string;
}

// Desktop version of the skill card
const DesktopSkillCard = ({ name, iconPath, bgColor = "bg-white", textColor = "text-white", textSize = "text-sm"}: SkillCardProps) => {
    return (
        <motion.div
            className={`flex items-center justify-center p-4 rounded-xl ${textColor} shadow-lg backdrop-blur-sm border border-gray-700/30 w-full`}
            style={{ 
                backgroundColor: `${bgColor.startsWith('#') ? bgColor : ''}80`, // Adding 80 for 50% opacity
                backdropFilter: 'blur(8px)'
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="flex items-center justify-center">
                <div className="w-10 h-10 flex items-center justify-center relative mr-3">
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-sm"></div>
                    <Image src={iconPath} alt={name} width={28} height={28} className="object-contain" />
                </div>
                <span className={`${textSize} font-semibold ${textColor} tracking-wide`}>{name}</span>
            </div>
        </motion.div>
    );
};

// Mobile version of the skill card
const MobileSkillCard = ({ name, iconPath, bgColor = "bg-white", textColor = "text-white", textSize = "text-sm"}: SkillCardProps) => {
    return (
        <motion.div
            className={`flex flex-col items-center justify-center p-3 rounded-xl ${textColor} shadow-lg backdrop-blur-sm border border-gray-700/30`}
            style={{ 
                backgroundColor: `${bgColor.startsWith('#') ? bgColor : ''}80`, // Adding 80 for 50% opacity
                backdropFilter: 'blur(8px)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="w-8 h-8 flex items-center justify-center relative mb-2">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-sm"></div>
                <Image src={iconPath} alt={name} width={24} height={24} />
            </div>
            <span className={`${textSize} font-bold ${textColor} tracking-wide text-center`}>{name}</span>
        </motion.div>
    );
};

const skills = [
    { name: "JavaScript", bgColor: "#C6A700", textColor: "text-black", category: "Languages", textSize: "text-sm", iconPath: "/javascript.png" },
    { name: "TypeScript", bgColor: "#1A4B8C", category: "Languages", textColor: "text-white", textSize: "text-sm", iconPath: "/typescript.png" },
    { name: "Python", bgColor: "#1E4B6C", category: "Languages", textColor: "text-white", textSize: "text-sm", iconPath: "/python.png" },
    { name: "C#", bgColor: "#3C1D8F", category: "Languages", textColor: "text-white", textSize: "text-sm", iconPath: "/csharp.png" },
    { name: "Java", bgColor: "#1A365D", category: "Languages", textColor: "text-white", textSize: "text-sm", iconPath: "/java.png" },
    { name: "R", bgColor: "#1A4B8C", category: "Languages", textColor: "text-white", textSize: "text-sm", iconPath: "/r.png" },
    { name: "C++", bgColor: "#00599C", category: "Languages", textColor: "text-white", textSize: "text-sm", iconPath: "/c++.png" },
    { name: "Dart", bgColor: "#008080", category: "Languages", textColor: "text-white", textSize: "text-sm", iconPath: "/dart.png" },
    { name: "Express.js", bgColor: "#333333", category: "Frameworks", textColor: "text-white", textSize: "text-sm", iconPath: "/expressjs.png" },
    { name: "Next.js", bgColor: "#696969", category: "Frameworks", textColor: "text-white", textSize: "text-sm", iconPath: "/nextjs.png" },
    { name: "React.js", bgColor: "#333333", category: "Frameworks", textColor: "text-white", textSize: "text-sm", iconPath: "/reactjs.png" },
    { name: "Tailwind CSS", bgColor: "#1E3A8A", category: "Frameworks", textColor: "text-white", textSize: "text-sm", iconPath: "/tailwindcss.png" },
    { name: "Flutter", bgColor: "#1565C0", category: "Frameworks", textColor: "text-white", textSize: "text-sm", iconPath: "/flutter.png" },
    { name: "PostgreSQL", bgColor: "#336791", category: "DBMS", textColor: "text-white", textSize: "text-sm", iconPath: "/postgresql.png" },
    { name: "MySQL", bgColor: "#003B5C", category: "DBMS", textColor: "text-white", textSize: "text-sm", iconPath: "/mysql.png" },
    { name: "MongoDB", bgColor: "#13AA52", category: "DBMS", textColor: "text-white", textSize: "text-sm", iconPath: "/mongodb.png" },
    { name: "Microsoft SQL Server", bgColor: "#CC2927", category: "DBMS", textColor: "text-white", textSize: "text-xs", iconPath: "/mssql.png" },
    { name: "Firebase", bgColor: "#F57C00", category: "DBMS", textColor: "text-white", textSize: "text-sm", iconPath: "/firebase.png" },
    { name: "Git", bgColor: "#F05032", category: "Tools", textColor: "text-white", textSize: "text-sm", iconPath: "/git.png" },
    { name: "GitHub", bgColor: "#333333", category: "Tools", textColor: "text-white", textSize: "text-sm", iconPath: "/github.png" },
    { name: "Postman API", bgColor: "#FF6C37", category: "Tools", textColor: "text-white", textSize: "text-sm", iconPath: "/postmanapi.png" },
    { name: "Linux", bgColor: "#333333", category: "Tools", textColor: "text-white", textSize: "text-sm", iconPath: "/linux.png" },
];

const skillCategories = [
    {
        name: "Languages",
        skills: skills.filter(skill => skill.category === "Languages")
    },
    {
        name: "Frameworks",
        skills: skills.filter(skill => skill.category === "Frameworks")
    },
    {
        name: "DBMS",
        skills: skills.filter(skill => skill.category === "DBMS")
    },
    {
        name: "Tools",
        skills: skills.filter(skill => skill.category === "Tools")
    },
];

// Mobile version of Skills component
const MobileSkills: React.FC = () => {
    const [activeFilter, setActiveFilter] = React.useState("All");
    const filters = ["All", "Languages", "Frameworks", "DBMS", "Tools"];
    
    // Filter skills based on selected category
    const filteredSkills = React.useMemo(() => {
        if (activeFilter === "All") {
            return skills;
        }
        return skills.filter(skill => skill.category === activeFilter);
    }, [activeFilter]);
    
    return (
        <motion.div 
            className="p-4 backdrop-blur-sm rounded-xl shadow-lg w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <motion.h2 
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <FaCode className="text-blue-400" />
                Technical Skills
            </motion.h2>
            
            {/* Filters - Horizontal scrollable on mobile */}
            <div className="flex overflow-x-auto pb-2 mb-4 gap-2 bg-gray-900/30 p-2 rounded-lg border border-gray-700/30">
                {filters.map((filter) => (
                    <motion.button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`
                            px-3 py-1.5 flex-shrink-0 flex items-center justify-center text-xs rounded-lg transition-all duration-300
                            ${activeFilter === filter 
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                                : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700 hover:text-white'}
                        `}
                        whileTap={{ scale: 0.95 }}
                    >
                        {filter}
                    </motion.button>
                ))}
            </div>
            
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    className="grid grid-cols-2 gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        duration: 0.4
                    }}
                >
                    {filteredSkills.map((skill, skillIndex) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                                opacity: 1, 
                                scale: 1,
                                transition: {
                                    delay: 0.04 * skillIndex,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }
                            }}
                        >
                            <MobileSkillCard
                                name={skill.name}
                                iconPath={skill.iconPath}
                                bgColor={skill.bgColor}
                                textColor={skill.textColor}
                                textSize={skill.textSize}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

// Desktop version of Skills component
const DesktopSkills: React.FC = () => {
    const [activeFilter, setActiveFilter] = React.useState("All");
    const filters = ["All", "Languages", "Frameworks", "DBMS", "Tools"];
    
    // Filter skills based on selected category
    const filteredSkills = React.useMemo(() => {
        if (activeFilter === "All") {
            return skills;
        }
        return skills.filter(skill => skill.category === activeFilter);
    }, [activeFilter]);
    
    return (
        <motion.div 
            className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <motion.h2 
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <FaCode className="text-blue-400" />
                Technical Skills
            </motion.h2>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 bg-gray-900/30 p-3 rounded-xl border border-gray-700/30">
                {filters.map((filter) => (
                    <motion.button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`
                            px-4 py-2 flex items-center justify-center text-sm rounded-lg transition-all duration-300
                            ${activeFilter === filter 
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                                : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700 hover:text-white'}
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {filter}
                    </motion.button>
                ))}
            </div>
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full"
            >
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeFilter}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            duration: 0.5
                        }}
                    >
                        {filteredSkills.map((skill, skillIndex) => (
                            <motion.div
                                key={skill.name}
                                className="flex justify-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    transition: {
                                        delay: 0.05 * skillIndex,
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    }
                                }}
                            >
                                <DesktopSkillCard
                                    key={skillIndex}
                                    name={skill.name}
                                    iconPath={skill.iconPath}
                                    bgColor={skill.bgColor}
                                    textColor={skill.textColor}
                                    textSize={skill.textSize}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

// Main Skills component that conditionally renders mobile or desktop version
const Skills: React.FC = () => {
    const { isMobile } = useDeviceDetect();
    
    return (
        <div className="max-w-4xl mx-auto w-full">
            {isMobile ? <MobileSkills /> : <DesktopSkills />}
        </div>
    );
};

export default Skills;