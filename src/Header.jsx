import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

export const Header = () => {
  return (
    <>
      <img className='logo' src={logo} alt='logo de star wars' />
      <p className='login'>LOG IN // SIGN UP</p>
      <div className='linia'>
        <p className='nav'>HOME</p>
        <p className='nav'>STARSHIP</p>
      </div>
    </>
  );
};
