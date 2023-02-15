import { createContext } from "react";
import React from "react";
import { useState, useEffect } from "react";
import App from "../App";
import { Button } from "../styles/Styled";

export const StarsContext = createContext();

export const StarsContextProvider = (props) => {
  const fetchFunction = async () => {
    const response = await fetch(
      `https://swapi.dev/api/starships/?page=${page}`
    );
    return await response.json();
  };
  const [starShips, setStarShips] = useState([]);

  //para mantener la página actual
  const [page, setPage] = useState(1);

  //funcion para cambiar page
  const sumPage = () => {
    fetchFunction().then(() => {
      if (page >= 4) {
        setPage(1);
      } else setPage(page + 1);
    });

    console.log("log page", page);
  };

  //funcion para hacer llamada a la API y actualizar cuando cambie page
  useEffect(() => {
    fetchFunction()
      .then((response) => {
        setStarShips(response.results);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [page]);

  console.log(page);

  return (
    <div>
      <StarsContext.Provider value={starShips}>
        <App />
        <Button onClick={() => sumPage()}>View More</Button>
      </StarsContext.Provider>
    </div>
  );
};
export default StarsContext;

/* 
import { createContext } from "react";
import React from "react";
import { useState, useEffect } from "react";
//import App from "../App";
import { Loading } from "../components/Loading";
import ShipList from "../components/ShipList";
import { Button } from "../styles/Styled";

export const StarsContext = createContext();

export const StarsContextProvider = (props) => {
  const fetchFunction = async () => {
    const response = await fetch(
      `https://swapi.dev/api/starships/?page=${page}`
    );
    return await response.json();
  };
  const [starShips, setStarShips] = useState([]);
  const [loading, setLoading] = useState(true);

  //para mantener la página actual
  const [page, setPage] = useState(1);

  //funcion para cambiar page
  const sumPage = () => {
    setLoading(true);
    fetchFunction().then(() => {
      if (page >= 4) {
        setPage(1);
      } else setPage(page + 1);
      setLoading(false);
    });

    console.log("log page", page);
  };

  //funcion para hacer llamada a la API y actualizar cuando cambie page
  useEffect(() => {
    fetchFunction()
      .then((response) => {
        setStarShips(response.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [page]);

  console.log(page);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <StarsContext.Provider value={starShips}>
          <ShipList />
          <Button onClick={() => sumPage()}>View More</Button>
        </StarsContext.Provider>
      )}
    </div>
  );
};
export default StarsContext;

 */
