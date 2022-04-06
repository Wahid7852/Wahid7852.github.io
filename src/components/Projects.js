import ProjectOne from "../images/project-one.png";

const Projects = () => {
  function ReavealProject() {
    const HiddenSnippet = document.querySelector(".project-snippet");
    const ProjectImg = document.querySelector(".project-icon");
    HiddenSnippet.classList.add("show-snippet");
    ProjectImg.classList.add("transform-icon");
  }
  function HideProject() {
    const HiddenSnippet = document.querySelector(".project-snippet");
    const ProjectImg = document.querySelector(".project-icon");
    HiddenSnippet.classList.remove("show-snippet");
    ProjectImg.classList.remove("transform-icon");
  }
  return (
      <section className="portfolio-grid">
        <section className="project">
          <a
            href="https://catherineisonline.github.io/pizza-time-with-react/"
            target="_blank"
            rel="noreferrer"
          >
            <section className="project-icon" onMouseEnter={ReavealProject}>
              <img src={ProjectOne} alt="" className="project-img"></img>
            </section>
            <section className="project-snippet" onMouseLeave={HideProject}>
              <section className="stack-used white-text">
                <p>React</p>
                <p>HTML5</p>
                <p>CSS</p>
              </section>
            </section>
          </a>
        </section>
        <section className="project">
          <section className="project-icon">
            <img src="" alt=""></img>
          </section>
          <section className="project-snippet">
            <h3>Travel With Catherine</h3>
            <section className="stack-used">
              <p>React</p>
              <p>HTML5</p>
              <p>Tailwind</p>
            </section>
          </section>
        </section>
        <section className="project">
          <section className="project-icon">
            <img src="" alt=""></img>
          </section>
          <section className="project-snippet">
            <h3>Pizza Time</h3>
            <section className="stack-used">
              <p>React</p>
              <p>HTML5</p>
              <p>Tailwind</p>
            </section>
          </section>
        </section>
      </section>
  );
};

export default Projects;
