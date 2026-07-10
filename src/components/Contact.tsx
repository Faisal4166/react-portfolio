import "../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-tag">Contact Me</span>

          <h2>Let's Build Something Together</h2>

          <p>
            Have a project idea or want to work together? Feel free to reach
            out. I am always open to discussing new opportunities.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="icon">✉️</div>

              <div>
                <h3>Email</h3>
                <p>jaspreetshien@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon">💻</div>

              <div>
                <h3>GitHub</h3>
                <p>github.com/jaspreetshien</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon">🔗</div>

              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/jaspreetshien</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>

            <div className="form-group">
              <textarea rows={5} placeholder="Your Message" />
            </div>

            <button type="submit">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
