import React from 'react';

// styles imports
import '../css/ProjectGrid.css';

// components imports
import ProjectCard from './ProjectCard';

// data imports
import projects from '../data/projects.json';

export const ProjectGrid = () => {

  return (
    <article className='ProjectGrid'>
        <ul>
          {projects.map((projects) => (
            <ProjectCard key={projects.ID} projects={projects} />
          ))}
        </ul>
    </article>
  )
}

export default ProjectGrid;