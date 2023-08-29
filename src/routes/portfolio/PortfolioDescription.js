const PortfolioDescription = () => {
  return (
    <section className="portfolio-text">
      <h2 className="title-font pink-text h2-tag">My Portfolio</h2>
      <p className="white-text p-tag">
      "I've dedicated considerable time to various projects that I truly enjoy. Some of my favorites encapsulate my
      knowledge well. While I've undertaken numerous small projects from diverse courses and challenges to grasp the
      fundamentals. You can explore them on my {" "}
          <span>
            <a
              href="https://github.com/Wahid7852?tab=repositories"
              // bold the text
              className="pink-text"
              target="_blank"
              rel="noreferrer"
            >
          Github
          </a>
        </span>
      </p>
    </section>
  );
};

export default PortfolioDescription;
