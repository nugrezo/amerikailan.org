import React from "react";
import "./ElectronicDetailSubComponent.css";

const ElectronicDetailSubComponent = () => {
  return (
    <div className="adv_electronic_details">
      <h4>Detay Bilgiler</h4>
      <div className="adv_electronic_details_main_wrapper">
        <div className="adv_electronic_details_wrapper">
          <div className="electronic_row">
            <label htmlFor="make_electronic">Make</label>
            <input className="make_input" placeholder="Apple vs"></input>
          </div>
          <div className="electronic_row">
            <label htmlFor="model_label">Model </label>
            <input className="model_input" placeholder="Macbook Air vs"></input>
          </div>

          <div className="electronic_row">
            <label htmlFor="furniture_label">Color</label>
            <input className="color_input"></input>
          </div>

          <div className="electronic_row">
            <label htmlFor="damage_label">Status </label>
            <select>
              <option value="">Seciniz</option>
              <option value="1">Brand New</option>
              <option value="2">Few usage</option>
              <option value="3">Used</option>
              <option value="3">Used a lot</option>
            </select>
          </div>
          <div className="electronic_row">
            <label htmlFor="guarantee_label">Guarantee</label>
            <select>
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicDetailSubComponent;
