import { BrowserRouter, Route, Routes } from "react-router-dom"; // S'ha d'instal·lar react-router
import { StarShipCard } from "../StarShipCard";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index path='/ShipList/' element={<App />} />
      <Route path='/ShipCard/' element={<StarShipCard />} />

    </Routes>
  </BrowserRouter>
);

export default Router;
