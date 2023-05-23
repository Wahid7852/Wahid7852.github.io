import Projects from "./Projects";
import Footer from "../../components/footer/Footer";
import PortfolioDescription from "./PortfolioDescription";
import ScrollButton from "../../components/ScrollButton";

const Portfolio = () => {
  document.title = "Portfolio | Abdul Wahid Khan";
  return (
    <article className="portfolio-main">
      <PortfolioDescription />
      <Projects />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default Portfolio;
