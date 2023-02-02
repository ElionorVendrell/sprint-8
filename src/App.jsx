import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShipList from "./ShipList";
import { StarsContextProvider } from "./context/context";
import { StarShipCard } from "./StarShipCard";

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={ShipList} />
        <Route exact path='/StarShipCard' component={StarShipCard} />
      </div>
    </Router>
  );
}

export default App;
