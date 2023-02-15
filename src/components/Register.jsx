import React from "react";
import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../fire";
import { ref, set, onValue } from "firebase/database";

export const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        set(ref(db, "users/" + userCredential.user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email,
        });
        console.log("funciona onSubmit", userCredential);
      })
      .catch((error) => {
        alert(error, "Enter a valid data");
      });
    navigate("/");

    let data = ref(db, "users/");
    onValue(data, (snapshot) => {
      data = snapshot.val();
      console.log(data);
    });
  };

  return (
    <div className='content'>
      <Header />
      <h1> Regístrate </h1>
      <form>
        <input
          type='text'
          placeholder='First Name'
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <input
          type='text'
          placeholder='Last Name'
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <input
          type='email'
          placeholder='Email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type='password'
          placeholder='Password'
          required
          minLength='6'
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type='password'
          id='ConfirmPasswordField'
          placeholder='Confirm password'
        />
        <br />
        <br />
        <button type='submit' onClick={onSubmit}>
          Regístrate
        </button>
      </form>
      <Footer />
    </div>
  );
};
