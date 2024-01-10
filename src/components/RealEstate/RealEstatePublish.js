import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RealEstatePublish.css";
import Usermenu from "../Usermenu/Usermenu";
import logo from "../../library/logo.png";
import checkmark from "../../library/advicons/greencheckmark.png";
import ProgressBar from "../ProgressBar/ProgressBar";

const RealEstatePublish = () => {
  const [publish, setPublish] = useState(false);
  const [publishNumber, setPublishNumber] = useState("");

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 9) + 1; // Generates a random number between 1 and 9
    const randomDigits = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");
    const resultNumber = randomNumber.toString() + randomDigits;
    setPublishNumber(resultNumber);
  };

  const handlePublishFormSubmit = (e) => {
    e.preventDefault();
    generateRandomNumber();
    setPublish(true);
  };

  return (
    <div className="adv_real_estate_publish">
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
      <div className="adv_publish_main">
        <h3 id="adv_publish_header">5-Ilani Yayinla</h3>
        <div className="adv_publish_form_main_wrapper">
          <h4>Yayinlanacak ilana ait bilgiler</h4>
          <div>
            <div className="adv_publish_form_result_wrapper">
              <div className="adv_publish_main_wrapper">
                <form
                  className="adv_publish_form"
                  onSubmit={handlePublishFormSubmit}
                >
                  <div className="adv_publish adv_user_name">
                    <label htmlFor="user_name">Isim</label>
                    <input type="text"></input>
                  </div>
                  <div className="adv_publish adv_user_lastname">
                    <label htmlFor="user_lastname">Soyisim</label>
                    <input type="text"></input>
                  </div>
                  <div className="adv_publish adv_user_email">
                    <label htmlFor="adv_email">E-mail</label>
                    <input type="email"></input>
                  </div>
                  <div className="adv_publish adv_user_address">
                    <label htmlFor="adv_address">Ilan Adresi</label>
                    <input type="text"></input>
                  </div>
                  <div className="adv_publish adv_user_tel">
                    <label htmlFor="adv_tel">Telefon No</label>
                    <input type="text"></input>
                  </div>
                  <div className="adv_publish adv_user_category">
                    <label htmlFor="adv_category">Ilan Kategorisi</label>
                    <input type="text"></input>
                  </div>
                  <div className="adv_publish adv_user_price">
                    <label htmlFor="adv_price">Ucret</label>
                    <input type="text"></input>
                  </div>
                  <div className="adv_publish adv_user_date">
                    <label htmlFor="adv_date">Ilan Tarihi</label>
                    <input type="text"></input>
                  </div>
                  <div className="adv_publish_btn">
                    <button type="submit" className="publish_btn">
                      Ilani Yayinla
                    </button>
                  </div>
                </form>
              </div>
              {publish && (
                <div className="adv_publish_result_main_wrapper">
                  <img src={checkmark} alt="checkmark" />

                  <h4>Ilan Yayinlama talebiniz basariyla kaydedilmistir</h4>
                  <p>
                    Ilaniniz editorlerimiz tarafindan incelendikten sonra yayina
                    alinacaktir.
                  </p>
                  <div>
                    <label htmlFor="publish_number">Ilan Yayin Numarasi</label>
                    <input type="text" value={publishNumber}></input>
                  </div>
                  <div className="publish_result_btn_container">
                    <Link to="/">
                      <button className="publish_result_btn">Tamam</button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstatePublish;
