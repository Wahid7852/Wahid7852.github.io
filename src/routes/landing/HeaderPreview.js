import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <article className="header">
      <h1 className="header-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="pink-text">Abdul Wahid Khan</em>
        <br></br><article>Software Developer</article>
      </h1>
      <p className="gray-text p-tag">My Projects</p>
      <Link className="pink-text" to="/portfolio">
        Check my work
      </Link>
    </article>
  );
};

export default HeaderPreview;
