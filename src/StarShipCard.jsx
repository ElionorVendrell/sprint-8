import React, { useEffect, useState } from "react";
import { StarsContext } from "./context/context";
import { useContext } from "react";

export const StarShipCard = ({ name }) => {
  const [shipFiltered, setShipFiltered] = useState({});
  const StarShips = useContext(StarsContext);
  console.log("StarShips a Starships card", StarShips);
  console.log("name", name);

  useEffect(() => {
    setShipFiltered(StarShips.find((starShip) => starShip.name === name));
  }, [name]);

  console.log("FILTERED", shipFiltered);
  //console.log("nom del filtered", shipFiltered.name);

  return (
    <>
      <p>Nom: {shipFiltered.name}</p>
      <p>Starship class: {shipFiltered.starship_class}</p>
      <p>Manufacturer: {shipFiltered.manufacturer}</p>
      <p>Cost: {shipFiltered.cost_in_credits} credits</p>
      <p>Crew: {shipFiltered.crew}</p>
      <p>Passenger Capacity: {shipFiltered.passengers}</p>
      <p>Consumables: {shipFiltered.consumables}</p>
      <p>Length: {shipFiltered.length} meters</p>
      <p>
        Maximum atmosphering speed: {shipFiltered.max_atmosphering_speed} KM/H
      </p>
      <p>Hyperdrive rating: {shipFiltered.hyperdrive_rating}</p>
      <p>Maximum speed in realspace: {shipFiltered.MGLT} MGLT</p>
    </>
  );
};

/* 
export const StarShipCard = (name) => {
  const StarShips = useContext(StarsContext);
  console.log("StarShips a Starships card", StarShips);
  console.log("name", name);

  const shipFiltered = StarShips.filter(
    (starShip) => starShip.name === name.name
  )[0];

  console.log("FILTERED", shipFiltered);

  return (
    <>
      <p>Nom: {shipFiltered.name}</p>
      <p>shipFiltered class: {shipFiltered.starShip_class}</p>
      <p>Manufacturer: {shipFiltered.manufacturer}</p>
      <p>Cost: {shipFiltered.cost_in_credits} credits</p>
      <p>Crew: {shipFiltered.crew}</p>
      <p>Passenger Capacity: {shipFiltered.passengers}</p>
      <p>Consumables: {shipFiltered.consumables}</p>
      <p>Length: {shipFiltered.length} meters</p>
      <p>
        Maximum atmosphering speed: {shipFiltered.max_atmosphering_speed} KM/H
      </p>
      <p>Hyperdrive rating: {shipFiltered.hyperdrive_rating}</p>
      <p>Maximum speed in realspace: {shipFiltered.MGLT} MGLT</p>
    </>
  );
};
*/
