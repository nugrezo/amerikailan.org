import React from "react";
import "./RealEstateDetails.css";

const RealEstateDetails = () => {
  return (
    <div className="adv_realestate_details">
      <h4>Detay Bilgiler</h4>
      <div className="adv_realestate_details_main_wrapper">
        <div className="adv_realestate_details_wrapper">
          <div className="realestate_row">
            <label htmlFor="select_whose_adv">Kimden </label>
            <select>
              <option value="">Seciniz</option>
              <option value="1">Sahibinden</option>
              <option value="2">Emlak Ofisinden</option>
              <option value="3">Bankadan</option>
            </select>
          </div>
          <div className="realestate_row">
            <label htmlFor="roomnumber_label">Oda Sayisi </label>
            <select>
              <option value="">Seciniz</option>
              <option value="1">Studio</option>
              <option value="2">1+1</option>
              <option value="3">2+1</option>
              <option value="4">2+2</option>
              <option value="5">3+1</option>
              <option value="6">3+2</option>
              <option value="6">4+1</option>
              <option value="6">4+2</option>
              <option value="6">5+1</option>
              <option value="6">5+2</option>
              <option value="6">Diger</option>
            </select>
          </div>
          <div className="realestate_row">
            <label htmlFor="size_gross">Burut sqf </label>
            <input className="size_gross_input"></input>
          </div>
          <div className="realestate_row">
            <label htmlFor="floor_label">Bulundugu Kat </label>
            <input className="floor_input"></input>
          </div>
          <div className="realestate_row">
            <label htmlFor="parking_label">Otopark </label>
            <select>
              <option value="">Seciniz</option>
              <option value="1">Var</option>
              <option value="2">Yok</option>
            </select>
          </div>
          <div className="realestate_row">
            <label htmlFor="elevator_label">Asansor </label>
            <select>
              <option value="">Seciniz</option>
              <option value="1">Var</option>
              <option value="2">Yok</option>
            </select>
          </div>
          <div className="realestate_row">
            <label htmlFor="furniture_label">Esya Durumu </label>
            <select>
              <option value="">Seciniz</option>
              <option value="1">Var</option>
              <option value="2">Yok</option>
              <option value="3">Kismen Esyali</option>
            </select>
          </div>
          <div className="realestate_row">
            <label htmlFor="site_label">Site Icerisinde </label>
            <select>
              <option value="">Seciniz</option>
              <option value="1">Evet</option>
              <option value="2">Hayir</option>
            </select>
          </div>
        </div>
        <div className="adv_realestate_details_wrapper_right">
          <div className="exterior_future_wrapper">
            <p>Dis Ozellikler</p>
            <div className="exterior_futures">
              <div className="exterior_futures_group1">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Kapici</label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Spor Salonu</label>
                </div>
              </div>
              <div className="exterior_futures_group2">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Oyun Parki</label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Spor Salonu</label>
                </div>
              </div>
              <div className="exterior_futures_group3">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Yuzme Havuzu</label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Ses Yalitimi</label>
                </div>
              </div>
              <div className="exterior_futures_group4">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Isi Yalitimi</label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Tenis Kortu</label>
                </div>
              </div>
            </div>
          </div>
          <div className="interior_future_wrapper">
            <p>Ic Ozellikler</p>
            <div className="interior_futures">
              <div className="interior_futures_group1">
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> Alarm</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> Boyali</label>
                </div>
              </div>
              <div className="interior_futures_group2">
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> Gomme Dolap</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">
                    Bulasik Makinesi
                  </label>
                </div>
              </div>
              <div className="interior_futures_group3">
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">
                    Camasir Makinesi
                  </label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> Internet</label>
                </div>
              </div>
              <div className="interior_futures_group4">
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> Klima</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">Beyaz Esya</label>
                </div>
              </div>
            </div>
          </div>
          <div className="realestate_type_future_wrapper">
            <p>Konut Tipi</p>
            <div className="realestate_type_futures">
              <div className="realestate_type_futures_group1">
                <div className="realestate_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="realestate_type_futures_label">
                    Single Family
                  </label>
                </div>
                <div className="realestate_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="realestate_type_futures_label">
                    Multi Family
                  </label>
                </div>
              </div>
              <div className="realestate_type_futures_group2">
                <div className="realestate_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="realestate_type_futures_label">
                    Town House
                  </label>
                </div>
                <div className="realestate_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="realestate_type_futures_label">Loft</label>
                </div>
              </div>
              <div className="realestate_type_futures_group3">
                <div className="realestate_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="realestate_type_futures_label">Co-Op</label>
                </div>
                <div className="realestate_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="realestate_type_futures_label">Kondo</label>
                </div>
              </div>
              <div className="realestate_type_futures_group4">
                <div className="realestate_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="realestate_type_futures_label">
                    Mobil Ev
                  </label>
                </div>
                <div className="realestate_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="realestate_type_futures_label">Ofis</label>
                </div>
              </div>
            </div>
          </div>
          <div className="region_future_wrapper">
            <p>Muhit</p>
            <div className="region_futures">
              <div className="region_futures_group1">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">AVM</label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Hastane</label>
                </div>
              </div>
              <div className="region_futures_group2">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Park</label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Okul</label>
                </div>
              </div>
              <div className="region_futures_group3">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Restaurant</label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Spor Salonu</label>
                </div>
              </div>
              <div className="region_futures_group4">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Tren Istasyonu</label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Otobus Duragi</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateDetails;
