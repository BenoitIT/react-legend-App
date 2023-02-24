import React from "react";
import "./skill.css";
const Skills = () => {
  return (
    <div className="skills-container">
      <div className="wrapper">
      <p className='intro'>I characterize functional programming as a radical and elegant 
                attack on the whole enterprise of writing programs</p>
      </div>
      <div className="skill">
        <p>CSS3</p>

        <div className="skill-bar skill2"></div>
      </div>

      <div className="skill">
        <p>JAVASCRIPT</p>

        <div className="skill-bar skill3"></div>
      </div>

      <div className="skill">
        <p>HTML</p>

        <div className="skill-bar skill2"></div>
      </div>
      <div className="skill">
        <p>PHP</p>

        <div className="skill-bar skill3"></div>
      </div>
      <div className="skill">
        <p>UI|UX Design</p>

        <div className="skill-bar skill3">
        </div>
      </div>
    </div>
  );
};

export default Skills;
