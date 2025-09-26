import React from 'react'
import dataExp from "../../data/experience.json";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import datacv from '../../data/CurriculoIngles.pdf'
import { useNavigate } from 'react-router'

function Experience() {

  const navigation = useNavigate()

  const itemLinkage = (link,internal) => {
    if(internal){
      navigation(link)
    }else{
      window.open(link, '_blank');
    }
  }


  return (
    <section id="experiencia" >
        <ul>
            {
              dataExp.map((item,index) => (
                  <li
                    key={`item_exp::${index}`}
                    onClick={() => itemLinkage(item.link,item.internal_link)}
                  >
                    <div className="p_content">
                        <div className='p_years'>
                            <strong style={{padding:" 0 15px"}} >{item.start}</strong >
                            <TfiLayoutLineSolid/>
                            <strong style={{padding:" 0 15px"}}> {item.end}</strong>
                        </div>
                        <div className="p_discribe">
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <ul className="technologies">
                               {
                                item.tech.map((listItem,indexList) =>  <li key={`ListItemTech-${indexList}`}>{listItem}</li> )
                               }
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