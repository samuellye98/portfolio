import './modal.css';
import React from 'react';
import { projectData } from './projects-data';
import skillsMap from '../Skills/skills-map.json';

// projectData.forEach((e) => {
//   e.skills.sort((s1, s2) => s1.localeCompare(s2));
// });

const Modal = (props) => {
  const { activeIdx, modalOpen, handleCloseModal } = props;

  return (
    <div className={`modal-container ${modalOpen ? '' : 'no-modal'}`}>
      <div className="modal-background" onClick={handleCloseModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            {projectData[activeIdx].link ? (
              <a
                className="modal-title link-underline lg"
                href={projectData[activeIdx].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectData[activeIdx].name}
              </a>
            ) : (
              <h1 className="modal-title lg">{projectData[activeIdx].name}</h1>
            )}

            <i
              className="modal-close icon-close"
              onClick={handleCloseModal}
            ></i>
          </div>
          <div className="modal-body">
            <img src={projectData[activeIdx].image} alt="Modal Pic" />
            <div className="modal-date sm">
              <span>{projectData[activeIdx].date}</span>
            </div>
            {projectData[activeIdx].description.map((d, i) => (
              <p key={i} className="md">
                {d}
              </p>
            ))}

            {projectData[activeIdx].skills.length ? (
              <div className="modal-skills">
                <h3 className="md">Tech Stack</h3>
                <div className="icon-grid">
                  {projectData[activeIdx].skills.map((s) => (
                    <div key={s} className="icon-container">
                      <i className={`icon ${skillsMap[s]}`}></i>
                      <span className="sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
