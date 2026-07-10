import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="about-card">
            <img
              src="https://via.placeholder.com/450x500.png?text=About+Image"
              alt="About Me"
            />
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">About Me</span>

          <h2>Passionate React & TypeScript Developer</h2>

          <p>
            I'm a frontend developer who enjoys building responsive,
            user-friendly, and high-performance web applications. My focus is on
            creating clean UI, reusable components, and scalable architectures
            using modern technologies.
          </p>

          <p>
            I have experience working with React, TypeScript, Node.js, REST
            APIs, Firebase, and modern CSS. I love learning new technologies and
            turning ideas into real products.
          </p>

          <div className="about-info">
            <div className="info-card">
              <h3>3+</h3>
              <span>Years Experience</span>
            </div>

            <div className="info-card">
              <h3>25+</h3>
              <span>Completed Projects</span>
            </div>

            <div className="info-card">
              <h3>15+</h3>
              <span>Happy Clients</span>
            </div>

            <div className="info-card">
              <h3>100%</h3>
              <span>Responsive Design</span>
            </div>
          </div>

          <a href="#contact" className="about-btn">
            Let's Talk →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
