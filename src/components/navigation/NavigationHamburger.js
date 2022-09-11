import Whiteham from "../../assets/images/hamburger-white.png";
import React from "react";
const NavigationHamburger = React.forwardRef((props, ref) => (
  <section className="ham-section">
    <img
      className="ham-menu"
      src={Whiteham}
      alt="hamburger menu"
      ref={ref}
      onClick={() => {
        props.ToggleMenu();
      }}
    ></img>
  </section>
));
export default NavigationHamburger;
