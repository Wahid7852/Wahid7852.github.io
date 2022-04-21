import { Component } from "react";
import { ProjectsData } from "./ProjectsData";

class Projects extends Component {
  render() {
    return (
      <section className="portfolio-grid section-tag">
        {ProjectsData.map((project, index) => (
          <section className="project" key={index}>
            <a href={project.src} target="_blank" rel="noreferrer">
              <section className="project-icon">
                <img src={project.img} alt="" className="project-img"></img>
              </section>
              <section className="project-meta white-text">
                <section className="project-meta-stack">
                  <p>{project.stackOne}</p>
                  <p>{project.stackTwo}</p>
                  <p>{project.stackThree}</p>
                </section>
              </section>
            </a>
          </section>
        ))}
      </section>
    );
  }
}

export default Projects;
