import React from "react";
import "./RealEstateMain.css";
import Usermenu from "../Usermenu/Usermenu";
import logo from "../../library/logo.png";
import RealEstateSubStepOne from "./RealEstateSubStepOne";
import Footer from "../Footer/Footer";

const RealEstateMain = () => {
  return (
    <div className="adv-realestate">
      <RealEstateSubStepOne />
      <Footer />
    </div>
  );
};

export default RealEstateMain;
