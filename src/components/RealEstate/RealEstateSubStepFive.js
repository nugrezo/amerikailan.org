import React from "react";
import Usermenu from "../Usermenu/Usermenu";
import logo from "../../library/logo.png";

const RealEstateSubStepFive = () => {
  return (
    <div className="adv_real_estate_publish">
      <div className="navbar-box">
        <nav className="navbar">
          <div className="nav-advertisement">
            <a className="navbar-brand" href="http://localhost:3000">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="nav-userProfile">
            <Usermenu />
          </div>
        </nav>
      </div>
      <form>
        <div className="adv_user_name">
          <label htmlFor="user_name">Isim</label>
          <input type="text"></input>
        </div>
        <div className="adv_user_lastname">
          <label htmlFor="user_lastname">Soyisim</label>
          <input type="text"></input>
        </div>
        <div className="adv_user_email">
          <label htmlFor="adv_email">E-mail</label>
          <input type="email"></input>
        </div>
        <div className="adv_user_address">
          <label htmlFor="adv_address">Ilan Adresi</label>
          <input type="text"></input>
        </div>
        <div className="adv_user_tel">
          <label htmlFor="adv_tel">Telefon No</label>
          <input type="text"></input>
        </div>
        <div className="adv_user_category">
          <label htmlFor="adv_category">Ilan Kategorisi</label>
          <input type="text"></input>
        </div>
        <div className="adv_user_price">
          <label htmlFor="adv_price">Ucret</label>
          <input type="text"></input>
        </div>
        <div className="adv_user_date">
          <label htmlFor="adv_date">Ilan Tarihi</label>
          <input type="text"></input>
        </div>
        <button className="publish_btn">Ilani Yayinla</button>
      </form>
    </div>
  );
};

export default RealEstateSubStepFive;
