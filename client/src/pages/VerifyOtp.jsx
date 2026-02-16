import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/user/verifyOtp', { otp });
      if (res.status === 200) {
        alert(res.data.message);
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      alert('Invalid OTP');
    }
  };

  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="form-container animate fade-in" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--secondary-color)', fontSize: '2rem' }}>Verify OTP</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
            Please enter the 6-digit code sent to your email address.
          </p>
          <form onSubmit={handleVerify}>
            <div className="form-group">
              <input
                type="text"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                maxLength="6"
                style={{
                  textAlign: 'center',
                  letterSpacing: '10px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  padding: '16px'
                }}
              />
            </div>
            <button type="submit" className="btn" style={{ width: '100%' }}>Verify Account</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VerifyOtp;