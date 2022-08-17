import { NavLink } from "react-router-dom";

const NavigationMenu = (props) => {
  return (
    <section className="menu-links">
      <NavLink
        to="/"
        className=" gray-text "
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
      >
        Main
      </NavLink>
      <NavLink
        to="/about"
        className="gray-text"
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: "none",
                color: "#fd1056",
              }
            : {}
        }
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className="gray-text"
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: "none",
                color: "#fd1056",
              }
            : {}
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className="gray-text"
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: "none",
                color: "#fd1056",
              }
            : {}
        }
      >
        Contact
      </NavLink>
    </section>
  );
};

export default NavigationMenu;
