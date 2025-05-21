import React, { useState } from 'react';
import './AuthPage.css';
import instaLogo from '/src/assets/instagram logo.png';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', username: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { triggerSplash } = useAuth(); 

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setError('');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, form.email, form.password);
      } else {
        await signInWithEmailAndPassword(auth, form.email, form.password);
      }

      triggerSplash();
      setTimeout(() => {
        navigate('/home');
      }, 5000);
      
    } catch (err) {
      setError(err.message);
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
          {error && <div className="errorMsg">{error}</div>}
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
