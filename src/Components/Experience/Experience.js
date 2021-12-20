import './experience.css';
import React, { useState } from 'react';
import { experienceData } from './experience-data';
import skillsMap from '../Skills/skills-map.json';

const Experience = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  function filterExperience(event) {
    setActiveIdx(parseInt(event.target.id));
  }

  return (
    <section id="experience" className="section-container">
      <div className="header">
        <div>
          <div className="header-text">Experience</div>
          <div className="header-underline"></div>
        </div>
      </div>
      <div className="flex-container">
        <div id="experience-filter" className="col-md-4 tab-container">
          <ul style={{ paddingLeft: 0 }}>
            {experienceData.map((e, i) => (
              <li
                key={i}
                id={i}
                className={i === activeIdx ? 'active sm' : 'sm'}
                onClick={filterExperience}
              >
                {e.company}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-8 experience-container">
          <div className="experience-header">
            <span className="lg" style={{ marginRight: '1rem' }}>
              {experienceData[activeIdx].role}
            </span>
            <span className="lg">
              @{' '}
              {experienceData[activeIdx].companyLogo ? (
                <a
                  className="experience-logo"
                  href={experienceData[activeIdx].website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt={experienceData[activeIdx].company}
                    src={experienceData[activeIdx].companyLogo}
                  />
                </a>
              ) : (
                <a
                  className="link-underline"
                  href={experienceData[activeIdx].website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experienceData[activeIdx].company}
                </a>
              )}
            </span>
          </div>

          <div className="experience-details xs">
            <div className="experience-details-icon">
              <i className="icon-business_center"></i>
              <span>{experienceData[activeIdx].department}</span>
            </div>
            <div className="experience-details-icon">
              <i className="icon-location"></i>
              <span>{experienceData[activeIdx].location}</span>
            </div>
            <div className="experience-details-icon">
              <i className="icon-calendar"></i>
              <span>{experienceData[activeIdx].duration}</span>
            </div>
          </div>
          <ul>
            {experienceData[activeIdx].duties.map((s, i) => (
              <div key={i} className="experience-desc">
                <i className="icon icon-terminal"></i>
                <li className="sm">{s}</li>
              </div>
            ))}
          </ul>

          {experienceData[activeIdx].skills.length ? (
            <div className="experience-skills">
              <h3 className="sm">Tech Stack</h3>
              <div className="icon-grid">
                {experienceData[activeIdx].skills.map((s) => (
                  <div key={s} className="icon-container">
                    <i className={`icon ${skillsMap[s]}`}></i>
                    <span className="xs">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Experience;
