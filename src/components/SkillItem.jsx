import React from 'react';

const SkillItem = (props) => {

  const stacks = props.stack;
  const listItems = stacks.map((stack) => <li><span>*</span>{stack}</li>);
  return (
    <div className="skill-list__item">
      <div className="skill-list__heading">
        <h3>{props.category}</h3>
      </div>
      <div className="skill-list__details">
        <ul>{listItems}</ul>
      </div>
    </div>
  )
}

export default SkillItem;