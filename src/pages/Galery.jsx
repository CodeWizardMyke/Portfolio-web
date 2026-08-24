import React from 'react'
import './Galery.css'
import { useActiveSection } from '../hooks/useActiveSection.js'


import GaleryExpose from '../components/galery/GaleryExpose.jsx';
import HeaderDesk from '../components/_header/HeaderDesk.jsx';

function Galery() {
  const activeSection = useActiveSection(["sobre", "projetos", "experiencia"]);
  return (
    <main>
      <section className='main'>
          <HeaderDesk activeSection={activeSection} />

          <article className="content">
            < GaleryExpose />
          </article>
        </section>
    </main>
  )
}

export default Galery