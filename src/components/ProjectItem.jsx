import React from 'react';

const ProjectItem = (props) => {

  return (
      <div className="project">
        <figure class="project__shape">
          <img src={props.imageUrl} alt="Project Image" class="project__img" />
          <figcaption class="project__caption">{props.title}</figcaption>
        </figure>
        <div className="project__text">
          <h3 className="heading-tertiary u-margin-bottom-small">{props.title}
          </h3>
          <p className="paragraph">{props.details}</p>
          <p className="paragraph">Stack: {props.stack}</p>
          <h5>{props.author}</h5>
          <div className="button-container">
            <a href={props.gitUrl} alt=""><button className="button">Git hub</button></a>
            {props.demoUrl && <a href={props.demoUrl} alt=""><button className="button-6">Demo</button></a>}
          </div>
        </div>
    </div>
  )
}

export default ProjectItem;