import React from 'react';

interface EducationItem {
    period: string;
    institution: string;
    degree: string;
    description: string;
    gpa?: string;
    coursesLink?: string;
}

const educationData: EducationItem[] = [
    {
        period: "2023 - 2026",
        institution: "Asia Pacific University (APU)",
        degree: "Bachelor of Science (Hons) In Software Engineering",
        description: "I gained comprehensive knowledge in software development through mastering fundamental programming concepts, database management, and web development technologies. My studies covered essential areas including software architecture, system analysis, design patterns, software testing, and cloud computing, complemented by hands-on experience in enterprise systems and user experience design. Through various practical projects, I developed strong capabilities in implementing modern development methodologies and creating efficient software solutions.",
        gpa: "3.25"
    },
];

const Education = () => {
    return (
        <section className="py-8 select-none">
            <div className="max-w-2xl mx-auto p-6">
                <h2 className="text-2xl font-bold text-foreground mb-3">Education</h2>

                <div className="space-y-8">
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-800 rounded-lg p-6"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground">
                                        {item.institution}
                                    </h3>
                                    <p className="text-gray-400 mt-1">
                                        {item.degree}
                                    </p>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <span className="text-sm text-gray-400">
                                        {item.period}
                                    </span>
                                    {item.gpa && (
                                        <p className="text-sm text-emerald-500 mt-1">
                                            GPA: {item.gpa}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-500 mt-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
