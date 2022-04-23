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
          After working in different fields for over 9 years and seeking
          something special, I have recently found my passion in web
          development, currently JavaScript and its frameworks. My latest job
          included social media and management however I decided to give it a go
          and dive into web developement field. I am looking forward to working
          on real projects!
        </p>
        <h3 className="title-font white-text ">
          Here are a few tools & technologies I’ve been working with:
        </h3>
    
        <ul className="stack-section ">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Tailwind</li>
          <li>SCSS/SASS</li>
          <li>Vanilla JavaScript ES6+</li>
          <li>React.js</li>
          <li>RESTful API</li>
          <li>Github</li>
          <li>Git</li>
          <li>Figma</li>
          <li>Visual Studio Code</li>
        </ul>
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
                <ul className="responsibilities ul-tag">
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
