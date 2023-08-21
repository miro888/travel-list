import { FormAndPackingList } from "./components/FormAndPackingList";
import Logo from "./components/Logo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  WeatherForcast from "./components/WeatherForcast";
import  CampingZone  from "./components/CampingZone";
import  Paths  from "./components/Paths";

export default function App() {
  return (
    <BrowserRouter>
      <Logo />
      <Routes>
        <Route path="trip_list" element={<FormAndPackingList />} />
        <Route path="/forcast" element={<WeatherForcast />} />
        <Route path="/routes" element={<Paths />} />
        <Route path="/campingzone" element={<CampingZone />} />
      </Routes>
    </BrowserRouter>
  );
}
