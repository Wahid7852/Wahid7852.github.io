
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const About = () => {
  return (
    <article className="about">
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
      <section className="about-cotainer-2">
        <h2 className="title-font  pink-text">Stack &#38; Technologies</h2>
        <section className="stack-section">
        <Carousel
        autoPlay="true"
        interval="2000"
        infiniteLoop="true"
        >
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
          </Carousel>
        </section>
      </section>
    </article>
  );
};

export default About;
