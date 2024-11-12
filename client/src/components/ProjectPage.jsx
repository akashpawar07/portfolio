import React, { useState } from 'react';
import ProjectCarousel from '../components/ProjectCarousel'

const allProjects = [
    {
        title: "CAMPUS-CONNECT",
        description: "Campus-Connect: Revolutionizing Admission Processes with Paperless, Online Solutions Project Overview: Developed a cutting-edge web application, Campus-Connect, to streamline admission processes, reducing paper waste and enhancing efficiency. Built with HTML, CSS, JS, Node.js, Express.js, and MongoDB, this platform empowers educational institutions to manage admissions online, effortlessly.",
        projectLink: "https://abc.com"
    },
    {
        title: "CAMPUS-CONNECT",
        description: "Campus-Connect: Revolutionizing Admission Processes with Paperless, Online Solutions Project Overview: Developed a cutting-edge web application, Campus-Connect, to streamline admission processes, reducing paper waste and enhancing efficiency. Built with HTML, CSS, JS, Node.js, Express.js, and MongoDB, this platform empowers educational institutions to manage admissions online, effortlessly.Key Achievements:- Designed and developed a user-friendly, scalable online admission system, eliminating paper-based processes.- Successfully implemented Node.js and Express.js to handle complex backend operations, ensuring seamless data management.- Utilized MongoDB to create a flexible, high-performance database schema for efficient student data storage.",
        projectLink: "https://abc.com"
    },
    {
        title: "project 3",
        description: "hello this is project 3",
        projectLink: "https://pqr.com"
    },
    {
        title: "project 4",
        description: "hello this is project 4",
        projectLink: "https://yoyo.com"
    }
]

// const Projects = () => (
//     <section id="projects" className="min-h-screen flex items-center justify-center bg-orange-700">
//         <div className="max-w-4xl md:w-[99%] md:h-[90%] mx-auto p-2 bg-purple-800">
//             <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {allProjects.map((items) => (
//                     <div key={items} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
//                         <h3 className="text-xl font-semibold mb-2">{items.title}</h3>
//                         <p>{items.description}</p>
//                         <p>{items.projectLink}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </section>
// );

const Projects = () => (
    <section id="projects" className="min-h-[80vh] flex items-center justify-center ">
        <div className="max-w-6xl md:w-[99%] md:h-[80%] mx-auto p-2 ">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <ProjectCarousel/>
        </div>
    </section>
);


export default Projects