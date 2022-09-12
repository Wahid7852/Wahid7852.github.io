import Footer from "../footer/Footer.js";
import Certifications from "./Certifications.js";
import Languages from "./Languages.js";
import Stack from "./Stack.js";
import Education from "./Education.js";
import WorkExperience from "./WorkExperience.js";
import DownloadResume from "./DownloadResume.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../actions/ScrollButton.js";

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
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default About;
