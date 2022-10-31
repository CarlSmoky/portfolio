import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaLaptopCode } from 'react-icons/fa';



const ProjectItem = (props) => {

    return (

        <div className="card">
            <div className="card__face card-top">
                <div className="card-top__content">
                    <img className="card-top__content--image" src={props.imageUrl} alt={`${props.title} screen shot`} />
                    <h3 className="card-top__content--title">{props.title}</h3>
                </div>
            </div>
            <div className="card__face card-bottom">
                <div className="card-bottom__content">
                    <h3 className="card-bottom__content card-bottom__content--title">{props.title}</h3>
                    <p className="card-bottom__content--text">{props.details}</p>
                    <p className="card-bottom__content--stack">{props.stacks}</p>
                    <a className="card-bottom__content--button" href={props.gitUrl} target="_blank">
                        <FiGithub />
                        <span className="screenreader-only">GitHub</span>
                    </a>
                    {props.demoUrl && <a className="card-bottom__content--button" href={props.demoUrl} target="_blank">
                        <FaLaptopCode />
                        <span className="screenreader-only">Live Demo</span>
                    </a>}
                </div>
            </div>
        </div>

    )
}

export default ProjectItem;