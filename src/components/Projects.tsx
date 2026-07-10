import "../styles/projects.css";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern shopping platform with product management, authentication, cart system, and responsive design.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/600x400?text=E-Commerce",
    demo: "#",
    github: "#",
  },
  {
    title: "Admin Dashboard",
    description:
      "Analytics dashboard with charts, user management, and clean data visualization interface.",
    tech: ["React", "Charts", "API", "CSS"],
    image: "https://via.placeholder.com/600x400?text=Dashboard",
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive developer portfolio with modern UI, animations, and optimized performance.",
    tech: ["React", "TypeScript", "CSS"],
    image: "https://via.placeholder.com/600x400?text=Portfolio",
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">My Work</span>

          <h2>Featured Projects</h2>

          <p>
            Some of my recent projects built with modern technologies, clean
            architecture, and responsive design.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />

                <div className="overlay">
                  <a href={project.demo}>Live Demo</a>

                  <a href={project.github}>GitHub</a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
