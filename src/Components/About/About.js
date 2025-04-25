import './about.css';
import React, { useEffect, useRef } from 'react';

class TextRotate {
  constructor(elements, period, textRef) {
    this.elements = elements;
    this.period = period;
    this.loopNum = 0;
    this.textRef = textRef;
    this.txt = '';
    this.isDeleting = false;
    this.tick = this.tick.bind(this);
    this.tick();
  }

  tick() {
    var i = this.loopNum % this.elements.length;
    var fullTxt = this.elements[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.textRef.current.innerHTML = '<span>' + this.txt + '</span>';
    this.textRef.current.className = 'typewriter-text';

    var delta = 180; //300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      this.textRef.current.className = 'typewriter-text blink';
      delta = this.period;
      this.isDeleting = true; // start deleting current word
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500; // start typing next word
    }

    var that = this;
    setTimeout(function() {
      that.tick();
    }, delta);
  }
}

const About = () => {
  const elements = [
    'Samuel!',
    'a developer.',
    'an engineer.',
    'a creator.',
    'a learner.',
  ];
  const period = 2000;
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const typewriterRef = useRef(null);

  function getLineHeight() {
    var clone = typewriterRef.current.cloneNode();
    const width = window.innerWidth - 250;
    clone.setAttribute(
      'style',
      `position: float; opacity: 0; visibility: hidden; width: ${width}`
    );
    var span = document.createElement('span');
    span.appendChild(document.createTextNode(`Hello! I'm ${elements[1]}`));
    clone.appendChild(span);
    aboutRef.current.appendChild(clone);
    typewriterRef.current.style = `height: ${clone.offsetHeight + 30}px`;
    aboutRef.current.removeChild(clone);
  }

  useEffect(() => {
    new TextRotate(elements, period, textRef);
    getLineHeight();
    window.addEventListener('resize', getLineHeight);
  }, []);

  return (
    <section id="about" className="section-container">
      <div className="about-container" ref={aboutRef}>
        <h3>{'</>'}</h3>
        <h1 className="typewriter xl" ref={typewriterRef}>
          <span>
            Hello! I'm <span className="typewriter-text" ref={textRef}></span>
          </span>
        </h1>

        <h2 className="lg about-text">
          Since discovering my passion for technology, nothing gets me more
          excited than being able to build exceptional software products that
          have meaningful impacts.
        </h2>

        <h2 className="lg about-text">
          Software engineer @{' '}
          <a
            href="https://www.deshaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="current-job"
          >
            The D. E. Shaw Group
          </a>
          .
        </h2>

        <button className="resume-button">
          <a
            href="Samuel_Lye_Resume.pdf"
            target="_blank"
            className="md"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            My Resume
          </a>
        </button>

        <div className="about-links md">
          <ul>
            <li>
              <a
                href="https://github.com/samuellye98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/samuellye98/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:sl2982@cornell.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-gmail"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
