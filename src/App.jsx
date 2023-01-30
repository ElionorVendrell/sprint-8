import React, { useContext } from "react";
import { StarsContext } from "./context/context";
import "./index.css";
import { BoxStarShips } from "./Styled";

function App() {
  const StarShips = useContext(StarsContext);
  console.log("valor", StarShips);

  return (
    <div>
      {StarShips.map((startShip) => (
        <BoxStarShips key={startShip.name}>
          <p> Nom: {startShip.name} </p>
          <br></br>
          <p> Model:{startShip.model} </p>
        </BoxStarShips>
      ))}
    </div>
  );
}

export default App;
