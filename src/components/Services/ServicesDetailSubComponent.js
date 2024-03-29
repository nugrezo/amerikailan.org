import React from "react";
import "./ServicesDetailSubComponent.css";

const ServicesDetailSubComponent = () => {
  return (
    <div className="adv_services_details">
      <h4>Detay Bilgiler</h4>
      <div className="adv_services_details_main_wrapper">
        <div className="adv_services_details_wrapper">
          <div className="services_row">
            <label htmlFor="make_services">Marka</label>
            <input className="make_input" placeholder="Apple vs"></input>
          </div>
          <div className="services_row">
            <label htmlFor="model_label">Model </label>
            <input className="model_input" placeholder="Macbook Air vs"></input>
          </div>

          <div className="services_row">
            <label htmlFor="furniture_label">Renk</label>
            <input className="color_input"></input>
          </div>

          <div className="services_row">
            <label htmlFor="damage_label">Kullanim Durumu </label>
            <select>
              <option value="">Seciniz</option>
              <option value="1">Sifir</option>
              <option value="2">Az Kullanilmis</option>
              <option value="3">Orta Derecede Kullanilmis</option>
              <option value="3">Cok Kullanilmis</option>
            </select>
          </div>
          <div className="services_row">
            <label htmlFor="guarantee_label">Garanti Durumu</label>
            <select>
              <option value="">Seciniz</option>
              <option value="1">Var</option>
              <option value="2">Yok</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailSubComponent;
