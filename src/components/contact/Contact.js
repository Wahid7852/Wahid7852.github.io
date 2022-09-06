import Footer from "../footer/Footer";

const Contact = () => {
  document.title = "Contact | Catherine Mitagvaria";
  function sendEmail() {
    window.open(
      "mailto:ekaterine.jpg@gmail.com?subject=SendMail&body=Description"
    );
  }
  return (
    <article className="contact-main">
      <h2 className="title-font pink-text h2-tag">Contact Me</h2>
      <br></br>
      <p className="white-text p-tag">
        If you are interested to hire me I am always open to new opportunities
        and interesting projects! Feel free to contact me if you have any other
        requests or questions regarding web development.
      </p>
      <button className="sendemail-btn" onClick={sendEmail}>
        Send Email
      </button>
      <Footer />
    </article>
  );
};

export default Contact;
