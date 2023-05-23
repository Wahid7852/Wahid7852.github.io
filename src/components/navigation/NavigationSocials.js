import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import telegram from "../../assets/images/socials/telegram.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/wahidkhan7852/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/Wahid7852"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
      <a
        href="https://telegram.me/Abdul7852"
        target="_blank"
        rel="noreferrer"
      >
        <img src={telegram} alt="" />
      </a>
    </section>
  );
};

export default NavigationSocials;
