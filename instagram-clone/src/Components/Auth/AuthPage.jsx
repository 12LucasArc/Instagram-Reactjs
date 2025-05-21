import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './AuthPage.css';
import instaLogo from '/src/assets/instagram logo.png'; 

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', username: '' });

  const toggleMode = () => setIsSignup(!isSignup);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log('Signup form submitted:', form);
      navigate('/home');
      
    } else {
      console.log('Login form submitted:', form);
      navigate('/home');
     
    }
  };

  return (
    <div className="authContainer">
      <div className="authCard">
        <img src={instaLogo} alt="Instagram" className="authLogo" />
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isSignup ? 'Sign up' : 'Log in'}</button>
        </form>
        <div className="switchMode">
          {isSignup ? 'Have an account?' : "Don't have an account?"}{' '}
          <span onClick={toggleMode}>
            {isSignup ? 'Log in' : 'Sign up'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
