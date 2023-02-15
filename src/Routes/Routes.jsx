import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "../pages/Welcome";
import { List } from "../pages/List";
import { Login } from "../pages/Login";
import { Register } from "../components/Register";
import { StarShipCard } from "../components/StarShipCard";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Welcome />} />
      <Route path='/ShipList' element={<List />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<Register />} />
      <Route path='/CardShip/:shipName' element={<StarShipCard />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
