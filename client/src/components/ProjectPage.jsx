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

const Projects = () => (
    <section id="projects" className="min-h-[80vh] flex items-center justify-center pt-3">
        <div className="max-w-6xl md:w-[99%] md:h-[80%] mx-auto justify-center items-center ">
            <h2 className="text-3xl font-bold text-center">My Projects</h2> 
            <ProjectCarousel/>
        </div>
    </section>
);


export default Projects