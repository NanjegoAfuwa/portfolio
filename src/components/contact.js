import "./contact.css";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:nanjegoafuwa@gmail.com">nanjegoafuwa@gmail.com</a></p>
      <p> <FaWhatsapp /> <a href="https://wa.me/256703273018" target="_blank" rel="noopener noreferrer">+256 703273018</a></p>
       <p> <FaPhoneAlt />  <a href="tel:+256765057288" target="_blank" rel="noopener noreferrer">+256 765057288</a></p>

      <div className="social-icons">
        <a href="https://github.com/NanjegoAfuwa" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href= "https://linkedin.com/in/nanjego-afuwa-1063b6336" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href= "https://x.com/BirungiPor87068" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}
