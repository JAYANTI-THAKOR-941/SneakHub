import React from 'react';

const Services = () => {
  const servicesList = [
    {
      icon: "🌍",
      title: "Global Shipping",
      desc: "We deliver your sneakers anywhere in the world with reliable tracking and secure packaging."
    },
    {
      icon: "✨",
      title: "Authenticity Guarantee",
      desc: "Every pair is verified by our team of experts. 100% authentic or your money back."
    },
    {
      icon: "🧼",
      title: "Sneaker Care",
      desc: "Professional cleaning and restoration services to keep your kicks looking fresh."
    },
    {
      icon: "🎨",
      title: "Customization",
      desc: "Personalize your footwear with custom colors, materials, and unique artwork."
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      desc: "Not the right fit? No problem. Our hassle-free return policy has you covered."
    },
    {
      icon: "💎",
      title: "VIP Membership",
      desc: "Get early access to drops, exclusive discounts, and members-only events."
    }
  ];

  return (
    <>
      <section className="section bg-white" style={{ paddingBottom: '2rem' }}>
        <div className="container animate fade-in" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Our Services</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-light)' }}>
            We go beyond just selling shoes. Experience the premium services that set SneakHub apart.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {servicesList.map((service, index) => (
              <div key={index} className="card animate slide-up" style={{ padding: '2.5rem', animationDelay: `${index * 0.1}s` }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-light)' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;