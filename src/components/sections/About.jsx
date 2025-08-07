import React from 'react'

function About() {
  return (
    <section id="sobre">
       <div className="text-about" style={{maxWidth:'600px', margin:" 50px auto", fontSize:"14pt", textAlign:"justify"}}>
            <p>
                Sou desenvolvedor web full stack com sólida experiência em JavaScript, React, Node.js, Express e SQL. Ao longo da minha jornada, desenvolvi aplicações completas, desde e-commerces com integração de pagamentos, como o projeto DH Books, até sistemas de gerenciamento personalizados com funcionalidades como carrinho de compras, controle de estoque, cadastro de produtos, e geração de relatórios em PDF/Excel.
            </p>
            <p style={{margin:"15px 0"}}>
                    Tenho habilidade para construir interfaces intuitivas, com atenção à experiência do usuário e estrutura semântica. Domínio ferramentas como Axios para requisições HTTP, Multer para upload de imagens, além de práticas modernas como uso de hooks personalizados em React.
            </p>
            <p>
                    Sou persistente, focado em resolver problemas com eficiência e sempre buscando aprender novas tecnologias, como Docker, AWS e Kubernetes. Também tenho interesse em criar soluções integradas com redes sociais, como sistemas de vendas via Instagram, e estou familiarizado com o desenvolvimento de aplicações que interagem com arquivos e sistemas de arquivos locais.
            </p>
       </div>
    </section>
  )
}



export default About