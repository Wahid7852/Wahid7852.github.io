import Whiteham from "../../images/hamburger-white.png";

const NavigationHamburger = (props) => {
  return (
    <section className="ham-section">
      <img
        className="ham-menu"
        src={Whiteham}
        alt=""
        onClick={() => {
          props.ToggleMenu();
          props.changeHamburger();
        }}
      ></img>
    </section>
  );
};

export default NavigationHamburger;
