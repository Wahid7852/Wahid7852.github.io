import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <article className="header">
      <h1 className="header-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="pink-text">Catherine</em>
        <br></br>web developer
      </h1>
      <p className="gray-text p-tag">Front End Development</p>
      <Link className="pink-text" to="/portfolio">
        Check my work
      </Link>
    </article>
  );
};

export default HeaderPreview;
