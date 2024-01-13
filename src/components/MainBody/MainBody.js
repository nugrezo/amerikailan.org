/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MainBody.css";

import Slider from "../PopulerIlanlar/PopulerIlanlar";
import VitrinIlan from "../VitrinIlan/VitrinIlan";
import Footer from "../Footer/Footer";

const MainBody = () => {
  return (
    <div className>
      <div id="main-body">
        <div className="left-menu">
          <div className="left-menu-alt kategori">
            <div className="main left-menu-head">
              <h3>Kategoriler</h3>
              <div className="left-menu-head-hizlierisim">
                <ul>
                  <li>
                    <a href="#">Populer Ilanlar</a>
                  </li>
                  <li>
                    <a href="#">Son 48 saat ilanlari</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="left-menu-alt icerik">
            <h4>Emlak</h4>
            <ul>
              <li>
                <a href="#">Konut</a>
              </li>
              <li>
                <a href="#">Isyeri</a>
              </li>
              <li>
                <a href="#">Arsa</a>
              </li>
              <li>
                <a href="#">Bina</a>
              </li>
              <li>
                <a href="#">Turistik Tesis</a>
              </li>
            </ul>
            <h4>Vasita</h4>
            <ul>
              <li>
                <a href="#">Otomobil</a>
              </li>
              <li>
                <a href="#">Motosiklet</a>
              </li>
              <li>
                <a href="#">Arazi & SUV & Pick-up</a>
              </li>
              <li>
                <a href="#">Ticari Arac</a>
              </li>
              <li>
                <a href="#">Kiralik Arac</a>
              </li>
            </ul>
            <h4>Elektronik Cihaz</h4>
            <ul>
              <li>
                <a href="#">Bilgisayar</a>
              </li>
              <li>
                <a href="#">Cep Telefonu</a>
              </li>
              <li>
                <a href="#">Diger</a>
              </li>
            </ul>
            <h4>Hizmet</h4>
            <ul>
              <li>
                <a href="#">Insaat & Dekorasyon</a>
              </li>
              <li>
                <a href="#">Turizm & Seyahat & Otel</a>
              </li>
              <li>
                <a href="#">Teknik Servis</a>
              </li>
              <li>
                <a href="#">Kisisel Egitim</a>
              </li>
              <li>
                <a href="#">Kuyumculuk</a>
              </li>
              <li></li>
              <li>
                <a href="#">Saglik</a>
              </li>
              <li>
                <a href="#">Gastronomi</a>
              </li>
              <li>
                <a href="#">Market & Pastane</a>
              </li>
            </ul>
            <h4>Is Ilanlari</h4>
            <ul>
              <li>
                <a href="#">Is Arayanlar</a>
              </li>
              <li>
                <a href="#">Is Verenler</a>
              </li>
            </ul>
            <h3>
              <a href="#">Sohbet & Tanisma</a>
            </h3>
          </div>
        </div>
        <div className="vitrin">
          <div className="vitrin vitrin-row1">
            <h3 className="h3-vitrin-row1">POPULER ILANLAR</h3>
            <Slider />
          </div>
          <div className="vitrin vitrin-row2">
            <h3 className="h3-vitrin-row2">VITRIN ILANLARI</h3>
            <VitrinIlan />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainBody;
