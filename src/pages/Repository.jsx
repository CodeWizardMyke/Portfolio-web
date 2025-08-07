import React from 'react'
import { useNavigate } from 'react-router'
import './Repository.css'
import { useEffect, useState } from 'react';

function Repository() {
    const navigate = useNavigate()

    const [repos, setRepos] = useState([]);
    const username = 'CodeWizardMyke'; 

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
        .then((res) => res.json())
        .then((data) => {
            setRepos(data);
        })
        .catch((error) => console.error('Erro ao buscar repositórios:', error));
     }, []);

     console.log('repos', repos)

  return (
    <main className='allblack'>
        <section className='containerRepo'>
            <header className='headRepo'>
                <span onClick={()=> navigate('/')}>Voltar</span>
            </header>
            <article className='contentRepo'>
                <div style={{ padding: '2rem' }}>
                    <h2>Meus Repositórios no GitHub</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                        <tr>
                            <th style={thStyle}>Nome</th>
                            <th style={thStyle}>Descrição</th>
                            <th style={thStyle}>Link</th>
                        </tr>
                        </thead>
                        <tbody>
                        {repos.map((repo) => (
                            <tr key={repo.id}>
                            <td style={tdStyle}>{repo.name}</td>
                            <td style={tdStyle}>{repo.description || 'Sem descrição'}</td>
                            <td style={tdStyle}>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                Ver no GitHub
                                </a>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </article>
        </section>
    </main>
  )
}

const thStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    backgroundColor: '#f5f5f5',
    textAlign: 'left',
  };
  
  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

export default Repository