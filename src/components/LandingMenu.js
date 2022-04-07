import { NavLink, Link } from "react-router-dom";
import Whiteham from "../images/hamburger-white.png";
import WhiteXham from "../images/x-ham-white.png";
import IconBlack from "../images/icon-black.png";
import Linkedin from "../images/linkedin-pink.svg";
import Github from "../images/github-pink.svg";
import Codepen from "../images/codepen-pink.svg";

const SideMenu = () => {
  function ToggleMenu() {
    const Hiddenmenu = document.querySelector(".main-menu");
    Hiddenmenu.classList.toggle("active-menu");
  }
  function HideMenu() {
    const Hiddenmenu = document.querySelector(".main-menu");
    Hiddenmenu.classList.remove("active-menu");
    const HamIcon = document.querySelector(".ham-menu");
    HamIcon.src = Whiteham;
  }
  function ResetLocation() {
    window.scrollTo(0, 0);
  }
  function changeHamburger() {
    const Hiddenmenu = document.querySelector(".main-menu");
    const HamIcon = document.querySelector(".ham-menu");
    if (Hiddenmenu.classList.contains("active-menu")) {
      HamIcon.src = WhiteXham;
    } else {
      HamIcon.src = Whiteham;
    }
  }
  return (
    <article className="side-menu">
      <section className="ham-section">
        <img
          className="ham-menu"
          src={Whiteham}
          alt=""
          onClick={() => {
            ToggleMenu();
            changeHamburger();
          }}
        ></img>
      </section>
 
      <section className="main-menu">
        <Link
          to="/personal-portfolio"
          className="logo-section"
          onClick={() => {
            ResetLocation();
            HideMenu();
          }}
        >
          <img src={IconBlack} alt=""></img>
        </Link>
     
        <section className="menu-links">
          <NavLink
            to="/personal-portfolio"
            className=" gray-text "
            onClick={() => {
              ResetLocation();
              HideMenu();
            }}
          >
            Main
          </NavLink>
          <NavLink
            to="/personal-portfolio/about"
            className="gray-text"
            onClick={() => {
              ResetLocation();
              HideMenu();
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/personal-portfolio/portfolio"
            className="gray-text"
            onClick={() => {
              ResetLocation();
              HideMenu();
            }}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/personal-portfolio/contact"
            className="gray-text"
            onClick={() => {
              ResetLocation();
              HideMenu();
            }}
          >
            Contact
          </NavLink>
        </section>
        <section className="social-media">
          <a
            href="https://www.linkedin.com/in/catherinemitagvaria/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
          <a
            href="https://github.com/catherineisonline"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
          <a
            href="https://codepen.io/catherineisonline"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Codepen} alt="codepen" />
          </a>
          
        </section>
        <section className="menu-email"><span className="myemail-txt">&lt; / ekaterine.jpg@gmail.com &gt;</span></section> 
      
      </section>
    </article>
  );
};

export default SideMenu;
