import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/SignIn";
import Register from "./components/Register/Register";
import Advertisement from "./components/Advertisement/Advertisement";
import RealEstateMain from "./components/RealEstate/RealEstateMain";
import RealEstateSubStepThree from "./components/RealEstate/RealEstateSubStepThree";
import RealEstateSubStepFive from "./components/RealEstate/RealEstateSubStepFive";
import Payment from "./components/Payment/Payment";
import Vehicle from "./components/Vehicle/Vehicle";
import PhoneApprovalRealEstate from "./components/RealEstate/PhoneApprovalRealEstate";
import PhoneApprovalVehicle from "./components/Vehicle/PhoneApprovalVehicle";
import VehicleDetail from "./components/Vehicle/VehicleDetail";
import PromoteAdvertisement from "./components/RealEstate/PromoteAdvertisement";
import PromoteVehicleAdvertisement from "./components/Vehicle/PromoteVehicleAdvertisement";
import VehicleAdvPublish from "./components/Vehicle/VehicleAdvPublish";

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
            path="/advertisement/realestate_main/step_one"
            element={<RealEstateMain />}
          />
          <Route
            path="/advertisement/realestate_main/step_two"
            element={<PhoneApprovalRealEstate />}
          />
          <Route
            path="/advertisement/realestate_main/step_three"
            element={<RealEstateSubStepThree />}
          />
          <Route
            path="/advertisement/realestate_main/step_four"
            element={<PromoteAdvertisement />}
          />
          <Route
            path="/advertisement/realestate_main/step_five"
            element={<RealEstateSubStepFive />}
          />
          <Route
            path="/advertisement/realestate_main/secure_payment"
            element={<Payment />}
          />
          <Route path="/advertisement/vehicle" element={<Vehicle />} />
          <Route
            path="/advertisement/vehicle/step_two"
            element={<PhoneApprovalVehicle />}
          />
          <Route
            path="/advertisement/vehicle/step_three"
            element={<VehicleDetail />}
          />
          <Route
            path="/advertisement/vehicle/step_four"
            element={<PromoteVehicleAdvertisement />}
          />
          <Route
            path="/advertisement/vehicle/step_five"
            element={<VehicleAdvPublish />}
          />
          <Route
            path="/advertisement/vehicle/secure_payment"
            element={<Payment />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
