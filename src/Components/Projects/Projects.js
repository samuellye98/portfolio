import './projects.css';
import React from 'react';
import { projectData } from './projects-data';

// projectData.forEach((e) => {
//   e.skills.sort((s1, s2) => s1.localeCompare(s2));
// });

const Projects = (props) => {
  const { handleOpenModal } = props;

  return (
    <section
      id="projects"
      style={{ display: 'block', marginBottom: 50 }}
      className="section-container"
    >
      <div className="header">
        <div>
          <div className="header-text">Projects</div>
          <div className="header-underline"></div>
        </div>
      </div>
      <div className="projects" style={{ marginTop: '1em' }}>
        {projectData.map((e, idx) => (
          <div
            className="proj-item"
            key={idx}
            id={idx}
            onClick={handleOpenModal}
          >
            <div className="proj-header-icons">
              {e.github ? (
                <div className="proj-git">
                  <a
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={e.github}
                  >
                    <i className="icon-github"></i>
                  </a>
                </div>
              ) : null}
              {e.link ? (
                <div className="proj-website">
                  <a
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={e.link}
                  >
                    <i className="icon-external-link"></i>
                  </a>
                </div>
              ) : null}
            </div>
            <div className="proj-header">
              <p className="proj-title md">{e.name}</p>
              <span className="proj-desc sm">{e.summary}</span>
            </div>
            <div className="proj-skills">
              {e.skills.map((s, i) => (
                <span className="xs" key={i}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
