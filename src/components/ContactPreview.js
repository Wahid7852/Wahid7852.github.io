


const ContactPreview = () => {
  function sendEmai() {
    window.open(
      "mailto:ekaterine.jpg@gmail.com?subject=SendMail&body=Description"
    );
  }
  return (
    <article className="contact">
         <section>
        <h2 className="title-font pink-text">Email Me</h2>
        <br></br>
        <span className="myemail-txt">&lt; / ekaterine.jpg@gmail.com &gt;</span>
        <p className="white-text">
          If you are interested to hire me I am always open to new opportunities
          and interesting projects! Feel free to contact me if you have any
          other requests or questions regarding web development.
        </p>
        <section>
          <button class="sendemail-btn" onClick={sendEmai}>
            Send Email
          </button>
        </section>
      </section>
    </article>
  );
};

export default ContactPreview;
