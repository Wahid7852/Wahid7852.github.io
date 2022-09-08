const SendEmail = () => {
  function sendEmai() {
    window.open(
      "mailto:ekaterine.jpg@gmail.com?subject=SendMail&body=Description"
    );
  }
  return (
    <button className="sendemail-btn" onClick={sendEmai}>
      Send Email
    </button>
  );
};

export default SendEmail;
