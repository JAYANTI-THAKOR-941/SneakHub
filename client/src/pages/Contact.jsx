import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="section bg-white">
        <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title animate slide-up">Get in Touch</h2>
          <p className="animate slide-up" style={{ animationDelay: '0.1s', fontSize: '1.2rem', color: 'var(--text-light)' }}>
            Have a question or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
            {/* Contact Info */}
            <div className="animate fade-in" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--secondary-color)' }}>Contact Information</h3>

              <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>📍</span>
                <div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Our Store</h4>
                  <p style={{ color: 'var(--text-light)' }}>123 SneakHub St,<br />Sneaker City, NY 10001</p>
                </div>
              </div>

              <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>📞</span>
                <div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Phone</h4>
                  <p style={{ color: 'var(--text-light)' }}>+1 (555) 123-4567</p>
                </div>
              </div>

              <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>✉️</span>
                <div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Email</h4>
                  <p style={{ color: 'var(--text-light)' }}>support@sneakhub.com</p>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '1rem' }}>Follow Us</h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {['IG', 'TW', 'FB', 'YT'].map((social, i) => (
                    <div key={i} style={{
                      width: '40px', height: '40px', borderRadius: '50%', background: '#eee',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold',
                      color: 'var(--secondary-color)', cursor: 'pointer', transition: '0.3s'
                    }} className="social-icon">
                      {social}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="form-container animate slide-up" style={{ animationDelay: '0.2s', width: '100%', maxWidth: '100%', margin: 0 }}>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;