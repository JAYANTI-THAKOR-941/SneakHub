import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    longDescription: '',
    category: '',
    price: '',
    stock: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/product/add', formData);
      alert('Product added successfully!');
      navigate('/admin/products');
    } catch (error) {
      console.error(error);
      alert('Failed to add product');
    }
  };

  return (
    <div className="animate fade-in">
      <div className="form-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '2rem', color: 'var(--secondary-color)', textAlign: 'center' }}>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid-2" style={{ gap: '2rem' }}>
            <div>
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleChange} required>
                  <option value="">Select Category</option>
                  <option value="Running">Running</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Training">Training</option>
                </select>
              </div>
              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label>Price (₹)</label>
                  <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Stock</label>
                  <input type="number" name="stock" value={formData.stock} onChange={handleChange} required />
                </div>
              </div>
            </div>
            <div>
              <div className="form-group">
                <label>Short Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} maxLength="100" required />
              </div>
              <div className="form-group">
                <label>Long Description</label>
                <textarea name="longDescription" value={formData.longDescription} onChange={handleChange} rows="4"></textarea>
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="https://..." required />
              </div>
            </div>
          </div>

          <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }}>Create Product</button>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ width: '100%', marginTop: '1rem' }}
            onClick={() => navigate('/admin/products')}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;