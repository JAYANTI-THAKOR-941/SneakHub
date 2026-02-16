import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://sneakhub-ydsl.onrender.com/api/user/register', { name, email, password });
      alert(res.data.message);
      if (res.status === 201) {
        navigate('/verifyOtp');
      }
    } catch (error) {
      console.error(error);
      alert('Registration failed.');
    }
  };

  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="form-container animate fade-in">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--secondary-color)', fontSize: '2rem' }}>Create Account</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type='submit' className='btn' style={{ width: '100%', marginTop: '1rem' }}>Register</button>
          </form>
          <p style={{ marginTop: '1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>
            Already have an account? <Link to='/login' style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Login here</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;