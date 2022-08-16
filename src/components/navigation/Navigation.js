import Whiteham from "../../images/hamburger-white.png";
import WhiteXham from "../../images/x-ham-white.png";
import NavigationEmail from "./NavigationEmail";
import NavigationHamburger from "./NavigationHamburger";
import NavigationLogo from "./NavigationLogo";
import NavigationMenu from "./NavigationMenu";
import NavigationSocials from "./NavigationSocials";

const Navigation = () => {
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
      <NavigationHamburger
        ToggleMenu={ToggleMenu}
        changeHamburger={changeHamburger}
      />
      <section className="main-menu">
        <NavigationLogo ResetLocation={ResetLocation} HideMenu={HideMenu} />
        <NavigationMenu ResetLocation={ResetLocation} HideMenu={HideMenu} />
        <NavigationSocials />
        <NavigationEmail />
      </section>
    </article>
  );
};

export default Navigation;
