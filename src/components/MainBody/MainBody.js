/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MainBody.css";

import Slider from "../PopulerIlanlar/PopulerIlanlar";
import VitrinIlan from "../VitrinIlan/VitrinIlan";
import Footer from "../Footer/Footer";

const MainBody = () => {
  return (
    <div>
      <div id="main-body">
        <div className="left-menu">
          <div className="left-menu-alt kategori">
            <div className="main left-menu-head">
              <h3>Categories</h3>
              <div className="left-menu-head-hizlierisim">
                <ul>
                  <li>
                    <a href="#">Popular Commercials</a>
                  </li>
                  <li>
                    <a href="#">Last 48 hours commercials</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="left-menu-alt icerik">
            <h4>Real Estate</h4>
            <ul>
              <li>
                <a href="#">Apartment</a>
              </li>
              <li>
                <a href="#">Ofis</a>
              </li>
              <li>
                <a href="#">Land</a>
              </li>
              <li>
                <a href="#">Building</a>
              </li>
              <li>
                <a href="#">Touristic Facility</a>
              </li>
            </ul>
            <h4>Vehicle</h4>
            <ul>
              <li>
                <a href="#">Car</a>
              </li>
              <li>
                <a href="#">Motorbike</a>
              </li>
              <li>
                <a href="#">SUV & Pick-Up</a>
              </li>
              <li>
                <a href="#">Commercial Vehicle</a>
              </li>
              <li>
                <a href="#">Rental</a>
              </li>
            </ul>
            <h4>Electronic</h4>
            <ul>
              <li>
                <a href="#">Computer</a>
              </li>
              <li>
                <a href="#">Mobile Phone</a>
              </li>
              <li>
                <a href="#">Other</a>
              </li>
            </ul>
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Construction & Decoration</a>
              </li>
              <li>
                <a href="#">Tourism & Travel & Hotel</a>
              </li>
              <li>
                <a href="#">Technical Service</a>
              </li>
              <li>
                <a href="#">Personal Development</a>
              </li>
              <li>
                <a href="#">Jewellery</a>
              </li>
              <li></li>
              <li>
                <a href="#">Health</a>
              </li>
              <li>
                <a href="#">Gastronomy</a>
              </li>
              <li>
                <a href="#">Market & Bakery</a>
              </li>
            </ul>
            <h4>Job</h4>
            <ul>
              <li>
                <a href="#">Seeking Job</a>
              </li>
              <li>
                <a href="#">Offering Job</a>
              </li>
            </ul>
            <h3>
              <a href="#">Chat & Meet</a>
            </h3>
          </div>
        </div>
        <div className="vitrin">
          <div className="vitrin vitrin-row1">
            <h3 className="h3-vitrin-row1">POPULAR COMMERCIALS</h3>
            <Slider />
          </div>
          <div className="vitrin vitrin-row2">
            <h3 className="h3-vitrin-row2">SHOWCASE COMMERCIALS</h3>
            <VitrinIlan />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainBody;
