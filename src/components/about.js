import "./about.css";


export function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-cards">
        <div className="about-card">
          <p>
            I’m <span className="highlight">Nanjego Afuwa</span>, a passionate
            Computer Scientist and Web Developer who loves turning ideas into
            functional and creative digital solutions. With a strong foundation
            in <b>JavaScript, React, and modern web technologies</b>, I enjoy
            building clean, responsive, and user-friendly applications.
          </p>
        </div>
        <div className="about-card">
          <p>
            Beyond coding, I am also a <b>graphic designer</b> who enjoys
            blending creativity with technology to design impactful digital
            experiences. My interests expand into <b>AI, data science, and
            problem-solving</b>, where I constantly seek to learn and innovate.
          </p>
        </div>
        <div className="about-card">
          <p>
            As a Computer Scientist, my vision is to use technology to solve
            real-world challenges, empower communities, and inspire more women
            in tech.
          </p>
        </div>
      </div>
    </section>
  );
}
