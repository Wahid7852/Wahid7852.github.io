import { Component } from "react";
import { ProjectsPreviewData } from "./ProjectsData";

class ProjectsPreview extends Component {
  render() {
    return (
      <section className=" portfolio-grid">
        {ProjectsPreviewData.map((project) => (
          <section className="project ">
            <a href={project.src} target="_blank" rel="noreferrer">
              <section className="project-icon">
                <img src={project.img} alt="" className="project-img"></img>
              </section>
              <section className="project-meta white-text">
                <section className="project-meta-stack">
                {project.stack.map((stackName, index) => (
                    <p key={index}>{stackName}</p>
                  ))}
                </section>
              </section>
            </a>
          </section>
        ))}
      </section>
    );
  }
}

export default ProjectsPreview;
