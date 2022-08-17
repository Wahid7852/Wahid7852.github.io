import { NavLink } from "react-router-dom";
import IconBlack from "../../images/icon-black.png";

const NavigationLogo = (props) => {
  return (
    <NavLink
      to="/personal-portfolio"
      className="logo-section"
      onClick={() => {
        props.ResetLocation();
        props.HideMenu();
      }}
    >
      <img src={IconBlack} alt=""></img>
    </NavLink>
  );
};

export default NavigationLogo;
