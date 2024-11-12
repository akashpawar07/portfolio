import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsCarousel = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Personal Portfolio",
            tag: "Full Stack Development",
            content: (
                <>
                    <span className="dark:text-gray-400 italic">
                        This portfolio showcases my expertise in the MERN stack, demonstrating my ability to design and develop a comprehensive web application. I'm excited to bring this skillset to a new role and continue growing as a developer.
                    </span>

                    <div className="mt-6">
                        <div className="relative">
                            <h2 className="font-semibold mb-3 text-xl flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Frontend
                            </h2>
                            <div className="pl-6 border-l-2 border-blue-500/20 dark:text-gray-400 space-y-2">
                                <p>• I used React to create a responsive, component-based UI, showcasing my understanding of modern frontend development.</p>
                                <p>• also used TailwindCss for designing the web page, its makes easy to desing our apges.</p>
                                <p>• Designed responsive navigation and interactions, allowing users to easily explore my portfolio on any device.</p>
                            </div>
                        </div>

                        <div className="relative mt-6">
                            <h2 className="font-semibold mb-3 text-xl flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Backend
                            </h2>
                            <div className="pl-6 border-l-2 border-green-500/20 dark:text-gray-400 space-y-2">
                                <p>• Designed a RESTful API using Node.js and Express.js, highlighting my knowledge of server-side development and API design.</p>
                                <p>• Utilized MongoDB as the database, demonstrating my understanding of NoSQL databases and data modeling.</p>
                            </div>
                        </div>

                        <div className="relative mt-6">
                            <h2 className="font-semibold mb-3 text-xl flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                Features and Functionality
                            </h2>
                            <div className="pl-6 border-l-2 border-purple-500/20 dark:text-gray-400 space-y-2">
                                <p>• Developed a user-friendly interface for showcasing projects, skills, and experiences.</p>
                                <p>• Included a about section, demonstrating my ability to integrate a CMS-like feature.</p>
                                <p>• Implemented a contact form, highlighting my understanding of frontend-backend interaction.</p>
                            </div>
                        </div>

                        <div className="relative mt-6">
                            <h2 className="font-semibold mb-3 text-xl flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                Challenges and Solutions
                            </h2>
                            <div className="pl-6 border-l-2 border-orange-500/20 dark:text-gray-400 space-y-2">
                                <p>• Overcame challenges in implementing MongoDB, demonstrating my problem-solving skills.</p>
                                <p>• Optimized application performance, ensuring fast loading times and a smooth user experience.</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        },
        {
            id: 2,
            title: "CAMPUS-CONNECT",
            tag: "Web Application",
            content: (
                <>
                    <span className="dark:text-gray-400 italic">
                        Campus-Connect: Revolutionizing Admission Processes with Paperless, Online Solutions
                    </span>

                    <div className="mt-6">
                        <div className="relative">
                            <h2 className="font-semibold mb-3 text-xl flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Project Overview
                            </h2>
                            <div className="pl-6 border-l-2 border-blue-500/20 dark:text-gray-400">
                                Developed a cutting-edge web application, <u>Campus-Connect</u>, to streamline admission processes,
                                reducing paper waste and enhancing efficiency. Built with HTML, CSS, JS, Node.js, Express.js,
                                and MongoDB, this platform empowers educational institutions to manage admissions online, effortlessly.
                            </div>
                        </div>

                        <div className="relative mt-6">
                            <h2 className="font-semibold mb-3 text-xl flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Key Achievements
                            </h2>
                            <div className="pl-6 border-l-2 border-green-500/20 dark:text-gray-400 space-y-2">
                                <p>• Designed and developed a user-friendly, scalable online admission system.</p>
                                <p>• Successfully implemented Node.js and Express.js to handle complex backend operations.</p>
                                <p>• Utilized MongoDB to create a flexible, high-performance database schema.</p>
                            </div>
                        </div>

                        <div className="relative mt-6">
                            <h2 className="font-semibold mb-3 text-xl flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                Impact and Benefits
                            </h2>
                            <div className="pl-6 border-l-2 border-purple-500/20 dark:text-gray-400 space-y-2">
                                <p>• Transformed admission processes, reducing paper waste and minimizing administrative overhead.</p>
                                <p>• Enhanced user experience with a streamlined, online application process.</p>
                                <p>• Demonstrated expertise in developing innovative, eco-friendly solutions.</p>
                            </div>
                        </div>

                        <div className="relative mt-6">
                            <h2 className="font-semibold mb-3 text-xl flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                Project URL
                            </h2>
                            <div className="pl-6 border-l-2 border-orange-500/20 flex flex-wrap">
                                <a
                                    href="https://sycet-collegeadmissionform-in.onrender.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 italic hover:text-blue-600 hover:underline"
                                >
                                    https://sycet-collegeadmissionform-in.onrender.com/
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )
        },
        {
            id: 3,
            title: "CALCMATE",
            tag: "Web Application",
            content: (
                <>
                    <span className="dark:text-gray-400 italic">
                        Basic Arithmetic at Your Fingertips: CalcMate Calculator
                    </span>

                    <div className="mt-6">
                        <div className="relative">
                            <h2 className="font-semibold mb-3 text-xl flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Project Overview
                            </h2>
                            <div className="pl-6 border-l-2 border-blue-500/20 dark:text-gray-400">
                                CalcMate represents my initial foray into frontend development, demonstrating my foundation in HTML, CSS, and JavaScript. Although a simple project, it showcases my ability to design and develop a functional application, laying the groundwork for more complex projects like Campus-Connect and my personal portfolio.
                            </div>
                        </div>

                        <div className="relative mt-6">
                            <h2 className="font-semibold mb-3 text-xl flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Features
                            </h2>
                            <div className="pl-6 border-l-2 border-green-500/20 dark:text-gray-400 space-y-2">
                                <p>•  Basic arithmetic operations (+, -, x, /, %)</p>
                                <p>•  Clear and intuitive interface </p>
                                <p>•  Responsive design for various screen sizes</p>
                                <p>•  Built using HTML, CSS, and JavaScript</p>
                            </div>
                        </div>

                        <div className="relative mt-6">
                            <h2 className="font-semibold mb-3 text-xl flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                Technical Highlights
                            </h2>
                            <div className="pl-6 border-l-2 border-purple-500/20 dark:text-gray-400 space-y-2">
                                <p>• Implemented HTML structure for calculator layout</p>
                                <p>• Styled with CSS for a visually appealing design</p>
                                <p>• Utilized JavaScript for calculator functionality and logic</p>
                            </div>
                        </div>

                        <div className="relative mt-6">
                            <h2 className="font-semibold mb-3 text-xl flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                Github Repository
                            </h2>
                            <div className="pl-6 border-l-2 border-orange-500/20 ">
                                <a
                                    href="https://github.com/akashpawar07/Calculators"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 italic hover:text-blue-600 hover:underline"
                                >
                                    https://github.com/akashpawar07/Calculators
                                </a>
                            </div>
                        </div>

                    </div>
                </>
            )
        },
    ];

    // Touch handlers
    const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
    const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);
    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;
        if (Math.abs(distance) > minSwipeDistance) {
            distance > 0 ? nextProject() : prevProject();
        }
        setTouchStart(null);
        setTouchEnd(null);
    };

    const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length);
    const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <div className="relative flex items-center justify-center min-h-screen py-10">
            {/* Navigation Buttons - Now outside the project container */}
            <button
                onClick={prevProject}
                className="absolute left-4 md:left-2 top-1/2 -translate-y-1/2 p-3 rounded-full 
                 bg-white/80 dark:bg-gray-800/80 shadow-lg hover:scale-110 
                 transition-all backdrop-blur-sm group z-10
                 border border-gray-200 dark:border-gray-700"
                aria-label="Previous project"
            >
                <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200 group-hover:text-blue-500" />
            </button>

            <div className="w-full md:max-w-5xl mx-auto px-4 py-2 flex justify-center ">
                <div className="relative w-[34%] md:w-[98%] h-[80vh] overflow-hidden rounded-xl shadow-2xl 
                       dark:bg-gray-800/50 backdrop-blur 
                      border border-gray-200 dark:border-gray-700">
                    {/* Projects Container */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentProject * 100}%)` }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {projects.map((project) => (
                            <div key={project.id} className="w-full flex-shrink-0">
                                <div className="w-full h-full p-8 overflow-y-auto">
                                    <div className="flex items-center gap-4 mb-6">
                                        <h2 className="font-bold text-3xl dark:text-white">
                                            {project.title}
                                        </h2>
                                        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                            {project.tag}
                                        </span>
                                    </div>
                                    {project.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button
                onClick={nextProject}
                className="absolute right-4 md:right-2 top-1/2 -translate-y-1/2 p-3 rounded-full 
                 bg-white/80 dark:bg-gray-800/80 shadow-lg hover:scale-110 
                 transition-all backdrop-blur-sm group z-10
                 border border-gray-200 dark:border-gray-700"
                aria-label="Next project"
            >
                <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200 group-hover:text-blue-500" />
            </button>

            {/* Slide Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {Array.from({ length: projects.length }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentProject
                            ? 'bg-blue-500 dark:bg-blue-400'
                            : 'bg-gray-300 dark:bg-gray-700'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsCarousel;