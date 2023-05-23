import GithubRepo from "../../assets/images/project-source.png";
import { ProjectsData } from "../../data/ProjectsData";

const Projects = () => {
  return (
    <section className="portfolio-grid">
      {ProjectsData.map((project) => (
        <section key={project.id} className="project">
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

export default Projects;
