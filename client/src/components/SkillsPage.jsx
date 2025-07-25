import React from 'react'
import { Link } from 'react-router-dom'
import plant from '../assets/plant.jpg'
import me from '../assets/me img.jpg'
import CSS from "../assets/css2.jpg"
import ExpressJs from "../assets/express.png"
import Html from "../assets/html.jpg"
import Java from "../assets/java.webp"
import Js from "../assets/js2.jpg"
import Nodejs from "../assets/nodejs2.jpg"
import MongoDB from "../assets/mongodb.jpeg"
import Sql from "../assets/sql.jpg"
import Oops from "../assets/oops.webp"
import github from '../assets/github.webp'
import comuni from '../assets/camun.webp'
import reactjs from '../assets/reactjs.jpg'

export default function SkillsPage() {
    const skills = [
        {
            title: "React.js",
            image: reactjs,
            description: "A powerful JavaScript library for building dynamic user interfaces with component-based architecture and virtual DOM optimization.",
            level: "Advanced",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Java",
            image: Java,
            description: "Platform-independent programming language with strong OOP principles. Write Once, Run Anywhere (WORA) capability.",
            level: "Intermediate",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "JavaScript",
            image: Js,
            description: "Versatile programming language for client-side, server-side, mobile, and desktop application development.",
            level: "Advanced",
            color: "from-yellow-400 to-orange-500"
        },
        {
            title: "OOP Concepts",
            image: Oops,
            description: "Object-oriented programming principles including encapsulation, inheritance, polymorphism for scalable software design.",
            level: "Intermediate",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Node.js",
            image: Nodejs,
            description: "Powerful runtime environment enabling JavaScript execution on the server-side for efficient backend development.",
            level: "Intermediate",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Express.js",
            image: ExpressJs,
            description: "Fast, minimal web framework for Node.js, perfect for building robust APIs and web applications.",
            level: "Intermediate",
            color: "from-gray-600 to-gray-800"
        },
        {
            title: "SQL",
            image: Sql,
            description: "Standard language for managing relational databases, data manipulation, and complex query operations.",
            level: "Intermediate",
            color: "from-blue-600 to-indigo-600"
        },
        {
            title: "HTML5",
            image: Html,
            description: "Modern markup language for structuring web content with semantic elements and enhanced capabilities.",
            level: "Advanced",
            color: "from-orange-400 to-red-400"
        },
        {
            title: "CSS3",
            image: CSS,
            description: "Advanced styling language with flexbox, grid, animations, and responsive design capabilities.",
            level: "Advanced",
            color: "from-blue-400 to-purple-500"
        },
        {
            title: "MongoDB",
            image: MongoDB,
            description: "NoSQL document database offering flexible schema design, scalability, and high performance for modern applications.",
            level: "Intermediate",
            color: "from-green-600 to-green-700"
        },
        {
            title: "GitHub",
            image: github,
            description: "Version control platform for collaborative development, code management, and project organization.",
            level: "Advanced",
            color: "from-gray-700 to-black"
        },
        {
            title: "Communication",
            image: comuni,
            description: "Effective communication skills for clear idea exchange, team collaboration, and stakeholder engagement.",
            level: "Advanced",
            color: "from-teal-500 to-cyan-500"
        }
    ];

    const getLevelBadge = (level) => {
        const badges = {
            "Advanced": "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700",
            "Intermediate": "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700",
            "Beginner": "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700"
        };
        return badges[level] || badges["Intermediate"];
    };

    return (
        <>
            <section id="skills" className="min-h-screen flex items-center justify-center flex-col bg-white dark:!bg-gray-800 transition-colors duration-300">
                
                {/* Enhanced Responsive Header */}
                <div className="text-center mb-6 sm:mb-8 px-4">
                    <h1 className="font-bold text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-gray-200 dark:to-gray-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
                        Technical Skills
                    </h1>
                    <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-2 sm:px-4 gap-4 sm:gap-6 lg:justify-center">

                    {/* Enhanced Profile Section with Better Mobile Support */}
                    <div className="relative w-full lg:w-[40%] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-2xl">
                        {/* Background with overlay */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${plant})`,
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        </div>
                        
                        {/* Content with responsive sizing */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 sm:p-6 text-center">
                            <div className="relative mb-4 sm:mb-6">
                                <img 
                                    src={me} 
                                    alt="Profile" 
                                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl backdrop-blur-sm" 
                                />
                                <div className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm sm:text-lg">4+</span>
                                </div>
                            </div>
                            
                            <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 sm:p-6 border border-white/20 max-w-sm w-full">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Project Success</h3>
                                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                                    Successfully deployed <span className="font-semibold text-blue-400">4+ projects</span> with modern technologies and best practices
                                </p>
                                <div className="mt-4 flex justify-center space-x-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Skills Grid with Better Responsive Columns */}
                    <div className="h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] lg:w-[50%] overflow-y-auto custom-scrollbar">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 sm:gap-4 p-2">
                            {skills.map((skill, index) => (
                                <div 
                                    key={index}
                                    className="group relative bg-[#d5d5d7cf] dark:bg-white/10 dark:backdrop-blur-md rounded-xl border border-gray-300 dark:border-white/20 overflow-hidden hover:bg-gray-200 dark:hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    {/* Gradient overlay */}
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color}`}></div>
                                    
                                    {/* Image section with responsive height */}
                                    <div className="relative overflow-hidden h-24 sm:h-28 md:h-32">
                                        <img 
                                            src={skill.image} 
                                            alt={skill.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        
                                        {/* Level badge with responsive sizing */}
                                        <div className={`absolute top-1 right-1 sm:top-2 sm:right-2 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium border ${getLevelBadge(skill.level)}`}>
                                            {skill.level}
                                        </div>
                                    </div>
                                    
                                    {/* Content section with responsive padding */}
                                    <div className="p-3 sm:p-4">
                                        <h3 className="text-gray-900 dark:text-white font-bold text-sm sm:text-base md:text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                                            {skill.title}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                                            {skill.description}
                                        </p>
                                        
                                        {/* Progress indicator with responsive spacing */}
                                        <div className="mt-2 sm:mt-3 flex items-center space-x-2">
                                            <div className="flex-1 bg-gray-300 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                                                <div 
                                                    className={`h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                                                    style={{ 
                                                        width: skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '70%' : '50%',
                                                        animationDelay: `${index * 100}ms`
                                                    }}
                                                ></div>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">
                                                {skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '70%' : '50%'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom accent with responsive width */}
                <div className="mt-6 sm:mt-8 w-full max-w-4xl mx-auto px-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-white/30 to-transparent"></div>
                </div>
            </section>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                @media (min-width: 640px) {
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 6px;
                    }
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.1);
                }
                .dark .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #6b7280, #4b5563);
                }
                .dark .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, #4b5563, #374151);
                }
                .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, #2563eb, #7c3aed);
                }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                /* Ensure proper mobile viewport handling */
                @media (max-width: 640px) {
                    .custom-scrollbar {
                        -webkit-overflow-scrolling: touch;
                    }
                }
            `}</style>
        </>
    );
}