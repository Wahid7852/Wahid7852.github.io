const ContactPreview = () => {
  function sendEmai() {
    window.open(
      "mailto:ekaterine.jpg@gmail.com?subject=SendMail&body=Description"
    );
  }
  return (
    <article className="contact">
      <section>
        <h2 className="title-font pink-text h2-tag">Contact Me</h2>
        <br></br>
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
    </article>
  );
};

export default ContactPreview;
