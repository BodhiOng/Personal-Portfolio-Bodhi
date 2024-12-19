import React from 'react';

const AboutMe = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">

            <h1 className="text-2xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-3">
                About Me
            </h1>

            <div className="max-w-max space-y-6 text-gray-300 leading-relaxed text-left">
                <p className="font-bold ">
                    As a dedicated Software Engineering student at Asia Pacific University (APU), I am pursuing a career in full-stack development with a strong interest in back-end work.
                </p>

                <p className="text-base">
                    My academic journey has equipped me with a solid foundation across both server-side and client-side development, enabling me to approach projects holistically. I enjoy taking on complex challenges and am committed to continuously expanding my skills across the full stack.
                </p>

                <p className="text-base">
                    My hands-on experience with personal projects has honed my ability to work independently and deliver results effectively. Staying current with industry trends is essential to me, and I strive to implement best practices across my work.
                </p>

                <p className="text-base font-medium">
                    I'm excited to connect with professionals, mentors, and collaborators who are driven by a shared passion for innovative, practical solutions. Let's explore how we can bring creative ideas to life together!
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
