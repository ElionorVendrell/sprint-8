import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import "../styles/index.css";

export const Welcome = () => {
  return (
    <>
      <div className='navWelcome'>
        <Header />
      </div>
      <Intro />
      <Footer />
    </>
  );
};
