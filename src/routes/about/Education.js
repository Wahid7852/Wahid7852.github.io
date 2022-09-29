import { EducationData } from "../../data/ExperienceData";

const Education = () => {
  return (
    <section className="education">
      <h2 className="title-font  pink-text h2-tag">Education</h2>
      {EducationData.map((info, index) => (
        <section key={index}>
          <h3 className="">{info.name}</h3>
          <p>{info.status}</p>
          <p>{info.year}</p>
        </section>
      ))}
    </section>
  );
};

export default Education;
