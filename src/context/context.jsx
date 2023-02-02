import { createContext } from "react";
import React from "react";
import { useState, useEffect } from "react";
import App from "../App";
import { Loading } from "./loading";
import ShipList from "../ShipList";

export const StarsContext = createContext();

export const StarsContextProvider = (props) => {
  const fetchFunction = async () => {
    const response = await fetch("https://swapi.dev/api/starships/");
    return await response.json();
  };
  const [startShips, setStartShips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFunction()
      .then((response) => {
        setStartShips(response.results);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error", error);
      });
  }, []);



  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <StarsContext.Provider value={startShips}>
          <ShipList />
        </StarsContext.Provider>
      )}
    </div>
  );
};
