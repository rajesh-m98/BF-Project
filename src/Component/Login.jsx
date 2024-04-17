// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error:', error.response.data.message);
      setMessage(error.response.data.message);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('/verify-otp', { email, otp });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error:', error.response.data.message);
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleLogin}>Send OTP</button>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
