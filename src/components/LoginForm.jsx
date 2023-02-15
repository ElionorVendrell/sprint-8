import React, { useState } from "react";
import { auth } from "../fire";
import { signInWithEmailAndPassword } from "firebase/auth";
//import { firebase } from "firebase/app";
import "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem(
          "Auth Token",
          userCredential._tokenResponse.refreshToken
        );
        alert("it's ok");
      })
      .catch((error) => {
        setError(error.message);
        alert("invalid", error);
      });
  };

  return (
    <form className='formLogin'>
      <input
        className='inputEmail'
        type='email'
        placeholder='Email'
        autoComplete='on'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className='inputPass'
        type='password'
        placeholder='Contraseña'
        required
        minLength='6'
        autoComplete='off'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit} type='submit'>
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;
