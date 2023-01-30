import React from "react";
import { StarsContext } from "./context/context";
import { useContext } from "react";

export const StarShipCard = (name) => {
  const StarShips = useContext(StarsContext);
  console.log("StarShips a Starships card", StarShips);

  return (
    <>
      {StarShips.map((starShip) => {
        if (starShip.name === name) {
          <>
            <p>Nom: {starShip.name}</p>
            <img />
            <p>Starship class: {starShip.starship_class}</p>
            <p>Manufacturer: {starShip.manufacturer}</p>
            <p>Cost: {starShip.cost_in_credits} credits</p>
            <p>Crew: {starShip.crew}</p>
            <p>Passenger Capacity: {starShip.passengers}</p>
            <p>Consumables: {starShip.consumables}</p>
            <p>Length: {starShip.length} meters</p>
            <p>
              Maximum atmosphering speed: {starShip.max_atmosphering_speed} KM/H
            </p>
            <p>Hyperdrive rating: {starShip.hyperdrive_rating}</p>
            <p>Maximum speed in realspace: {starShip.MGLT} MGLT</p>
          </>;
        }
      })}
    </>
  );
};
