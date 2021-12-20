import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import Preloader from './Components/Preloader/Preloader';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Modal from './Components/Projects/Modal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const preloaderRef = useRef(null);

  useEffect(() => {
    preloaderRef.current.className = 'fadeout';
    document.querySelector('#content').classList.remove('content-preload');
  }, []);

  function handleOpenModal(event) {
    console.log(event.target, event.target.nodeType);
    if (event.target && event.target.id) {
      setActiveIdx(parseInt(event.target.id));
      setModalOpen(true);
      document.querySelector('body').classList.add('modal-active');
      document.querySelector('#navbar').style = 'display: none';
    }
  }

  function handleCloseModal() {
    setModalOpen(false);
    document.querySelector('body').classList.remove('modal-active');
    document.querySelector('#navbar').style = '';
  }

  return (
    <>
      <Preloader preloaderRef={preloaderRef} />
      <Nav />
      <div id="content" className="content-preload">
        <About />
        <Skills />
        <Experience />
        <Projects handleOpenModal={handleOpenModal} />
      </div>
      <Modal
        activeIdx={activeIdx}
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default App;
