import React, { useContext } from "react";
import { StarsContext } from "./context/context";
import "./index.css";
import { BoxStarShips } from "./Styled";
import logo from "./assets/logo.png";

function App() {
  const StarShips = useContext(StarsContext);
  console.log("StarShips a APP", StarShips);

  return (
    <div>
      <img className='logo' src={logo} alt='logo de star wars' />

      {StarShips.map((startShip) => (
        <BoxStarShips key={startShip.name}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              className='starShipName'
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              {" "}
              {startShip.name.toUpperCase()}
            </p>
            <p
              className='starShipModel'
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "-14px",
                marginLeft: "0px",
              }}
            >
              {startShip.model}
            </p>
          </div>
        </BoxStarShips>
      ))}
    </div>
  );
}

export default App;
