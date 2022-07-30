import React from 'react';
import ProjectItem from './ProjectItem';
import projects from './data/projects.json';

const ProjectList = () => {

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
        stack={project.stack}
      />
    )
  });

  return (
    <section className="section-projects">

      <div className="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">
          Most Recent Projects
        </h2>
      </div>
      <div className="project-list">
        {displayProjects}
      </div>


    </section >
  )
}

export default ProjectList;