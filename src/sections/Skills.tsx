import Image from 'next/image';
import { StaticImageData } from 'next/image';

import javascriptpic from '../../public/javascript.png';
import typescriptpic from '../../public/typescript.png';
import pythonpic from '../../public/python.png';
import expresspic from '../../public/expressjs.png';
import nextjspic from '../../public/nextjs.png';
import reactpic from '../../public/reactjs.png';
import bootstrappic from '../../public/bootstrap.png';
import tailwindpic from '../../public/tailwindcss.png';
import postgresqlpic from '../../public/postgresql.png';
import mysqlpic from '../../public/mysql.png';
import mongodbpic from '../../public/mongodb.png';
import gitpic from '../../public/git.png';
import postmanapipic from '../../public/postmanapi.png';
import linuxpic from '../../public/linux.png';


interface SkillCardProps {
    name: string;
    icon: StaticImageData;
    bgColor?: string;
    textColor?: string;
}

const SkillCard = ({ name, icon, bgColor = "bg-white", textColor = "text-white"}: SkillCardProps) => {
    return (
        <div
            className={`flex items-center justify-center p-4 rounded-lg ${textColor} ${bgColor} shadow-sm-full`}
            style={{ backgroundColor: bgColor.startsWith('#') ? bgColor : '' }}
        >
            <div className="w-10 h-10 flex items-center justify-center">
                <Image
                    src={icon}
                    alt={`${name} icon`}
                    className="w-8 h-8 object-contain"
                    width={32}
                    height={32}
                />
            </div>
            <div className="hidden md:flex ml-4 flex flex-col items-center">
                <span className="font-bold">{name}</span>
            </div>
        </div>
    );
};

const skills = [
    {
        name: "JavaScript",
        icon: javascriptpic,
        bgColor: "#f7df1e",
        textColor: "text-black"
    },
    {
        name: "TypeScript",
        icon: typescriptpic,
        bgColor: "#3178c6",
    },
    {
        name: "Python",
        icon: pythonpic,
        bgColor: "#306998",
    },
    {
        name: "Express.js",
        icon: expresspic,
        bgColor: "#333333",
    },
    {
        name: "Next.js",
        icon: nextjspic,
        bgColor: "#696969",
    },
    {
        name: "React.js",
        icon: reactpic,
        bgColor: "#333333",
    },
    {
        name: "Bootstrap",
        icon: bootstrappic,
        bgColor: "#563D7C",
    },
    {
        name: "Tailwind CSS",
        icon: tailwindpic,
        bgColor: "#1E3A8A",
    },
    {
        name: "PostgreSQL",
        icon: postgresqlpic,
        bgColor: "#336791",
    },
    {
        name: "MySQL",
        icon: mysqlpic,
        bgColor: "#003B5C",
    },
    {
        name: "MongoDB",
        icon: mongodbpic,
        bgColor: "#3D8E2E",
    },
    {
        name: "Git",
        icon: gitpic,
        bgColor: "#8B0000",
    },
    {
        name: "Postman API",
        icon: postmanapipic,
        bgColor: "#E65100",
    },
    {
        name: "Linux",
        icon: linuxpic,
        bgColor: "#333333",
    },
];

const Skills = () => {
    return (
        <section className="max-w-2xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Technical Skills
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-2 gap-4 justify-between justify-items-stretch">
                {skills.map((skill, index) => (
                    <SkillCard
                        key={index}
                        name={skill.name}
                        icon={skill.icon}
                        bgColor={skill.bgColor}
                        textColor={skill.textColor}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;