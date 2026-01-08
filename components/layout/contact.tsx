"use client";

import { useContactForm } from "./useContactForms";

export default function Contact() {
  const { formRef, handleSubmit, status } = useContactForm();

  function getButtonText() {
    if (status === "loading") return "Sending...";
    if (status === "success") return "Submited";
    if (status === "error") return "Failed";
    return "Send";
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-box">
          {/* LEFT: contact info (restored) */}
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

          {/* RIGHT: form */}
          <div className="contact-form">
            <h3 className="title">Contact me</h3>

            <form ref={formRef} onSubmit={handleSubmit}>
              {/* Web3Forms required hidden fields */}
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
                type="hidden"
                name="from_name"
                value="Contact Initiated"
              />

              {/* honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                aria-hidden="true"
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
                  required
                ></textarea>
              </div>

              {/* IMPORTANT: use your existing .btn styles */}
              <button
                type="submit"
                className="submit-btn"
                disabled={status === "loading"}
              >
                {getButtonText()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
