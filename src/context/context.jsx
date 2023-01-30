import { createContext } from "react";
import React from "react";
import { useState, useEffect } from "react";
import App from "../App";

export const StarsContext = createContext();

export const StarsContextProvider = (props) => {
  const fetchFunction = () => {
    return fetch("https://swapi.dev/api/starships/").then((res) => res.json());
  };
  const [startShips, setStartShips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFunction()
      .then((res) => {
        setStartShips(res.results);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  console.log(startShips);

  return (
    <div>
      {loading ? (
        <div className='loader'>
          <span>Loading...</span>
        </div>
      ) : (
        <StarsContext.Provider value={startShips}>
          <App />
        </StarsContext.Provider>
      )}
    </div>
  );
};
