import React from 'react'
import dataExp from "../../data/experience.json";
import curriculoPT from '../../data/Curriculo_Myke_William_2026.pdf'
import resumeEN from '../../data/Myke_William_Resume_EN.pdf'
import { useNavigate } from 'react-router'
import { FiArrowUpRight } from "react-icons/fi";

function Experience() {

  const navigation = useNavigate()

  const itemLinkage = (link, internal) => {
    if (internal) {
      navigation(link)
      return
    }

    window.open(link, '_blank')
  }

  return (
    <section id="experiencia" className="section-block">

      <div className="section-header">
        <span className="section-label">Experiência</span>
        <h2>Minha trajetória</h2>

        <p>
          Experiências profissionais e projetos que contribuíram
          para minha evolução como desenvolvedor.
        </p>
      </div>

      <div className="experience-list">

        {dataExp.map((item, index) => (
          <article
            key={`item_exp::${index}`}
            className="experience-card"
            onClick={() => itemLinkage(item.link, item.internal_link)}
          >

            <div className="experience-period">
              <span>{item.start}</span>
              <span className="experience-line" />
              <span>{item.end}</span>
            </div>

            <div className="experience-content">

              <div className="experience-title">
                <h3>{item.title}</h3>

                <FiArrowUpRight />
              </div>

              <p>{item.desc}</p>

              <ul className="technologies">
                {item.tech.map((tech, indexTech) => (
                  <li key={`tech-${indexTech}`}>
                    {tech}
                  </li>
                ))}
              </ul>

            </div>

          </article>
        ))}

      </div>

    <div className="resume-links">
        <a
            href={curriculoPT}
            target="_blank"
            rel="noopener noreferrer"
        >
            Currículo
            <span>PT-BR</span>
        </a>

        <a
            href={resumeEN}
            target="_blank"
            rel="noopener noreferrer"
        >
            Resume
            <span>EN</span>
        </a>
    </div>

    </section>
  )
}

export default Experience