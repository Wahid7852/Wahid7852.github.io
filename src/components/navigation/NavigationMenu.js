import { NavLink } from "react-router-dom";

const NavigationMenu = (props) => {
  return (
    <section className="menu-links">
      <NavLink
        to="/"
        className={({ isActive }) =>
          "gray-text nav-link" + (isActive ? " main-active" : "")
        }
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
      >
        Main
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
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
          props.ResetLocation();
          props.HideMenu();
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
          props.ResetLocation();
          props.HideMenu();
        }}
      >
        Contact
      </NavLink>
    </section>
  );
};

export default NavigationMenu;
