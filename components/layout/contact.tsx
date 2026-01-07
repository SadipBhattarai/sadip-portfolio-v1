export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact-info">
            <h3 className="title">Get in touch</h3>
            <p className="text">What do you have in Mind?</p>

            <div className="information-wrap">
              <div className="information">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <p className="info-text">
                  Bharatpur-4, Chitwan, Bagmati Provience, Nepal
                </p>
              </div>

              <div className="information">
                <div className="contact-icon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <p className="info-text">Sadipbhattarai97@gmail.com</p>
              </div>

              <div className="information">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <p className="info-text">+977 9700593239</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3 className="title">Contact me</h3>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="2dffdf49-9a98-4a4b-9152-a32b21fbb0a4"
              />
              <input
                type="hidden"
                name="subject"
                value="New message from your Website"
              />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />
              <input
                type="hidden"
                name="from_name"
                value="Contact Initiated"
              />

              <div className="row">
                <input
                  type="text"
                  className="contact-input"
                  name="name"
                  required
                  placeholder="Name"
                />
              </div>

              <div className="row">
                <input
                  type="text"
                  className="contact-input"
                  name="phone"
                  required
                  placeholder="Phone"
                />
                <input
                  type="email"
                  className="contact-input"
                  name="email"
                  required
                  placeholder="Email"
                />
              </div>

              <div className="row">
                <textarea
                  name="message"
                  className="contact-input textarea"
                  placeholder="Message"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" name="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
