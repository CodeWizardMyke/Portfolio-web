import './FooterMain.css'
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import dataProfile from "../../data/profile.json";

export default function FooterMain() {

    const openLink = (url) => {
        if (url.startsWith("mailto:")) {
            window.open(url, "_blank");
            return;
        }

        window.open(url, "_blank", "noopener,noreferrer");
    };


    return (
        <footer className="footerStyle">

            <div className="footerTop">

                <div className="footerMessage">
                    <span className="footerLabel">
                        Vamos conversar?
                    </span>

                    <h2>
                        Tem um projeto ou uma oportunidade?
                    </h2>

                    <p>
                        Estou aberto a novas oportunidades, projetos
                        e boas conversas sobre desenvolvimento.
                    </p>
                </div>

                <a
                    href={dataProfile.wapp}
                    target='_blank'
                    className="footerContact"
                >
                    Entre em contato pelo WhatsApp
                    <FiArrowUpRight />
                </a>

                <a
                    onClick={() => openLink(dataProfile.email)}
                    className="footerContact"
                >
                    Envie um email com pedido
                    <FiArrowUpRight />
                </a>
            </div>

            <div className="footerBottom">

                <div className="footerCopyright">
                    <span>
                        © {new Date().getFullYear()} Myke William
                    </span>

                    <span className="footerSeparator">
                        •
                    </span>

                    <span>
                        Desenvolvido com React.js
                    </span>
                </div>

                <div className="footerSocial">

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

                </div>

            </div>

        </footer>
    );
}