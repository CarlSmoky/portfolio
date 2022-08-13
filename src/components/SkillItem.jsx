import React from 'react';
import Skill from './Skill';

const SkillItem = (props) => {

  const stacks = props.stacks;
  const listItems = stacks.map((el, i) => {
  return (
          <Skill
            key={i}
            stack={el}
         />
        )
  });
  
  return (
    <div className="skill-list__item">
      <div className="skill-list__heading">
        <h3 className="heading-tertiary">{props.category}</h3>
      </div>
      <div className="skill-list__details">
        <ul className="list">{listItems}</ul>
      </div>
    </div>
  )
}

export default SkillItem;