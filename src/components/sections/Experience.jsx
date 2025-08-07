import React from 'react'
import dataExp from "../../data/experience.json";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import datacv from '../../data/doc.pdf'

function Experience() {
  return (
    <section id="experiencia" >
        <ul>
            {
              dataExp.map((item,index) => (
                  <li
                    key={`item_exp::${index}`}
                    onClick={() => window.open(item.link, '_blank')}
                  >
                    <div className="p_content">
                        <div className='p_years'>
                            <strong style={{padding:" 0 15px"}} >{item.start}</strong >
                            <TfiLayoutLineSolid/>
                            <strong style={{padding:" 0 15px"}}> {item.end}</strong>
                        </div>
                        <div className="p_discribe">
                            <h2>Desenvolvedor Web & Mobile Full Stack</h2>
                            <p>
                            Desenvolvimento de website institucional em React para presença online da ALS Bordados.
                            Criação de aplicativo mobile com React Native para gerenciamento de produção, controle de estoque e registro de funcionários. Backend desenvolvido em Express.js com banco de dados MySQL.
                            </p>
                            <ul className="technologies">
                                <li>React.js</li>
                                <li>React Native</li>
                                <li>Express.js</li>
                                <li>MySQL DB</li>
                            </ul>
                        </div>
                    </div>
                </li>
              ))
            }
          </ul>
        <div 
            className="p_complet"
            onClick={()=> window.open(datacv, '_blank')}
        ><span>Ver completo.</span></div>
    </section>
  )
}

export default Experience