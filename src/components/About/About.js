import Footer from "../footer/Footer";
import Certifications from "./Certifications";
import Languages from "./Languages";
import Stack from "./Stack";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import DownloadResume from "./DownloadResume";
import AboutMe from "./AboutMe";

const About = () => {
  document.title = "About | Catherine Mitagvaria";
  return (
    <article className="about-main">
      <AboutMe />
      <Stack />
      <DownloadResume />
      <WorkExperience />
      <Education />
      <Languages />
      <DownloadResume />
      <Certifications />
      <Footer />
    </article>
  );
};

export default About;
