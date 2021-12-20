import './skills.css';
import React from 'react';
import skills from './skills.json';

skills.sort((e1, e2) => e1.name.localeCompare(e2.name));

const Skills = () => {
  function filterSkills(event) {
    const selection = event.target.id;
    let iconContainers;
    if (selection === 'all') {
      iconContainers = document
        .getElementById('skills-icons')
        .querySelectorAll('.icon-container');
      for (let i = 0; i < iconContainers.length; i++) {
        iconContainers[i].classList.remove('notactive');
      }
    } else {
      iconContainers = document
        .getElementById('skills-icons')
        .querySelectorAll('.icon-container');
      for (let i = 0; i < iconContainers.length; i++) {
        if (iconContainers[i].classList.contains(selection)) {
          iconContainers[i].classList.remove('notactive');
        } else {
          iconContainers[i].classList.add('notactive');
        }
      }
    }

    var container = document.getElementById('skills-filter');
    var current = container.querySelector('.active');
    current.setAttribute(
      'style',
      'background: none; color: black; border: 1px solid #3c4f76;'
    );
    current.classList.remove('active');
    var active = container.querySelector(`#${selection}`);
    active.classList.add('active');
    active.setAttribute(
      'style',
      `background: #253069;; color: 'white'; border: none;`
    );
  }

  return (
    <section id="skills" className="section-container">
      <div className="header">
        <div>
          <div className="header-text">Skills</div>
          <div className="header-underline"></div>
        </div>
      </div>

      <div className="flex-container">
        <div id="skills-filter">
          <ul>
            <li className="active" id="all" onClick={filterSkills}>
              all
            </li>
            <li id="high" onClick={filterSkills}>
              rocking at
            </li>
            <li id="medium" onClick={filterSkills}>
              learnt
            </li>
            <li id="low" onClick={filterSkills}>
              played with
            </li>
          </ul>
        </div>
        <div id="skills-icons" className="icon-grid">
          {skills.map((e) => {
            return (
              <div key={e.name} className={`icon-container ${e.proficiency}`}>
                <i className={`icon ${e.icon}`}></i>
                <span className="sm">{e.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
