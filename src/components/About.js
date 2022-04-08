import {
  ExperienceData,
  EducationData,
  CertificationData,
} from "./ExperienceData";
import DownloadIcon from "../images/download-icon.png";
import Resume from "../images/Ekaterine-Mitagvaria.pdf";
const About = () => {
  document.title = "About | Catherine Mitagvaria";

  return (
    <article className="about-main">
      <section>
        <h2 className="title-font pink-text">About Me</h2>
        <p className="white-text">
          After working in different fields for over 9 years and seeking
          something special, I have recently found my passion in web
          development, currently JavaScript and its frameworks. My latest job
          included social media and management however I decided to give it a go
          and dive into web developement field. I am looking forward to working
          on real projects!
        </p>
      </section>
      <a className="download-btn" href={Resume} download="Ekaterine-Mitagvaria">
        <img src={DownloadIcon} alt="" className="download-img"></img>Download
        Resume
      </a>

      <section className="about-cotainer-2">
        <h2 className="title-font  pink-text">My Stack</h2>
        <section className="stack-section">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
          ></img>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
          ></img>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
          ></img>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react"
          ></img>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            alt="vue"
          ></img>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="tailwindcss"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            alt="sass"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="git"
          ></img>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="vscode"
          ></img>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="figma"
          ></img>
        </section>
      </section>
      <section>
        <h2 className="title-font  pink-text">Work Experience</h2>
        <section className="work-experience">
          {ExperienceData.map((info) => (
            <section>
              <section>
                <h3>{info.jobtitle}</h3>
              </section>
              <section className="section-2">
                <p>{info.companyname}</p>
                <p>{info.worktype}</p>
              </section>
              <section>
                <p>{info.duration}</p>
              </section>
              <section>
                <p>{info.location}</p>
              </section>
              <section>
                <ul className="responsibilities">
                  {info.responsibility.map((data) => (
                    <li>{data}</li>
                  ))}
                </ul>
              </section>
            </section>
          ))}
        </section>
      </section>
      <section>
        <h2 className="title-font  pink-text">Education</h2>
        <section className="education">
          {EducationData.map((info) => (
            <section>
              <section>
                <h3>{info.name}</h3>
                <p>{info.status}</p>
                <p>{info.year}</p>
              </section>
            </section>
          ))}
        </section>
      </section>
      <section>
        <h2 className="title-font  pink-text">Languages</h2>
        <section className="languages">
          <section>
            <section>
              <h3>English</h3>
              <p>Professional working proficiency</p>
              <h3>Georgian</h3>
              <p>Native or bilingual proficiency</p>
              <h3>Russian</h3>
              <p>Limited working proficiency</p>
              <h3>German</h3>
              <p>Elementary proficiency</p>
            </section>
          </section>
        </section>
      </section>
      <section>
        <a className="download-btn" href={Resume} download="Ekaterine-Mitagvaria">
          <img src={DownloadIcon} alt="" className="download-img"></img>Download
          Resume
        </a>
      </section>
      <section>
        <h2 className="title-font  pink-text">Certifications</h2>
        <section className="certification">
          {CertificationData.map((info) => (
            <section>
              <section>
                <h3>{info.name}</h3>
                <p>{info.source}</p>
                <p>{info.date}</p>
                <a href={info.creditUrl} target="_blank" rel="noreferrer">
                  Show credential
                </a>
              </section>
            </section>
          ))}
        </section>
      </section>
    </article>
  );
};

export default About;
