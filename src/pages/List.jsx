import React, { useEffect } from "react";
import { Footer } from "../components/Footer";
import ShipList from "../components/ShipList";
import { Header } from "../components/Header";
import { useContext } from "react";
import { StarsContext } from "../context/context";
import { Loading } from "../components/Loading";
import { useState } from "react";
import "../styles/index.css";

export const List = () => {
  const StarShips = useContext(StarsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    StarShips ? setLoading(false) : setLoading(true);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <Header /> <div className='space'></div> <ShipList /> <Footer />
        </>
      )}
    </div>
  );
};
