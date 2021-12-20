import React from 'react';
import './preloader.css';

const Preloader = (props) => {
  return (
    <div id="preloader" ref={props.preloaderRef}>
      <div id="preloader-container">
        <div className="lds-hourglass"></div>
      </div>
    </div>
  );
};

export default Preloader;
