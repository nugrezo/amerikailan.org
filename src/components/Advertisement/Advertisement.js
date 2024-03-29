import React from "react";
import { Link } from "react-router-dom";
import logo from "../../library/logo.png";
import "./Advertisement.css";
import Usermenu from "../Usermenu/Usermenu";
import emlakicon from "../../library/advicons/emlak-icon.png";
import vehicleicon from "../../library/advicons/vehicle-icon.png";
import electronicicon from "../../library/advicons/electronic-icon.png";
import servicesicon from "../../library/advicons/services-icon.png";
import jobicon from "../../library/advicons/job-icon.png";
import corporate from "../../library/advicons/corporate.png";

import Footer from "../Footer/Footer";

const Advertisement = () => {
  return (
    <div className="advertisement">
      <div className="container">
        <nav className="navbar">
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} width="200px;" height="60px;" alt="logo" />
            </Link>
          </div>
          <div className="nav-userProfile">
            <Usermenu />
          </div>
        </nav>
      </div>
      <div className="main-box">
        <main className="advertisement_main">
          <div>
            <div className="category-select-header">
              <h2>Please select the category</h2>
            </div>
            <div className="category-select-body">
              <Link
                to="/advertisement/realestate/category_s1"
                alt="emlak_stepone"
              >
                <div className="category category-select-body-emlak">
                  <i className="icon emlak-icon">
                    <img src={emlakicon} alt="emlak-icon" />
                  </i>
                  <h3>Real Estate</h3>
                </div>
              </Link>
              <Link to="/advertisement/vehicle/category_s1" alt="vehicle">
                <div className="category category-select-body-vasita">
                  <i className="icon vehicle-icon">
                    <img src={vehicleicon} alt="vehicle-icon" />
                  </i>
                  <h3>Vehicle</h3>
                </div>
              </Link>
              <Link
                to="/advertisement/electronic/category_s1"
                alt="elektronikcihaz"
              >
                <div className="category category-select-body-elektronikcihaz">
                  <i className="icon electronic-icon">
                    <img src={electronicicon} alt="electronic-icon" />
                  </i>
                  <h3>Electronic</h3>
                </div>
              </Link>
              <Link to="/advertisement/services/category_s1" alt="hizmet">
                <div className="category category-select-body-hizmet">
                  <i className="icon services-icon">
                    <img src={servicesicon} alt="services-icon" />
                  </i>
                  <h3> Services</h3>
                </div>
              </Link>
              <a href="#" alt="isilanlari">
                <div className="category category-select-body-isilanlari">
                  <i className="icon job-icon">
                    <img src={jobicon} alt="job-icon" />
                  </i>
                  <h3>Job</h3>
                </div>
              </a>
              <a href="#" alt="sirketler">
                <div className="category category-select-body-sirketler">
                  <i className="icon company-icon">
                    <img src={corporate} alt="company-icon" />
                  </i>
                  <h3>Company</h3>
                </div>
              </a>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Advertisement;
