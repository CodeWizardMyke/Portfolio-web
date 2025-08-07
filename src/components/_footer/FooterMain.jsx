export default function FooterMain() {
    return (
        <footer style={footerStyle}>
            <p style={{ margin: 0 }}>Desenvolvido por mim utilizando as tecnologias:</p>
            <ul style={techListStyle}>
                <li><strong>React.js</strong></li>
                <li><strong>VS Code</strong></li>
                <li><strong>GitHub</strong></li>
                <li><strong>Vercel</strong></li>
            </ul>
            <p>Fonte usada na formatação do texto: <i>Inter sans-serif</i> </p>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
            © {new Date().getFullYear()} - Todos os direitos reservados.
            </p>
        </footer>
    );
  }
  
  // Estilos inline
  const footerStyle = {
    marginTop: '4rem',
    padding: '2rem 1rem',
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    justifyContent:"center",
    color: '#f5f5f5',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };
  
  const techListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: '0.5rem 0',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  };
  