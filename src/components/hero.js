import "./Hero.css";
import me from "../images/me.jpeg";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Nanjego Afuwa</h1>
        <img src={me} alt="Nanjego Afuwa" className="me" />
        <p className="hero-subtitle">A Passionate Web Developer</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
}
