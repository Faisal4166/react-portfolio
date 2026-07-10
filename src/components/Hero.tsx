import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">👋 Welcome to my portfolio</span>

          <h1>
            Hi, I'm <span>Jaspreet</span>
          </h1>

          <h2>React & TypeScript Developer</h2>

          <p>
            I build modern, fast, and scalable web applications using React,
            TypeScript, Node.js, and modern frontend technologies. I enjoy
            creating beautiful user experiences and writing clean, maintainable
            code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>25+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>15+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-card">
            <img
              src="https://via.placeholder.com/420x420.png?text=Your+Photo"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
