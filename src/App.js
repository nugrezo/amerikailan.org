import React from "react";
import Home from "./components/Home/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/SignIn";
import Register from "./components/Register/Register";
import Advertisement from "./components/Advertisement/Advertisement";
import Payment from "./components/Payment/Payment";
import VehicleDetail from "./components/Vehicle/VehicleDetail";
import RealEstateCategory from "./components/RealEstate/RealEstateCategory";
import RealEstateDetails from "./components/RealEstate/RealEstateDetails";
import VehicleCategory from "./components/Vehicle/VehicleCategory";
import ElectronicCategory from "./components/Electronic/ElectronicCategory";
import ElectronicDetail from "./components/Electronic/ElectronicDetail";
import ServicesCategory from "./components/Services/ServicesCategory";
import ServicesDetail from "./components/Services/ServicesDetail";
import PhoneApproval from "./components/PhoneApproval/PhoneApproval";
import PromoteAdv from "./components/PromoteAdv/PromoteAdv";
import Publish from "./components/Publish/Publish";

function App() {
  return (
    <div className="App">
      <HashRouter>
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
            element={<PhoneApproval />}
          />
          <Route
            path="/advertisement/realestate/realestate_details_s3"
            element={<RealEstateDetails />}
          />
          <Route
            path="/advertisement/realestate/promote_s4"
            element={<PromoteAdv />}
          />
          <Route
            path="/advertisement/realestate/publish_s5"
            element={<Publish />}
          />
          <Route
            path="/advertisement/realestate/secure_payment"
            element={<Payment />}
          />
          <Route
            path="/advertisement/vehicle/category_s1"
            element={<VehicleCategory />}
          />
          <Route
            path="/advertisement/vehicle/cellaprv_s2"
            element={<PhoneApproval />}
          />
          <Route
            path="/advertisement/vehicle/vehicle_details_s3"
            element={<VehicleDetail />}
          />
          <Route
            path="/advertisement/vehicle/promote_s4"
            element={<PromoteAdv />}
          />
          <Route
            path="/advertisement/vehicle/publish_s5"
            element={<Publish />}
          />
          <Route
            path="/advertisement/vehicle/secure_payment"
            element={<Payment />}
          />
          <Route
            path="/advertisement/electronic/category_s1"
            element={<ElectronicCategory />}
          />
          <Route
            path="/advertisement/electronic/cellaprv_s2"
            element={<PhoneApproval />}
          />
          <Route
            path="/advertisement/electronic/electronic_details_s3"
            element={<ElectronicDetail />}
          />
          <Route
            path="/advertisement/electronic/promote_s4"
            element={<PromoteAdv />}
          />
          <Route
            path="/advertisement/electronic/publish_s5"
            element={<Publish />}
          />

          <Route
            path="/advertisement/services/category_s1"
            element={<ServicesCategory />}
          />
          <Route
            path="/advertisement/services/cellaprv_s2"
            element={<PhoneApproval />}
          />
          <Route
            path="/advertisement/services/services_details_s3"
            element={<ServicesDetail />}
          />
          <Route
            path="/advertisement/services/promote_s4"
            element={<PromoteAdv />}
          />
          <Route
            path="/advertisement/services/publish_s5"
            element={<Publish />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
