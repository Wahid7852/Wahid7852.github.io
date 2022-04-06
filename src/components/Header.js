import { Link } from "react-router-dom";

const Header = () => {
  return (
    <article className="header">
      <h1 className="title-font white-text">
        Hi, I'm <br></br>
        <em className="pink-text">Catherine Mitagvaria</em>
        <br></br>aspiring web developer
      </h1>
      <p className="gray-text">Front End Development</p>
      <Link className="pink-text" to="/catherine-mitagvaria/portfolio">
        Check my work
      </Link>
    </article>
  );
};

export default Header;
