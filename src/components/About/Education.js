import { EducationData } from "../ExperienceData";

export const Education = () => {
  return (
    <section>
      <h2 className="title-font  pink-text h2-tag">Education</h2>
      <section className="education">
        {EducationData.map((info, index) => (
          <section key={index}>
            <h3 className="">{info.name}</h3>
            <p>{info.status}</p>
            <p>{info.year}</p>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Education;
