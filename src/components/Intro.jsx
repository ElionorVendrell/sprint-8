import React from "react";
import "./../styles/intro.css";
import logo from "../assets/logo.png";
import stars from "../assets/stars.jpg";

export const Intro = () => {
  return (
    <div className='star-wars-intro'>
      <p className='intro-text'></p>

      <h2 className='main-logo'>
        <img src={logo} alt='logo de star wars' />
      </h2>

      <div className='main-content'>
        <div className='title-content'>
          <p className='content-header'>
            Hace mucho tiempo,
            <br />
            en una galaxia muy, <br />
            muy lejana... <br /> <br />
            Episodio IV <br />
            Una Nueva Esperanza
          </p>

          <br></br>

          <p className='content-body'>
            Es un periodo de guerra civil. Naves espaciales rebeldes, atacando
            desde una base secreta, han ganado su primera batalla en contra del
            malvado Imperio Galáctico.
          </p>
          <p className='content-body'>
            Durante la batalla, los espías rebeldes lograron robar los planos de
            la mas moderna arma del impero, La Estrella de la Muerte, una
            estación espacial armada, con poder suficiente para destruir a un
            planeta entero.
          </p>
          <p className='content-body'>
            Perseguida por el impero, La Princesa Leia huye, resguardando los
            planos robados para restaurar la paz y libertad en la galaxia....
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};
