import React, { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import "./ElectronicAddress.css";
import MapComponentElectronic from "./MapComponentElectronic";

const ElectronicAddress = () => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setStateid] = useState(0);
  const [cityid, setCityid] = useState(0);
  const [zip, setZip] = useState("");
  return (
    <div>
      <div className="address_container">
        <h4>Commercial Address Information</h4>
        <div className="map_address_container_wrapper">
          <div className="address_container_wrapper">
            <div className="country_wrapper">
              <h6>Country</h6>
              <CountrySelect
                onChange={(e) => {
                  setCountryid(e.id);
                  setStateid(0);
                  setCityid(0);
                  setZip("");
                }}
                placeHolder="Ulke seciniz"
              />
            </div>
            <div className="state_wrapper">
              <h6>State</h6>
              <StateSelect
                countryid={countryid}
                onChange={(e) => {
                  setStateid(e.id);
                  setCityid(0);
                }}
                placeHolder="Eyalet seciniz"
              />
            </div>
            <div className="city_wrapper">
              <h6>City</h6>
              <CitySelect
                countryid={countryid}
                stateid={stateid}
                onChange={(e) => {
                  setCityid(e.id);
                }}
                placeHolder="Sehir seciniz"
              />
            </div>
            <div className="address_wrapper">
              <h6>Address</h6>
              <div className="address_wrapper_main">
                <input placeholder="Adres giriniz"></input>
              </div>
            </div>
            <div className="zipcode_wrapper">
              <h6>Zip Code</h6>
              <div className="zipcode_wrapper_main">
                <input
                  placeholder="Posta kodu giriniz"
                  onChange={(e) => setZip(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className="map_container_wrapper">
            <MapComponentElectronic
              country={countryid}
              state={stateid}
              city={cityid}
              zip={zip}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicAddress;
