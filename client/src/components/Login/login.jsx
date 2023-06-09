import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    // You can validate the form inputs and make API calls to authenticate the user
    console.log('Login Submitted!');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic here
    // You can validate the form inputs and make API calls to register the user
    console.log('Registration Submitted!');
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <form>
          <h2>Doctor Register</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Doctor ID"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Re-enter password"
              value={reEnterPassword}
              onChange={(e) => setReEnterPassword(e.target.value)}
              required
            />
          </div>
          <div className="buttons">
            <button className='register' type="submit" onClick={handleRegister}>Register</button>
            <button type="submit" onClick={handleLogin}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
