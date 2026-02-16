import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Mock data fallback if API fails or for preview
        try {
          let res = await api.get('/product/all');
          setProducts(res.data);
        } catch (e) {
          console.warn("API failed, using mock data", e);
          setProducts([
            { _id: '1', name: 'Air Max Pulse', description: 'Comfortable running shoes', price: 149, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            { _id: '2', name: 'Jordan Delta 2', description: 'Futuristic design', price: 129, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            { _id: '3', name: 'Blazer Mid 77', description: 'Vintage basketball style', price: 99, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
            { _id: '4', name: 'Zoom Freak 3', description: 'Giannis Antetokounmpo signature', price: 119, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
          ]);
        }
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [])

  if (loading) return (
    <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <h2 className="animate pulse">Loading Collections...</h2>
    </div>
  );

  if (error && products.length === 0) return (
    <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <h2 style={{ color: 'red' }}>{error}</h2>
    </div>
  );

  return (
    <>
      <section className="section bg-white" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <h2 className="section-title animate slide-up">Our Collection</h2>
          <div className="products-grid">
            {products.map((p, index) => (
              <div
                className="product-card animate slide-up"
                key={p._id}
                style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                onClick={() => navigate(`/product/${p._id}`)}
              >
                <div style={{ height: '300px', overflow: 'hidden' }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div className="product-info" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>{p.name}</h3>
                    <span style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.2rem' }}>₹{p.price}</span>
                  </div>
                  <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', flex: 1 }}>{p.description.substring(0, 50)}...</p>
                  <button className="btn" style={{ width: '100%' }}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;