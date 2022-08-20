import { NavLink } from "react-router-dom";
import IconBlack from "../../images/icon-black.png";
import ResetLocation from "../actions/ResetLocation";
import HideMenu from "../actions/HideMenu";
const NavigationLogo = () => {
  return (
    <NavLink
      to="/"
      className="logo-section"
      onClick={() => {
        ResetLocation();
        HideMenu();
      }}
    >
      <img src={IconBlack} alt=""></img>
    </NavLink>
  );
};

export default NavigationLogo;
