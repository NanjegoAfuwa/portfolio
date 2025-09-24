import "./App.css";
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
