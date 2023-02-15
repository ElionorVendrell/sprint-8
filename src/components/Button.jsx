import React, { useEffect, useState } from "react";
import { StarsContext } from "../context/context";
import { useContext } from "react";
import { Button } from "../styles/Styled";

// useState de Page
// useState de Loading
// fetchFunction() per afegir page a la url

export const ButtonMore = () => {
  const StarShips = useContext(StarsContext);
  const page = useContext(StarsContext);

  console.log("starships a button", StarShips);

  const [newPage, setNewPage] = useState(page);
  const [shipArray, setShipArray] = useState(StarShips);

  console.log("arrayNaus", shipArray);

  const sumPage = () => {
    setNewPage(newPage + 1);
    console.log("pagina a button", newPage);
    console.log("shipArray", shipArray);
  };

  /*  const sumPage = () => {
    setLoading(true);
    fetchFunction().then(() => {
      setPage(page + 1);
      setLoading(false);
    });

    console.log("log page", page);
  };
 */
  return (
    <div>
      <Button onClick={() => sumPage()}>View More</Button>
    </div>
  );
};
