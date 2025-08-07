import React from 'react'
import { useNavigate } from 'react-router'
import dataProjects  from "../../data/projetcs.json"

function Projects() {
    const navigate = useNavigate()

  return (
    <section id="projetos">
        <ul>
            <li>
                {
                    dataProjects.map((item,index) => (
                        <div 
                            className="p_content" 
                            key={`item_project::${index}`}
                            onClick={() => window.open(item.link, '_blank')}
                        >
                            <div className="p_thumbnail">
                                <img src={item.thumbnail} alt={item['thumbnail-alt']} />
                            </div>
                            <div className="p_discribe">
                                <h2>{item.titulo}</h2>
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </li>
        </ul>
        <div
            onClick={()=> navigate('/repositorys')} 
            className="p_complet"
        ><span>Ver todos projetos.</span></div>
    </section>
  )
}

export default Projects