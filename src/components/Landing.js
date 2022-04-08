import AboutPreview from "./AboutPreview";
import HeaderPreview from "./HeaderPreview";
import PortfolioPreview from "./PortfolioPreview";
import ContactPreview from "./ContactPreview";
import Footer from "./Footer";

const Mainpage = () => {
  return (
    <article className="main-page">
      <HeaderPreview />
      <AboutPreview />
      <PortfolioPreview />
      <ContactPreview />
      <Footer />
    </article>
  );
};

export default Mainpage;
