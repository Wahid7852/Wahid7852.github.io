import { ExperienceData } from "../../data/ExperienceData";

const WorkExperience = () => {
  return (
    <section className="work-experience">
      <h2 className="title-font  pink-text h2-tag">Work Experience</h2>
      {ExperienceData.map((info, index) => (
        <section key={index}>
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
              {info.responsibility.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ol>
          </section>
        </section>
      ))}
    </section>
  );
};
export default WorkExperience;
