import React from 'react'
import './HeaderDesk.css';
import { useScrollToSection } from '../../hooks/useScrollToSection';

import dataProfile from "../../data/profile.json";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from 'react-router';

function HeaderDesk({ activeSection, backToHome }) {

    const scrollToSection = useScrollToSection();
    const navigate = useNavigate();

    const handleClick = (id) => {
        if(!activeSection){
            navigate('/');
        }
        scrollToSection(id);
    };

    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <header className="HeaderDesk">

            <div className="headerDeskContent">

                <div className="headerDeskIntro">

                    <span className="headerDeskStatus">
                        Disponível para oportunidades
                    </span>

                    <div className="titles">

                        <h1>Myke William</h1>

                        <h2>
                            Desenvolvedor
                            <span> Full Stack</span>
                        </h2>

                        <p>
                            Desenvolvo aplicações web modernas,
                            do frontend à construção de APIs,
                            bancos de dados e deploy.
                        </p>

                    </div>

                    <nav className="headerDeskNav">
                        <ul>

                            <li
                                onClick={() => handleClick("sobre")}
                                className={activeSection === "sobre" ? "active" : ""}
                            >
                                <span className="navLine" />
                                <span className="navNumber">01</span>
                                <span>Sobre</span>
                            </li>

                            <li
                                onClick={() => handleClick("projetos")}
                                className={activeSection === "projetos" ? "active" : ""}
                            >
                                <span className="navLine" />
                                <span className="navNumber">02</span>
                                <span>Projetos</span>
                            </li>

                            <li
                                onClick={() => handleClick("experiencia")}
                                className={activeSection === "experiencia" ? "active" : ""}
                            >
                                <span className="navLine" />
                                <span className="navNumber">03</span>
                                <span>Experiência</span>
                            </li>

                        </ul>
                    </nav>

                </div>

                <div className="headerDeskFooter">

                    <div className="headerDeskSocial">

                        <button
                            aria-label="GitHub"
                            onClick={() => openLink(dataProfile.git)}
                        >
                            <FaGithub />
                        </button>

                        <button
                            aria-label="LinkedIn"
                            onClick={() => openLink(dataProfile.linkedin)}
                        >
                            <FaLinkedinIn />
                        </button>

                        <button
                            aria-label="Instagram"
                            onClick={() => openLink(dataProfile.isntagram)}
                        >
                            <FaInstagram />
                        </button>

                    </div>

                    <a
                        href={dataProfile?.wapp}
                        target='_blank'
                        className="headerDeskContact"
                    >
                        Entre em contato
                        <FiArrowUpRight />
                    </a>

                </div>

            </div>

        </header>
    );
}

export default HeaderDesk;