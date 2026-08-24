import React from 'react'
import aboutData from '../../data/about.json';

function About() {
  return (
    <section id="sobre" className="section-block">
      <div className="section-header">
        <span className="section-label">Sobre</span>
        <h2>Quem sou eu</h2>
      </div>

      <div className="about-content">
        {aboutData.map((paragraph, index) => (
          <article className="about-item" key={`about-${index}`}>
            <h3>{paragraph.title}</h3>
            <p>{paragraph.content}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About