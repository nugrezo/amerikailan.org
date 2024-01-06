import React from "react";
import "./RealEstateMain.css";
import Usermenu from "../Usermenu/Usermenu";
import logo from "../../library/logo.png";
import RealEstateSubStepOne from "./RealEstateSubStepOne";
import Footer from "../Footer/Footer";

const RealEstateMain = () => {
  return (
    <div className="adv-realestate">
      <div>
        <div className="emlak-box">
          <div className="container">
            <nav className="navbar">
              <div className="nav-logo">
                <a className="navbar-brand" href="http://localhost:3000">
                  <img src={logo} width="200px;" height="60px;" alt="logo" />
                </a>
              </div>
              <div className="nav-userProfile">
                <Usermenu />
              </div>
            </nav>
          </div>
          <RealEstateSubStepOne />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RealEstateMain;
