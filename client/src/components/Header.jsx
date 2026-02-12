import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <h1>Sneak<span>Hub</span></h1>
        </div>
        <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/services'>Services</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
        </div>
        <div className="btns">
            <button>Login</button>
        </div>
    </div>
  )
}

export default Header