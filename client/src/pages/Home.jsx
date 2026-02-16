import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className='hero' style={{
        minHeight: '90vh',
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80") center/cover fixed no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container animate fade-in">
          <h1 className="hero-title" style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Elevate Your <span style={{ color: 'var(--primary-color)' }}>Streetwear</span>
          </h1>
          <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: '0.9' }}>
            Discover the most exclusive collection of premium sneakers, designed for those who dare to stand out. Comfort meets iconic style.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to='/products' className='btn'>Shop Now</Link>
            <Link to='/about' className='btn btn-secondary' style={{ color: 'white', borderColor: 'white' }}>Learn More</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title animate slide-up">Why Choose SneakHub?</h2>
          <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="stat-card animate slide-up" style={{ animationDelay: '0.1s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>🚀</div>
              <h3>Fast & Free Shipping</h3>
              <p style={{ color: 'var(--text-light)' }}>Get your kicks delivered to your doorstep in record time, with free shipping on orders over $150.</p>
            </div>
            <div className="stat-card animate slide-up" style={{ animationDelay: '0.2s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>🛡️</div>
              <h3>100% Authentic</h3>
              <p style={{ color: 'var(--text-light)' }}>Every pair is verified by our expert team. We guarantee authenticity or your money back.</p>
            </div>
            <div className="stat-card animate slide-up" style={{ animationDelay: '0.3s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>💬</div>
              <h3>24/7 Support</h3>
              <p style={{ color: 'var(--text-light)' }}>Our dedicated support team is here to assist you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ background: '#F8F9FA' }}>
        <div className="container">
          <h2 className="section-title animate slide-up">Trending Now</h2>
          <div className="products-grid">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={item} className="product-card animate slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div style={{
                  height: '280px',
                  backgroundImage: `url(https://images.unsplash.com/photo-160${item}231-mock)`, // Just a placeholder pattern
                  backgroundColor: '#eee',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} className="product-image"></div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Air Max Pulse {item}</h3>
                    <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>$149.00</span>
                  </div>
                  <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1rem' }}>Running / Lifestyle</p>
                  <button className="btn btn-secondary" style={{ width: '100%', fontSize: '0.8rem', padding: '10px' }}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section" style={{ background: 'var(--bg-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Stay in the Loop</h2>
          <p style={{ marginBottom: '2rem', opacity: '0.8' }}>Subscribe to our newsletter for exclusive drops and special offers.</p>
          <form style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '12px 20px',
                borderRadius: '30px',
                border: 'none',
                outline: 'none'
              }}
            />
            <button className="btn" style={{ borderRadius: '30px' }}>Subscribe</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Home;