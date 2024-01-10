import React from "react";
import logo from "../../library/logo.png";
import "./Advertisement.css";
import Usermenu from "../Usermenu/Usermenu";
import emlakicon from "../../library/advicons/emlak-icon.png";
import vehicleicon from "../../library/advicons/vehicle-icon.png";
import electronicicon from "../../library/advicons/electronic-icon.png";
import servicesicon from "../../library/advicons/services-icon.png";
import jobicon from "../../library/advicons/job-icon.png";
import Footer from "../Footer/Footer";

const Advertisement = () => {
  return (
    <div className="advertisement">
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
      <div className="main-box">
        <main className="advertisement_main">
          <div>
            <div className="category-select-header">
              <h2>Ilan vermek istediginiz kategoriyi secin</h2>
            </div>
            <div className="category-select-body">
              <a
                href="http://localhost:3000/advertisement/realestate_main/step_one"
                alt="emlak_stepone"
              >
                <div className="category category-select-body-emlak">
                  <i className="icon emlak-icon">
                    <img src={emlakicon} alt="emlak-icon" />
                  </i>
                  <h3>Emlak</h3>
                </div>
              </a>
              <a
                href="http://localhost:3000/advertisement/vehicle"
                alt="vehicle"
              >
                <div className="category category-select-body-vasita">
                  <i className="icon vehicle-icon">
                    <img src={vehicleicon} alt="vehicle-icon" />
                  </i>
                  <h3>Vasita</h3>
                </div>
              </a>
              <a href="#" alt="elektronikcihaz">
                <div className="category category-select-body-elektronikcihaz">
                  <i className="icon electronic-icon">
                    <img src={electronicicon} alt="electronic-icon" />
                  </i>
                  <h3>Elektronik Cihaz</h3>
                </div>
              </a>
              <a href="#" alt="hizmet">
                <div className="category category-select-body-hizmet">
                  <i className="icon services-icon">
                    <img src={servicesicon} alt="services-icon" />
                  </i>
                  <h3>Hizmet</h3>
                </div>
              </a>
              <a href="#" alt="isilanlari">
                <div className="category category-select-body-isilanlari">
                  <i className="icon job-icon">
                    <img src={jobicon} alt="job-icon" />
                  </i>
                  <h3>Is Ilanlari</h3>
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
