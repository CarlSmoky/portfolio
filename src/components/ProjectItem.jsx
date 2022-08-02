import React from 'react';

const ProjectItem = (props) => {

  return (
    
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src={props.imageUrl} />
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>{props.details}</p>
                    <p>{props.stack}</p>
                    <a href={props.gitUrl}>Git hub</a>
                    {props.demoUrl && <a href={props.demoUrl}>Demo</a>}
                </div>
            </div>
        </div>
    
  )
}

export default ProjectItem;