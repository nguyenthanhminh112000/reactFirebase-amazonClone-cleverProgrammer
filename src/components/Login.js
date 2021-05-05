import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './../firebase';

const Login = () => {
  console.log('Login');
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const authentication = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      if (authentication) {
        history.push('/');
      }
    } catch (error) {
      alert(error.message);
    }
    e.preventDefault();
    // doing Sign In stuff
  };
  const handleSignUp = async (e) => {
    // doing Sign Up stuff
    try {
      const authentication = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(authentication);
      if (authentication) {
        history.push('/');
      }
    } catch (error) {
      alert(error.message);
    }
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
