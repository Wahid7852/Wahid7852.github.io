import { NavLink } from "react-router-dom";
import ResetLocation from "../actions/ResetLocation";
const NavigationMenu = (props) => {
  return (
    <section className="menu-links">
      <NavLink
        to="/"
        className={({ isActive }) =>
          "gray-text nav-link" + (isActive ? " main-active" : "")
        }
        onClick={() => {
          ResetLocation();
          props.ToggleMenu();
        }}
      >
        Main
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => {
          ResetLocation();
          props.ToggleMenu();
        }}
        className={({ isActive }) =>
          "gray-text nav-link" + (isActive ? " active" : "")
        }
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          "gray-text nav-link" + (isActive ? " active" : "")
        }
        onClick={() => {
          ResetLocation();
          props.ToggleMenu();
        }}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          "gray-text nav-link" + (isActive ? " active" : "")
        }
        onClick={() => {
          ResetLocation();
          props.ToggleMenu();
        }}
      >
        Contact
      </NavLink>
    </section>
  );
};

export default NavigationMenu;
