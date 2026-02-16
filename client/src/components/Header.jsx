import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
          <Link to='/admin'>Dashboard</Link>
          <Link to='/cart' style={{ fontWeight: 'bold' }}>Cart</Link>
        </nav>
        <div className="btns">
          <Link to='/login' className='btn'>Login</Link>
        </div>
      </div>
    </header>
  )
}

export default Header