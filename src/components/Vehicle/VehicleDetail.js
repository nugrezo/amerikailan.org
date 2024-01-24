import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Usermenu from "../Usermenu/Usermenu";
import logo from "../../library/logo.png";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "./VehicleDetail.css";
import VehicleDetailSubComponent from "./VehicleDetailSubComponent";
import { AppContext } from "../ContextProvider";
import ProgressBar from "../ProgressBar/ProgressBar";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import Address from "../Address/Address";

// import Footer from "../Footer/Footer";

const VehicleDetail = () => {
  const { userEmail, userName, userLastname, handleNext } =
    useContext(AppContext);

  console.log("User Email from resst:", userEmail);
  console.log("User Name from resst:", userName);
  console.log("User Lastname from resst:", userLastname);
  const navigate = useNavigate();
  const handleNavigate = () => {
    handleNext();
    navigate("/advertisement/vehicle/promote_s4");
  };
  return (
    <div className="adv-vehicle_step_three">
      <div className="container">
        <nav className="navbar">
          <div className="nav-logo">
            <a className="navbar-brand" href="http://localhost:3000">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="nav-userProfile">
            <Usermenu />
          </div>
        </nav>
      </div>
      <ProgressBar />
      <div className="adv-vehicle_step_three_main">
        <h3 id="vehicle_description">3-Commercial Detail</h3>
        {console.log("Rendering vehicleSubStepThree")}
        {console.log("User Email:", userEmail)}
        {console.log("User Name:", userName)}
        {console.log("User Lastname:", userLastname)}
        <div className="adv-vehicle_wrapper">
          <h4>Commercial Contact Information</h4>
          <div className="adv_vehicle-contact_info">
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
          <h4>Commercial Details</h4>
          <div className="adv_vehicle-description_detail">
            <div className="adv_vehicle-description_header">
              <p>Header</p>
              <input
                className="adv_vehicle-description_header_input"
                placeholder="Ilana ait bir baslik giriniz"
              ></input>
            </div>

            <div className="adv_vehicle-description_main">
              <p>Enter Details</p>
              <ReactQuill
                theme="snow"
                className="quill-container"
                placeholder="aciklama giriniz"
              />
              {/* <input className="adv_vehicle-description_main_input"></input> */}
            </div>
          </div>
          <div className="adv_vehicle-visuals">
            <h4>Visuals</h4>
            <div className="adv_vehicle_visuals_photo">
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
                <label htmlFor="price_info"></label>
              </li>
            </ul>
          </div>
          <VehicleDetailSubComponent />
          <Address />
        </div>
        <div className="adv_vehicle_continue_btn">
          <button onClick={handleNavigate}>Devam</button>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
