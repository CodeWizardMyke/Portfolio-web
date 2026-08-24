import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './Repository.css';

function Repository() {
    const navigate = useNavigate();

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const username = 'CodeWizardMyke';

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Não foi possível carregar os repositórios.');
                }

                return res.json();
            })
            .then((data) => {
                setRepos(data);
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    function formatDate(date) {
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).format(new Date(date));
    }

    return (
        <main className="repository-page">
            <section className="repository-container">

                <header className="repository-header">

                    <button
                        className="repository-back"
                        onClick={() => navigate('/')}
                    >
                        ← Voltar
                    </button>

                    <div className="repository-title">
                        <span className="repository-eyebrow">
                            GitHub
                        </span>

                        <h1>Meus repositórios</h1>

                        <p>
                            Projetos, estudos e aplicações que desenvolvi durante
                            minha evolução como desenvolvedor.
                        </p>
                    </div>

                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-profile-link"
                    >
                        Ver perfil no GitHub ↗
                    </a>

                </header>

                <div className="repository-info">
                    <span>
                        <strong>{repos.length}</strong> repositórios
                    </span>
                </div>

                {loading && (
                    <div className="repository-status">
                        Carregando repositórios...
                    </div>
                )}

                {error && (
                    <div className="repository-status repository-error">
                        {error}
                    </div>
                )}

                {!loading && !error && (
                    <div className="repository-grid">

                        {repos.map((repo) => (
                            <article
                                className="repository-card"
                                key={repo.id}
                            >

                                <div className="repository-card-header">

                                    <span className="repository-icon">
                                        &lt;/&gt;
                                    </span>

                                    <span className="repository-visibility">
                                        {repo.private ? 'Privado' : 'Público'}
                                    </span>

                                </div>

                                <div className="repository-card-content">

                                    <h2>{repo.name}</h2>

                                    <p>
                                        {repo.description ||
                                            'Projeto disponível no meu GitHub.'}
                                    </p>

                                </div>

                                <div className="repository-meta">

                                    {repo.language && (
                                        <span>
                                            <span className="language-dot" />
                                            {repo.language}
                                        </span>
                                    )}

                                    <span>
                                        ★ {repo.stargazers_count}
                                    </span>

                                    <span>
                                        Atualizado {formatDate(repo.updated_at)}
                                    </span>

                                </div>

                                <div className="repository-card-footer">

                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ver repositório
                                        <span>↗</span>
                                    </a>

                                </div>

                            </article>
                        ))}

                    </div>
                )}

            </section>
        </main>
    );
}

export default Repository;