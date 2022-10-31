import React from 'react';
import ProjectItem from './ProjectItem';
import projects from './data/projects.json';

const ProjectList = ({ projectRef, isProjectVisible}) => {

  const displayProjects = projects.map(project => {
    return (
      <ProjectItem
        key={project.id}
        id={project.id}
        title={project.title}
        gitUrl={project.git_url}
        imageUrl={project.image_url}
        demoUrl={project.demo_url}
        details={project.details}
        author={project.author}
        stacks={project.stacks}
      />
    )
  });

  return (
    <section className="section-projects u-center-text" id="projects" ref={projectRef} >

        <h2 className={`heading-secondary ${isProjectVisible ? "animation-fadein-left" : ""} `}>
          Projects
        </h2>
    
      <div className="project-list">
        {displayProjects}
      </div>


    </section >
  )
}

export default ProjectList;