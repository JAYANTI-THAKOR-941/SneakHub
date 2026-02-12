import React, { useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import api from '../services/api.js';

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      await api.post('/user/verifyOtp',{email,otp})
      navigate('/login')
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setOtp(e.target.value)} placeholder='Enter otp' />
        <button>VerifyOtp</button>
      </form>
    </div>
  )
}

export default VerifyOtp