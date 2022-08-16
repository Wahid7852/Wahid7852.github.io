import { NavLink } from "react-router-dom";
import IconBlack from "../../images/icon-black.png";

const NavigationLogo = () => {
  return (
    <NavLink
      to="/personal-portfolio"
      className="logo-section"
      onClick={() => {
        this.props.ResetLocation();
        this.props.HideMenu();
      }}
    >
      <img src={IconBlack} alt=""></img>
    </NavLink>
  );
};

export default NavigationLogo;
