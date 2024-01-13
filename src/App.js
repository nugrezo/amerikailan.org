import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/SignIn";
import Register from "./components/Register/Register";
import Advertisement from "./components/Advertisement/Advertisement";
import Payment from "./components/Payment/Payment";
import PhoneApprovalRealEstate from "./components/RealEstate/PhoneApprovalRealEstate";
import PhoneApprovalVehicle from "./components/Vehicle/PhoneApprovalVehicle";
import VehicleDetail from "./components/Vehicle/VehicleDetail";
import PromoteAdvertisement from "./components/RealEstate/PromoteAdvertisement";
import PromoteVehicleAdvertisement from "./components/Vehicle/PromoteVehicleAdvertisement";
import VehicleAdvPublish from "./components/Vehicle/VehicleAdvPublish";
import RealEstateCategory from "./components/RealEstate/RealEstateCategory";
import RealEstateDetails from "./components/RealEstate/RealEstateDetails";
import RealEstatePublish from "./components/RealEstate/RealEstatePublish";
import VehicleCategory from "./components/Vehicle/VehicleCategory";

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
            path="/advertisement/realestate/category_s1"
            element={<RealEstateCategory />}
          />
          <Route
            path="/advertisement/realestate/cellaprv_s2"
            element={<PhoneApprovalRealEstate />}
          />
          <Route
            path="/advertisement/realestate/realestate_details_s3"
            element={<RealEstateDetails />}
          />
          <Route
            path="/advertisement/realestate/promote_s4"
            element={<PromoteAdvertisement />}
          />
          <Route
            path="/advertisement/realestate/publish_s5"
            element={<RealEstatePublish />}
          />
          <Route
            path="/advertisement/realestate/secure_payment"
            element={<Payment />}
          />
          <Route path="/advertisement/vehicle" element={<VehicleCategory />} />
          <Route
            path="/advertisement/vehicle/cellaprv_s2"
            element={<PhoneApprovalVehicle />}
          />
          <Route
            path="/advertisement/vehicle/vehicle_details_s3"
            element={<VehicleDetail />}
          />
          <Route
            path="/advertisement/vehicle/promote_s4"
            element={<PromoteVehicleAdvertisement />}
          />
          <Route
            path="/advertisement/vehicle/publish_s5"
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
