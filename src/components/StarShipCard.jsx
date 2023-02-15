import React, { useEffect, useState } from "react";
import { StarsContext } from "../context/context";
import { useContext } from "react";
import { useParams } from "react-router";
import "../styles/index.css";
import { BoxCard } from "../styles/Styled";

export const StarShipCard = () => {
  const StarShips = useContext(StarsContext);
  const [showShip, setShowShip] = useState({});

  const [error, setError] = useState(false);

  const currentShipName = useParams().shipName;
  console.log("currentShipName", currentShipName);

  const shipFiltered = StarShips.filter(
    (ship) => currentShipName === ship.name
  );

  useEffect(() => {
    setShowShip(shipFiltered[0]);
  }, [currentShipName]);

  console.log("currentShip filtered", showShip);

  const getId = showShip.url && showShip.url.slice(32, -1);
  const image = `https://starwars-visualguide.com/assets/img/starships/${getId}.jpg`;

  return (
    <>
      <div className='content'>
        <h1 className="titleShip">{showShip.name}</h1>
        {error ? (
          <p className='errorImage'>
            😢 Lo sentimos, no se pudo cargar la imagen
          </p>
        ) : (
          <img
          className="imgShip"
            src={image}
            onError={() => setError(true)}
            alt='Imagen de la nave'
          />
        )}{" "}
        <BoxCard>
          <div className='textCard'>
            <p>Starship class: {showShip.starship_class}</p>
            <p>Manufacturer: {showShip.manufacturer}</p>
            <p>Cost: {showShip.cost_in_credits} credits</p>
            <p>Crew: {showShip.crew}</p>
            <p>Passenger Capacity: {showShip.passengers}</p>
            <p>Consumables: {showShip.consumables}</p>
            <p>Length: {showShip.length} meters</p>
            <p>
              Maximum atmosphering speed: {showShip.max_atmosphering_speed} KM/H
            </p>
            <p>Hyperdrive rating: {showShip.hyperdrive_rating}</p>
            <p>Maximum speed in realspace: {showShip.MGLT} MGLT</p>
          </div>
        </BoxCard>
      </div>
    </>
  );
};
