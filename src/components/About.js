import {
  ExperienceData,
  EducationData,
  CertificationData,
} from "./ExperienceData";
import DownloadIcon from "../images/download-icon.png";
import Resume from "../images/Ekaterine-Mitagvaria.pdf";
import Footer from "./Footer";
const About = () => {
  document.title = "About | Catherine Mitagvaria";

  return (
    <article className="about-main">
      <section>
        <h2 className="title-font pink-text h2-tag">About Me</h2>
        <p className="white-text p-tag">
          I am a front-end web developer with 9 years of working experience in
          fields like sales, customer support, social media, and management. I
          combine my management expertise with technical skills and fully commit
          to consistency, meeting deadlines, and utilizing all available
          resources to achieve results.I enjoy creating beautiful, accessible,
          and responsive websites using HTML, CSS, Tailwind, Sass, SCSS, Vanilla
          JavaScript, and React. Effective use of time, problem-solving, and
          communication skills help me show a positive attitude in complex
          situations, and my desire to learn quickly adapts me to changing
          situations.
        </p>
        <h3 className="title-font white-text ">
          Here are a few tools & technologies I’ve been working with:
        </h3>

        <ol className="stack-section ">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Tailwind</li>
          <li>SCSS/SASS</li>
          <li>JavaScript ES6+</li>
          <li>React.js</li>
          <li>RESTful API</li>
          <li>Github</li>
          <li>Git</li>
          <li>Figma</li>
          <li>Visual Studio Code</li>
        </ol>
      </section>
      <a className="download-btn" href={Resume} download="Ekaterine-Mitagvaria">
        <img src={DownloadIcon} alt="" className="download-img"></img>Download
        Resume
      </a>

      <section>
        <h2 className="title-font  pink-text h2-tag">Work Experience</h2>
        <section className="work-experience">
          {ExperienceData.map((info) => (
            <section>
              <section>
                <h3 className="h3-tag">{info.jobtitle}</h3>
              </section>
              <section className="section-2">
                <p>{info.companyname} - </p>
                <p>{info.worktype}</p>
              </section>
              <section>
                <p>{info.duration}</p>
              </section>
              <section>
                <p>{info.location}</p>
              </section>
              <section>
                <ol className="responsibilities ul-tag">
                  {info.responsibility.map((data) => (
                    <li>{data}</li>
                  ))}
                </ol>
              </section>
            </section>
          ))}
        </section>
      </section>
      <section>
        <h2 className="title-font  pink-text h2-tag">Education</h2>
        <section className="education">
          {EducationData.map((info) => (
            <section>
              <section>
                <h3 className="">{info.name}</h3>
                <p>{info.status}</p>
                <p>{info.year}</p>
              </section>
            </section>
          ))}
        </section>
      </section>
      <section>
        <h2 className="title-font  pink-text h2-tag">Languages</h2>
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
        <a
          className="download-btn"
          href={Resume}
          download="Ekaterine-Mitagvaria"
        >
          <img src={DownloadIcon} alt="" className="download-img"></img>Download
          Resume
        </a>
      </section>
      <section>
        <h2 className="title-font  pink-text h2-tag">Certifications</h2>
        <section className="certification">
          {CertificationData.map((info) => (
            <section>
              <section>
                <h3 className="h3-tag">{info.name}</h3>
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
      <Footer />
    </article>
  );
};

export default About;
