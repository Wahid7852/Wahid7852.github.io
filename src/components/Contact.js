import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Contact = () => {
  document.title ="Contact | Catherine Mitagvaria"; 
  function sendEmai() {
    window.open(
      "mailto:ekaterine.jpg@gmail.com?subject=SendMail&body=Description"
    );
  }
  return (
    <article className="contact-main">
      <section>
        <h2 className="title-font pink-text h2-tag">Email Me</h2>
        <br></br>
        {/* <span className="myemail-txt">&lt; / ekaterine.jpg@gmail.com &gt;</span> */}
        <p className="white-text p-tag">
          If you are interested to hire me I am always open to new opportunities
          and interesting projects! Feel free to contact me if you have any
          other requests or questions regarding web development.
        </p>
        <section>
          <button className="sendemail-btn" onClick={sendEmai}>
            Send Email
          </button>
        </section>
      </section>
      <section>
        <h2 className="title-font pink-text h2-tag">Contact Me</h2>
        <p className="white-text p-tag">
          This form doesn't work yet but it's here because I like it and would
          love to make it fully functional.
        </p>
        <form></form>
      </section>
      <section>
        <ContactForm />
      </section>
      <Footer />
    </article>
  );
};

export default Contact;
