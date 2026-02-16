import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams, Link, useNavigate } from "react-router-dom";

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const [adding, setAdding] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add items to cart");
      navigate("/login");
      return;
    }

    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    try {
      setAdding(true);
      await api.post("/cart/add", {
        productId: product._id,
        size: selectedSize,
        quantity: 1
      });
      alert("Added to Cart!");
      setAdding(false);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add to cart");
      setAdding(false);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data } = await api.get(`/product/${id}`);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id])

  if (loading) return (
    <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
      <h2 className="animate pulse">Loading Details...</h2>
    </div>
  );

  if (!product) return (
    <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
      <h2>Product not found</h2>
      <Link to="/products" className="btn btn-secondary">Back to Collection</Link>
    </div>
  );

  return (
    <section className="section bg-white">
      <div className="container animate fade-in">
        <Link to="/products" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--text-light)' }}>
          &larr; Back to Collection
        </Link>
        <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          {/* Image Section */}
          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          {/* Details Section */}
          <div>
            <h3 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              {product.category}
            </h3>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>
              {product.name}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2rem', lineHeight: 1.8 }}>
              {product.longDescription || product.description}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', fontWeight: '600' }}>Select Size:</h4>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {(product.sizes && product.sizes.length > 0 ? product.sizes : [7, 8, 9, 10, 11]).map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      width: '45px', height: '45px',
                      borderRadius: '50%',
                      border: `2px solid ${selectedSize === size ? 'var(--primary-color)' : '#ddd'}`,
                      background: selectedSize === size ? 'var(--primary-color)' : 'white',
                      color: selectedSize === size ? 'white' : 'var(--text-main)',
                      cursor: 'pointer',
                      fontWeight: '600',
                      transition: '0.2s'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--secondary-color)' }}>₹{product.price}</h2>
              <button
                className="btn"
                style={{ flex: 1, padding: '16px 32px' }}
                onClick={handleAddToCart}
                disabled={adding}
              >
                {adding ? "Adding..." : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;