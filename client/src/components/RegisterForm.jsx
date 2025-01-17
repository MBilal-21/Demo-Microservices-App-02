// src/RegisterForm.js
import React, { useState } from 'react';

const RegisterForm = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setId(Date.now());
    try {
      const response = await fetch('http://localhost:5001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id,name, password }),
      });

      const data = await response.json();
      setMessage(data.message);
      if (response.ok) {
        console.log('Registration successful', data.user);
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error registering');
    }
  };

  return (
    <>
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </>
  );
};

export default RegisterForm;
