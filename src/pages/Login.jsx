import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import LoginForm from "../components/LoginForm";
import "../styles/index.css";

export const Login = () => {
  return (
    <div className='content'>
      <Header />
      <h1>Acceder</h1>
      <LoginForm />
      <Footer />
    </div>
  );
};
