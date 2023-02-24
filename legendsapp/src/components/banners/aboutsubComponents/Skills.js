import React from "react";
import "./skill.css";
const Skills = () => {
  return (
    <div className="skills-container">
      <div class="wrapper">
      <p className='intro'>I characterize functional programming as a radical and elegant 
                attack on the whole enterprise of writing programs</p>
      </div>
      <div class="skill">
        <p>CSS3</p>

        <div class="skill-bar skill2"></div>
      </div>

      <div class="skill">
        <p>JAVASCRIPT</p>

        <div class="skill-bar skill3"></div>
      </div>

      <div class="skill">
        <p>HTML</p>

        <div class="skill-bar skill2"></div>
      </div>
      <div class="skill">
        <p>PHP</p>

        <div class="skill-bar skill3"></div>
      </div>
      <div class="skill">
        <p>UI|UX Design</p>

        <div class="skill-bar skill3">
        </div>
      </div>
    </div>
  );
};

export default Skills;
