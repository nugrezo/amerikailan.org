import React, { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import "./Address.css";

const Address = () => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  return (
    <div>
      <div className="address_container">
        <h4>Ilana Ait Adres Bilgileri</h4>
        <div className="address_container_wrapper">
          <div className="country_wrapper">
            <h6>Ulke</h6>
            <CountrySelect
              onChange={(e) => {
                setCountryid(e.id);
              }}
              placeHolder="Ulke seciniz"
            />
          </div>
          <div className="state_wrapper">
            <h6>Eyalet</h6>
            <StateSelect
              countryid={countryid}
              onChange={(e) => {
                setstateid(e.id);
              }}
              placeHolder="Eyalet seciniz"
            />
          </div>
          <div className="city_wrapper">
            <h6>Sehir</h6>
            <CitySelect
              countryid={countryid}
              stateid={stateid}
              onChange={(e) => {
                console.log(e);
              }}
              placeHolder="Sehir seciniz"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
