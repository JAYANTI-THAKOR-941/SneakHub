import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://sneakhub-ydsl.onrender.com/api/user/login', { email, password });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      // Dispatch custom event for same-tab updates
      window.dispatchEvent(new Event('auth-change'));

      alert(res.data.message);

      if (res.data.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="form-container animate fade-in">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--secondary-color)', fontSize: '2rem' }}>Welcome Back</h2>
          <form onSubmit={handleLogin}>
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
            <button type='submit' className='btn' style={{ width: '100%', marginTop: '1rem' }}>Login</button>
          </form>
          <p style={{ marginTop: '1.5rem', textAlign: 'center', color: 'var(--text-light)' }}>
            Don't have an account? <Link to='/register' style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Register here</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;