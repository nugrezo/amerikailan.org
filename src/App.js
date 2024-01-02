import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/SignIn";
import Register from "./components/Register/Register";
import Advertisement from "./components/Advertisement/Advertisement";
import RealEstateMain from "./components/RealEstate/RealEstateMain";
import RealEstateSubStepTwo from "./components/RealEstate/RealEstateSubStepTwo";
import RealEstateSubStepThree from "./components/RealEstate/RealEstateSubStepThree";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Renders the <Login /> component when the path is the root URL ("/"). */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/advertisement" element={<Advertisement />} />
          <Route
            path="/advertisement/realestate_main"
            element={<RealEstateMain />}
          />
          <Route
            path="/advertisement/realestate_main/step_two"
            element={<RealEstateSubStepTwo />}
          />
          <Route
            path="/advertisement/realestate_main/step_three"
            element={<RealEstateSubStepThree />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
