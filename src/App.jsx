import React, { useEffect } from 'react'
import { useActiveSection } from './hooks/useActiveSection.js'

import About from './components/sections/About.jsx';
import Projects from './components/sections/Projects.jsx';
import Experience from './components/sections/Experience.jsx';

import "./App.css"

import FooterMain from './components/_footer/FooterMain.jsx';
import HeaderDesk from './components/_header/HeaderDesk.jsx';

function App() {
  
    return (
      <main>
        <section className='main'>
          <HeaderDesk activeSection={null} />
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