import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    // doing Sign In stuff
    console.log(email);
    console.log(password);
  };
  const handleSignUp = (e) => {
    // doing Sign Up stuff
    console.log('a');
  };
  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='Amazon logo'
          className='login__image'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <label htmlFor='login__email'>E-mail</label>
          <input
            type='email'
            id='login__email'
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor='login__password'>Password</label>
          <input
            type='password'
            id='login__password'
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            type='submit'
            value='Sign in'
            className='login__submit'
            onClick={handleSignIn}
          />
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={handleSignUp}>Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
