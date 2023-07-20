import React, { useRef } from 'react';
import './SignInScreen.css';
import { auth } from '../firebase';
import db from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function SignInScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    try {
      const authUser = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);

      console.log(authUser);
    }
    catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='signInScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>
          <span className='signInScreen__gray'>New to Netflix? </span> <span className='signInScreen__link' onClick={register}>Sign Up now.</span>

        </h4>
      </form>
    </div>
  )
}

export default SignInScreen;
