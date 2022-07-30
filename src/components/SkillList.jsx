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
        stack={skill.stack}
      />
    )
  })
  
  return (
    <section className="section-skill">
      <div className="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">
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