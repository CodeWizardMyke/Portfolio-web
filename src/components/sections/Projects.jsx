import React from 'react'
import { useNavigate } from 'react-router'
import dataProjects from "../../data/projetcs.json"
import { FiArrowUpRight } from "react-icons/fi";

function Projects() {

  const navigate = useNavigate()

  return (
    <section id="projetos" className="section-block">

      <div className="section-header">
        <span className="section-label">Projetos</span>

        <h2>Projetos em destaque</h2>

        <p>
          Alguns dos principais projetos que desenvolvi,
          combinando frontend, backend e experiência do usuário.
        </p>
      </div>

      <div className="projects-grid">

        {dataProjects.map((item, index) => (

          <article
            className="project-card"
            key={`item_project::${index}`}
            onClick={() => window.open(item.link, '_blank')}
          >

            <div className="project-thumbnail">

              <img
                src={item.thumbnail}
                alt={item['thumbnail-alt']}
              />

              <div className="project-overlay">
                <FiArrowUpRight />
              </div>

            </div>

            <div className="project-content">

              <div className="project-title">
                <h3>{item.titulo}</h3>
                <FiArrowUpRight />
              </div>

              <p>{item.desc}</p>

            </div>

          </article>

        ))}

      </div>

      <button
        className="section-link"
        onClick={() => navigate('/repositorys')}
      >
        Ver todos os projetos
        <FiArrowUpRight />
      </button>

    </section>
  )
}

export default Projects