import React, { useContext, useEffect } from "react";
import { StarsContext } from "./context/context";
import "./index.css";
import { BoxStarShips } from "./Styled";
import { Header } from "./Header";
import { StarShipCard } from "./StarShipCard";
import { useState } from "react";
//import { Link } from "react-router-dom";

function ShipList() {
  const StarShips = useContext(StarsContext);

  const [showComponent, setShowComponent] = useState(false);
  const [nom, setNom] = useState("");

  const changeNom = (nou) => {
    setNom(nou);
  };

  const showComponentFunction = () => {
    setShowComponent(!showComponent);
  };

  useEffect(() => {
    showComponentFunction();
  }, [nom]);

  return (
    <div>
      <Header />
      {showComponent ? (
        StarShips.map((startShip) => (
          <BoxStarShips
            key={startShip.name}
            onClick={() => changeNom(startShip.name)}
          >
            <div className='divBox'>
              <p className='starShipName'>{startShip.name.toUpperCase()}</p>
              <p className='starShipModel'>{startShip.model}</p>
            </div>
          </BoxStarShips>
        ))
      ) : (
        <StarShipCard key={nom} name={nom} />
      )}
    </div>
  );
}

export default ShipList;
