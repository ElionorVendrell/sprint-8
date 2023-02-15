import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/index.css";

export const Header = () => {
  return (
    <>
      <Link to='/' className='linkLogo'>
        <img className='logo' src={logo} alt='logo de star wars' />
      </Link>
      <Link to='/Login' className='login'>
        LOG IN //
      </Link>
      <br></br>
      <Link to='/SignUp' className='login'>
        SIGN UP
      </Link>
      <div className='linia'>
        <Link to='/' className='nav'>
          HOME
        </Link>
        <Link to='/ShipList' className='nav'>
          STARSHIP
        </Link>
      </div>
    </>
  );
};
