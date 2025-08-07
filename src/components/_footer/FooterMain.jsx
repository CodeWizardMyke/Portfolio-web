import './FooterMain.css'

export default function FooterMain() {
    return (
        <footer className='footerStyle' >
            <p>Desenvolvido por mim utilizando as tecnologias:</p>
            <ul>
                <li><strong>React.js</strong></li>
                <li><strong>VS Code</strong></li>
                <li><strong>GitHub</strong></li>
                <li><strong>Vercel</strong></li>
            </ul>
            <p>Fonte usada na formatação do texto: <i>Inter sans-serif</i> </p>
            <p>
              © {new Date().getFullYear()} - Todos os direitos reservados.
            </p>
        </footer>
    );
  }