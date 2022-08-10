import React from 'react';

const ProjectItem = (props) => {

    return (

        <div className="card">
            <div className="card__face card-top">
                <div className="card-top__content">
                    <img src={props.imageUrl} />
                    <h3 className="card-top__content--title">{props.title}</h3>
                </div>
            </div>
            <div className="card__face card-bottom">
                <div className="card-bottom__content">
                    <h3 className="card-bottom__content--title">{props.title}</h3>
                    <p className="card-bottom__content--text paragraph">{props.details}</p>
                    <p className="card-bottom__content--text paragraph-small">{props.stacks}</p>
                    <a className="card-bottom__content--button" href={props.gitUrl}>GitHub</a>
                    {props.demoUrl && <a className="card-bottom__content--button" href={props.demoUrl}>Live Demo</a>}
                </div>
            </div>
        </div>

    )
}

export default ProjectItem;