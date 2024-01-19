import React, { useState, useContext } from "react";
import Usermenu from "../Usermenu/Usermenu";
import { useNavigate } from "react-router-dom";

import logo from "../../library/logo.png";
import "./PromoteElectronicAdvertisement.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import { AppContext } from "../ContextProvider";

const PromoteElectronicAdvertisement = () => {
  const { handleNext } = useContext(AppContext); // Access handleNext from context

  const [populerSelectValue, setPopulerSelectValue] = useState("");
  const [vitrinSelectValue, setVitrinSelectValue] = useState("");
  const navigate = useNavigate();

  const handlePopulerSelectChange = (event) => {
    const selectedValue = event.target.value;

    setPopulerSelectValue(selectedValue);
    // Disable corresponding option in vitrin select
    setVitrinSelectValue("");
  };

  const handleVitrinSelectChange = (event) => {
    const selectedValue = event.target.value;
    setVitrinSelectValue(selectedValue);
    // Disable corresponding option in populer select
    setPopulerSelectValue("");
  };

  const handleNavigateNext = () => {
    let amount = 0;

    if (populerSelectValue) {
      amount = parseFloat(populerSelectValue.replace(/[^\d.]/g, ""));
    } else if (vitrinSelectValue) {
      amount = parseFloat(vitrinSelectValue.replace(/[^\d.]/g, ""));
    }

    if (populerSelectValue || vitrinSelectValue) {
      handleNext();
      navigate("/advertisement/electronic/secure_payment", {
        state: { amount: isNaN(amount) ? "" : amount },
      });
    } else {
      handleNext();
      navigate("/advertisement/electronic/publish_s5");
    }
  };

  return (
    <div className="adv-electronic_step_four">
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
      <div className="adv-electronic_step_four_main">
        <h2>Ilaninizi On Plana Cikartin</h2>
        <div className="adv-electronic_step_four_main_wrapper">
          <div className="populer_adv_container">
            <h4>Populer Ilanlar</h4>
            <div className="populer_adv_container_main">
              <ul>
                <li>
                  Ilaninizi ana sayfada populer ilanlar bolumunde sergiler
                </li>
                <li>Ilaniniz ana sayfada hizlica hedef kitleye erisir</li>
                <li>Populer Ilan haftalik veya aylik olarak sergilenir</li>
              </ul>
            </div>
            <div className="populer_select_container">
              <label htmlFor="populer_select"></label>
              <select
                value={populerSelectValue}
                onChange={handlePopulerSelectChange}
              >
                <option value="" disabled={vitrinSelectValue !== ""}>
                  Seciniz
                </option>
                <option value="5.99" disabled={vitrinSelectValue !== ""}>
                  Haftalik $5.99
                </option>
                <option value="15.99" disabled={vitrinSelectValue !== ""}>
                  Aylik $15.99
                </option>
              </select>
            </div>
          </div>
          <div className="vitrin_adv_container">
            <h4>Vitrin Ilanlari</h4>
            <div className="populer_adv_container_main">
              <ul>
                <li>
                  Ilaninizi ana sayfada populer ilanlar bolumunde sergiler
                </li>
                <li>Ilaniniz ana sayfada hedef kitleye erisir</li>
                <li>Populer Ilan haftalik olarak sergilenir</li>
              </ul>
            </div>
            <div className="vitrin_select_container">
              <label htmlFor="vitrin_select"></label>
              <select
                value={vitrinSelectValue}
                onChange={handleVitrinSelectChange}
              >
                <option value="" disabled={populerSelectValue !== ""}>
                  Seciniz
                </option>
                <option value="3.99" disabled={populerSelectValue !== ""}>
                  Haftalik $3.99
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="adv_electronic_continue_btn">
          <button onClick={handleNavigateNext}>Devam</button>
        </div>
      </div>
    </div>
  );
};

export default PromoteElectronicAdvertisement;
