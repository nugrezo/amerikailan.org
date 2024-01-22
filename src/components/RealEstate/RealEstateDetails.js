import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../ContextProvider"; // Import the ContextProvider
import "./RealEstateDetails.css";
import Usermenu from "../Usermenu/Usermenu";
import logo from "../../library/logo.png";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

import PhotoUpload from "./PhotoUpload/PhotoUploadRealEstate";
import RealEstateSubDetails from "./RealEstateSubDetails/RealEstateSubDetails";
import Address from "../Address/Address";
import ProgressBar from "../ProgressBar/ProgressBar";
// import Footer from "../Footer/Footer";

const RealEstateDetails = () => {
  const { userEmail, userName, userLastname } = useContext(AppContext);
  const { handleNext } = useContext(AppContext); // Access handleNext from context
  console.log("User Email from resst:", userEmail);
  console.log("User Name from resst:", userName);
  console.log("User Lastname from resst:", userLastname);

  useEffect(() => {
    console.log("RealEstateDetails component mounted");

    return () => {
      console.log("RealEstateDetails component unmounted");
    };
  }, []); // Empty dependency array to run this effect only once on mount

  const navigate = useNavigate();
  const handleNavigate = () => {
    handleNext();
    navigate("/advertisement/realestate/promote_s4");
  };

  return (
    <div className="adv-realestate_step_three">
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
      <ProgressBar />
      <div className="adv-realestate_step_three_main">
        <h3 id="emlak_description">3-Ilan Detaylari</h3>
        {console.log("Rendering RealEstateSubStepThree")}
        {console.log("User Email:", userEmail)}
        {console.log("User Name:", userName)}
        {console.log("User Lastname:", userLastname)}
        <div className="adv-realestate_wrapper">
          <h4>Commercial Contact Detail</h4>
          <div className="adv_realestate-contact_info">
            <div className="firstname">
              <p>Name</p>
              <input
                className="firstname_input"
                placeholder="isim giriniz"
                style={{ fontStyle: "italic" }}
                value={userName}
                readOnly
              ></input>
            </div>
            <div className="lastname">
              <p>Last Name</p>
              <input
                className="lastname_input"
                placeholder="soyad giriniz"
                style={{ fontStyle: "italic" }}
                value={userLastname}
                readOnly
              ></input>
            </div>
            <div className="user_email">
              <p>Email</p>
              <input
                className="user_email_input"
                value={userEmail}
                readOnly
              ></input>
            </div>
            <div className="cellPhone">
              <p>Phone No</p>
              <input className="cellPhone_number_input"></input>
            </div>
          </div>
          <h4>Commercial Detail</h4>
          <div className="adv_realestate-description_detail">
            <div className="adv_realestate-description_header">
              <p>Header</p>
              <input
                className="adv_realestate-description_header_input"
                placeholder="Ilana ait bir baslik giriniz"
              ></input>
            </div>

            <div className="adv_realestate-description_main">
              <p>Enter commerical details</p>
              <ReactQuill
                theme="snow"
                className="quill-container"
                placeholder="aciklama giriniz"
              />
              {/* <input className="adv_realestate-description_main_input"></input> */}
            </div>
          </div>
          <div className="adv_realestate-visuals">
            <h4>Visuals</h4>
            <div className="adv_realestate_visuals_photo">
              <PhotoUpload />
            </div>
          </div>
          <div className="price_container">
            <h4>Price Information</h4>
            <ul className="price_info">
              <li className="price_info_li">
                <label htmlFor="Fiyat">
                  <p>Price</p>
                  <input
                    name="price"
                    type="text"
                    placeholder="Ilana ait fiyat giriniz"
                  ></input>
                </label>
              </li>
              <li className="price_info_li">
                <label htmlFor="price_info">
                  <p>Currency</p>
                  <select>
                    <option value="">Select</option>
                    <option value="1">$ USD</option>
                  </select>
                </label>
              </li>
              <li className="price_info_li">
                <label htmlFor="price_info">
                  <p>Sure</p>
                  <select>
                    <option value="">Select</option>
                    <option value="1">$ Daily</option>
                    <option value="2">$ Weekly</option>
                    <option value="3">$ Monthly</option>
                    <option value="4">$ Yearly</option>
                  </select>
                </label>
              </li>
            </ul>
          </div>
          <RealEstateSubDetails />
          <Address />
        </div>
        <div className="adv_realestate_continue_btn">
          <button onClick={handleNavigate}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default RealEstateDetails;
