/** @format */

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Vicky' && password === 'Vik') {
      handleLogin(username, password);
      navigate('/shop');
    } else {
      alert('Incorrect username or password');
    }
  };
  return (
    <div className='login-container'>
      <h3>Input Your Login Details To Enter The Store </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type='text'
            value={username}
            placeholder='e.g John Stones'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
