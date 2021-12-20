import './nav.css';
import React from 'react';

const Nav = () => {
  function openNav() {
    document.querySelector('body').classList.add('nav-open');
    document.getElementById('nav-overlay').style.width = '100%';
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.querySelector('body').classList.remove('nav-open');
    document.getElementById('nav-overlay').style.width = '0%';
  }

  return (
    <>
      {/* Navbar Start */}
      <div id="navbar">
        <img src={require('../../static/images/logo.png')} alt="Navbarlogo" />

        <div className="nav-text sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="nav-menu">
          <span
            className="icon-menu"
            onClick={openNav}
            style={{ cursor: 'pointer' }}
          ></span>
        </div>
      </div>

      <div id="nav-overlay">
        {/* Button to close the overlay navigation */}
        <span className="icon-close" onClick={closeNav}></span>
        {/* Overlay content */}
        <div className="nav-overlay-content lg">
          <a href="#about" onClick={closeNav}>
            About
          </a>
          <a href="#skills" onClick={closeNav}>
            Skills
          </a>
          <a href="#experience" onClick={closeNav}>
            Experience
          </a>
          <a href="#projects" onClick={closeNav}>
            Projects
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
