import Whiteham from "../../images/hamburger-white.png";
import WhiteXham from "../../images/x-ham-white.png";
import NavigationEmail from "./NavigationEmail";
import NavigationHamburger from "./NavigationHamburger";
import NavigationLogo from "./NavigationLogo";
import NavigationMenu from "./NavigationMenu";
import NavigationSocials from "./NavigationSocials";
import { useState } from "react";
import React from "react";
const Navigation = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const ref = React.useRef();
  function ToggleMenu() {
    return hiddenMenu
      ? setHiddenMenu(false) || (ref.current.src = WhiteXham)
      : setHiddenMenu(true) || (ref.current.src = Whiteham);
  }
  return (
    <article className="side-menu">
      <NavigationHamburger ToggleMenu={ToggleMenu} ref={ref} />
      <section className={`main-menu${hiddenMenu ? `` : ` active-menu`}`}>
        <NavigationLogo ToggleMenu={ToggleMenu} />
        <NavigationMenu ToggleMenu={ToggleMenu} />
        <NavigationSocials />
        <NavigationEmail />
      </section>
    </article>
  );
};

export default Navigation;
