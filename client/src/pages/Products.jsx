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
      setLoading(true);
      try {
        const { data } = await api.get('/product/all');
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Unexpected data format:", data);
          setError("Received invalid data from server.");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products from server. Please try again later.");
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