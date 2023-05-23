import AboutPreview from "./AboutPreview";
import HeaderPreview from "./HeaderPreview";
import PortfolioPreview from "./PortfolioPreview";
import ContactPreview from "./ContactPreview";
import { Footer } from "../../components";
import ScrollButton from "../../components/ScrollButton";

const Mainpage = () => {
  document.title = "Abdul Wahid Khan | Personal Portfolio";
  return (
    <article className="main-page">
      <HeaderPreview />
      <AboutPreview />
      <PortfolioPreview />
      <ContactPreview />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default Mainpage;
