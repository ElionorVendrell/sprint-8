import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShipList from "./ShipList";
import { StarShipCard } from "./StarShipCard";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<ShipList />} />
      <Route path='/CardShip/:shipName' element={<StarShipCard />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
