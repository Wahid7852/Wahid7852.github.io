import Whiteham from "../../images/hamburger-white.png";

const NavigationHamburger = () => {
  return (
    <section className="ham-section">
      <img
        className="ham-menu"
        src={Whiteham}
        alt=""
        onClick={() => {
          this.props.ToggleMenu();
          this.props.changeHamburger();
        }}
      ></img>
    </section>
  );
};

export default NavigationHamburger;
