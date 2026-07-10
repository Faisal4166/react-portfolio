import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>
            &lt;John<span>Dev</span>/&gt;
          </h2>

          <p>
            Building modern, responsive and scalable web applications with React
            and TypeScript.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="#" aria-label="Github">
            GitHub
          </a>

          <a href="#" aria-label="LinkedIn">
            LinkedIn
          </a>

          <a href="#" aria-label="Twitter">
            Twitter
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
