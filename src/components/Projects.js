import { Component } from "react";
import { ProjectsData } from "./ProjectsData";

class Projects extends Component {
  ReavealProject(event) {
    event.stopPropagation();
    const HiddenSnippet = document.querySelectorAll(".project-snippet");
    HiddenSnippet.forEach(function (target) {
      target.classList.add("show-snippet");
    });
  }
  HideProject(event) {
    event.stopPropagation();
    const HiddenSnippet = document.querySelectorAll(".project-snippet");
    HiddenSnippet.forEach(function (target) {
      target.classList.remove("show-snippet");
    });
  }
  render() {
    return (
      <section className="portfolio-grid">
        {ProjectsData.map((project) => (
          <section className="project">
            <a href={project.src} target="_blank" rel="noreferrer">
              <section
                className="project-icon"
                onMouseEnter={this.ReavealProject}
              >
                <img src={project.img} alt="" className="project-img"></img>
              </section>
              <section
                className="project-snippet"
                onMouseLeave={this.HideProject}
              >
                <section className="stack-used white-text">
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
