import React from 'react';

const ProjectItem = (props) => {

    return (

        <div className="card">
            <div className="card__face card__top">
                <div className="card__top--content">
                    <img src={props.imageUrl} />
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className="card__face card__bottom">
                <div className="card__bottom--content">
                    <h3>{props.title}</h3>
                    <p>{props.details}</p>
                    <p>Stack: {props.stack}</p>
                    <a href={props.gitUrl}>Git hub</a>
                    {props.demoUrl && <a href={props.demoUrl}>Demo</a>}
                </div>
            </div>
        </div>

    )
}

export default ProjectItem;