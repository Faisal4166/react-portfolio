import "../styles/skills.css";

interface Skill {
  name: string;
  level: string;
  percentage: number;
}

const skills: Skill[] = [
  {
    name: "React",
    level: "Advanced",
    percentage: 90,
  },
  {
    name: "TypeScript",
    level: "Advanced",
    percentage: 85,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    percentage: 92,
  },
  {
    name: "Node.js",
    level: "Intermediate",
    percentage: 75,
  },
  {
    name: "CSS / SCSS",
    level: "Advanced",
    percentage: 88,
  },
  {
    name: "UI/UX Design",
    level: "Intermediate",
    percentage: 70,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-tag">My Skills</span>

          <h2>Technologies I Work With</h2>

          <p>
            I build modern and scalable applications using the latest frontend
            technologies and best development practices.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-top">
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>

              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{
                    width: `${skill.percentage}%`,
                  }}
                ></div>
              </div>

              <div className="percentage">{skill.percentage}%</div>
            </div>
          ))}
        </div>

        <div className="tools">
          <div className="tool">⚛️ React</div>

          <div className="tool">🟦 TypeScript</div>

          <div className="tool">🟢 Node.js</div>

          <div className="tool">🎨 Figma</div>

          <div className="tool">🔥 Firebase</div>

          <div className="tool">🐙 GitHub</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
