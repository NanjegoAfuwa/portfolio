import { useState } from "react";
import "./projects.css";
import video from "../video/video.mp4"; // your local video

export function Projects() {
  const [visibleVideo, setVisibleVideo] = useState(null); // track which video's visible

  const projects = [
    { 
      title: "Project 1", 
      desc: "I created and hosted a registered organisation website", 
      link: "#",
      video: video 
    },
    { 
      title: "Project 2", 
      desc: "I designed different fliers, posters", 
      link: "#" 
    },
  ];

  const handleViewProject = (index) => {
    setVisibleVideo(visibleVideo === index ? null : index); // toggle video visibility
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <button className="btn" onClick={() => handleViewProject(i)}>
              View Project
            </button>

            {/* Show video only if this project's index matches visibleVideo */}
            {p.video && visibleVideo === i && (
              <video controls className="project-video">
                <source src={p.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
