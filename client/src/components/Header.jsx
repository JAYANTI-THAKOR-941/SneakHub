import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const checkUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user data", e);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();

    // Listen for storage events (cross-tab)
    window.addEventListener('storage', checkUser);

    // Listen for custom auth-change events (same-tab)
    window.addEventListener('auth-change', checkUser);

    return () => {
      window.removeEventListener('storage', checkUser);
      window.removeEventListener('auth-change', checkUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.dispatchEvent(new Event('auth-change'));
    navigate('/login');
  };

  return (
    <header className='header'>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <h1>Sneak<span>Hub</span></h1>
        </Link>
        <nav className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/services'>Services</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
          {user && user.role === 'admin' && <Link to='/admin'>Dashboard</Link>}
          <Link to='/cart' style={{ fontWeight: 'bold' }}>Cart</Link>
        </nav>
        <div className="btns">
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                title={user.name}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#333',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  border: '2px solid var(--primary-color, #e53935)'
                }}
              >
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <button
                onClick={handleLogout}
                className='btn'
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to='/login' className='btn'>Login</Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header