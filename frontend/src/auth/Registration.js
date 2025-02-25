import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    // Add API call here to create a new user
    navigate('/login');
  };

  return (
    <div className="registration-page">
      <h1>Register</h1>
      <form onSubmit={handleRegistration}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
