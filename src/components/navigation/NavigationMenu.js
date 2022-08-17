import { NavLink } from "react-router-dom";

const NavigationMenu = (props) => {
  return (
    <section className="menu-links">
      <NavLink
        to="/personal-portfolio"
        className=" gray-text "
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
      >
        Main
      </NavLink>
      <NavLink
        to="/personal-portfolio/about"
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
        to="/personal-portfolio/portfolio"
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
        to="/personal-portfolio/contact"
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
