import React from 'react'
import aboutData from '../../data/about.json';

function About() {
  return (
    <section id="sobre">
       <div className="text-about" style={{maxWidth:'600px', margin:" 50px auto", fontSize:"14pt"
       }}>
        {
          aboutData.map((paragraph, index) => (
            <>
              <h2 style={{marginBottom:'15px'}}>{paragraph.title}</h2>
              <p key={index} style={{marginBottom:"25px"}}>{paragraph.content}</p>
            </>
          ))
        }          
       </div>
    </section>
  )
}



export default About