import ExternalLink from "../../assets/images/project-external.png";
import GithubRepo from "../../assets/images/project-source.png";
import { ProjectsPreviewData } from "../../data/ProjectsData";

const ProjectsPreview = () => {
  return (
    <section className=" portfolio-grid">
      {ProjectsPreviewData.map((project, index) => (
        <section key={index} className="project">
          <img
            src={project.img}
            alt={project.name}
            className="project-img"
          ></img>
          <section className="project-description">
            <p className="white-text p-tag">{project.description}</p>
            <section className="project-meta-stack ">
              {project.stack.map((stackName, index) => (
                <p key={index}>{stackName}</p>
              ))}
            </section>
            <section className="project-links">
              <a href={project.src} target="_blank" rel="noreferrer">
                <img src={ExternalLink} alt="External link icon"></img>
              </a>
              <a href={project.source} target="_blank" rel="noreferrer">
                <img src={GithubRepo} alt="Github icon"></img>
              </a>
            </section>
          </section>
        </section>
      ))}
    </section>
  );
};

export default ProjectsPreview;
