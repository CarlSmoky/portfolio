import React from 'react';
import skills from './data/skills.json';
import SkillItem from './SkillItem';

const SkillList = () => {

  const displaySkills = skills.map(skill => {
    return (
      <SkillItem
        key={skill.id}
        id={skill.id}
        category={skill.category}
        stacks={skill.stacks}
      />
    )
  })
  
  return (
    <section className="section-skill" id="skills" >
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Skill
        </h2>
      </div>
      <div className="skill-list">
        {displaySkills}
      </div>


    </section>
  )
}

export default SkillList