import Image from 'next/image'
import React from 'react'

import ProjectTile from '../components/ProjectTile'

import '../globals.css'

import { projectData } from '../data/project_cards'

const Projects = () => {
    
    return (
        <div id='projects' className='projects'>
            <h2>
                My Projects
            </h2>

            <h3>
                {/*
                My projects vary widely in scope, ranging from focused, month-long implementations to multi-year 
                research efforts. They span areas such as analog circuit design, low-level embedded programming, 
                processor architecture, web development, and artificial intelligence.
                */}
                These are a few of my projects. They span areas such as analog circuit design, low-level embedded 
                programming, and processor architecture. They are not an exhaustive list but I add more...
            </h3>

            {/* This is the container for all of the project tiles */}
            <div className='project-tile-container'>
                
                {projectData.map((project, i) => (
                    <ProjectTile
                        key={i}
                        title={project.title}
                        description={project.description}
                        skills={project.skills}
                        label={project.label}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects