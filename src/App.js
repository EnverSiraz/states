import "./App.css";
import EventDetails from "./ComponentsFolder/EventDetails";

import Mainpage from "./ComponentsFolder/Mainpage";
import { Route, Routes } from "react-router-dom";
import Footer from "./EventsProjectFolder/Footer";

import FirstComp from "./ComponentsFolder/FirstComp";

function App() {
  return (
    <>
    <FirstComp/>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
      <Footer/>
    

    </>
  );
}

export default App;
