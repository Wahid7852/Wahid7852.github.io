import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Wahid-Resume.pdf";
const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Wahid-Resume">
        <img
          src={DownloadIcon}
          alt="Download icon"
          className="download-img"
        ></img>
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
