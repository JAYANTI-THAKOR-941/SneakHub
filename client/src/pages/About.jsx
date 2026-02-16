import React from 'react';

const About = () => {
  return (
    <>
      <section className="section bg-white" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="animate slide-in-left">
              <h2 className="section-title" style={{ textAlign: 'left', left: 0, transform: 'none', marginBottom: '1.5rem' }}>Our Story</h2>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-light)' }}> redefining sneaker culture since 2026.</h3>
              <p style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>
                At SneakHub, we believe that every step matters. Founded in 2026, we started with a simple mission: to provide sneaker enthusiasts with access to the most exclusive and comfortable footwear from top brands around the globe.
              </p>
              <p style={{ color: 'var(--text-main)' }}>
                We're more than just a store; we're a community of dreamers, creators, and believers who know that the right pair of shoes can take you anywhere.
              </p>
            </div>
            <div className="animate fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sneaker Workshop"
                style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="grid-2" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div className="stat-card animate slide-up">
              <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>50k+</h1>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card animate slide-up" style={{ animationDelay: '0.1s' }}>
              <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>100%</h1>
              <p>Authenticity</p>
            </div>
            <div className="stat-card animate slide-up" style={{ animationDelay: '0.2s' }}>
              <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>500+</h1>
              <p>Exclusive Drops</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="grid-2">
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Innovation</h3>
              <p>We constantly seek new ways to improve the shopping experience and bring you the latest in footwear technology.</p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Community</h3>
              <p>We build connections through our shared passion for style, hosting events and supporting local creatives.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;