import React, { useState } from 'react';
import ProjectCarousel from '../components/ProjectCarousel'


const Projects = () => (
    <section id="projects" className="min-h-[80vh] flex items-center justify-center pt-3">
        <div className="max-w-6xl md:w-[99%] md:h-[80%] mx-auto justify-center items-center ">
            <h2 className="text-3xl  md:text-5xl font-bold text-center">My Projects</h2> 
            <ProjectCarousel/>
        </div>
    </section>
);


export default Projects