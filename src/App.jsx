import React, { useEffect } from 'react'
import Header from './components/_header/Header'
import { useActiveSection } from './hooks/useActiveSection.js'

import About from './components/sections/About.jsx';
import Projects from './components/sections/Projects.jsx';
import Experience from './components/sections/Experience.jsx';

import "./App.css"
import './components/sections/Section.css'

import HeaderDesk from './components/_header/HeaderDesk.jsx';
import FooterMain from './components/_footer/FooterMain.jsx';

function App() {
    const activeSection = useActiveSection(["sobre", "projetos", "experiencia"]);
  
    return (
      <main>
        <Header activeSection={activeSection} />
        <section className='main'>
          <HeaderDesk activeSection={activeSection} />
          <article className="content">
              <About/>
              <Projects/>
              <Experience/>
              <FooterMain/>
          </article>
        </section>
      </main>
    );
  }
export default App