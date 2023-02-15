import React, { useContext, useEffect } from "react";
import { StarsContext } from "../context/context";
import "./../styles/index.css";
import { BoxStarShips } from "../styles/Styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/intro.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

function ShipList() {
  const StarShips = useContext(StarsContext);

  const [showComponent, setShowComponent] = useState(false);
  const [currentShip, setCurrentShip] = useState("");

  useEffect(() => {
    setShowComponent(!showComponent);
  }, [currentShip]);

  const saveName = (shipName) => {
    setCurrentShip(shipName);
  };

  return (
    <div className='content'>
      {StarShips.map((startShip) => (
        <Link
          className='linkList'
          to={"/CardShip/" + startShip.name}
          key={startShip.name}
        >
          <BoxStarShips
            key={startShip.name}
            onClick={() => saveName(startShip.name)}
          >
            <div className='divBox'>
              <p className='starShipName'>{startShip.name.toUpperCase()}</p>
              <p className='starShipModel'>{startShip.model}</p>
            </div>
          </BoxStarShips>
        </Link>
      ))}
    </div>
  );
}

export default ShipList;
