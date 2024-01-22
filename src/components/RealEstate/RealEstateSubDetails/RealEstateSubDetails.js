import React from "react";
import "./RealEstateSubDetails.css";

const RealEstateSubDetails = () => {
  return (
    <div className="adv_realestate_details">
      <h4>Commercial Details</h4>
      <div className="adv_realestate_details_main_wrapper">
        <div className="adv_realestate_details_wrapper">
          <div className="realestate_row">
            <label htmlFor="select_whose_adv">From </label>
            <select>
              <option value="">Select</option>
              <option value="1">Owner</option>
              <option value="2">Real Estate Broker</option>
              <option value="3">Bank</option>
            </select>
          </div>
          <div className="realestate_row">
            <label htmlFor="roomnumber_label">How many room? </label>
            <select>
              <option value="">Select</option>
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
            <label htmlFor="floor_label">Floor </label>
            <input className="floor_input"></input>
          </div>
          <div className="realestate_row">
            <label htmlFor="parking_label">Otopark </label>
            <select>
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
          <div className="realestate_row">
            <label htmlFor="elevator_label">Elevator </label>
            <select>
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
          <div className="realestate_row">
            <label htmlFor="furniture_label">Furniture </label>
            <select>
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
              <option value="3">Partially Furnished</option>
            </select>
          </div>
          <div className="realestate_row">
            <label htmlFor="site_label">Inside the site </label>
            <select>
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
        </div>
        <div className="adv_realestate_details_wrapper_right">
          <div className="exterior_future_wrapper">
            <p>Exterior Futures</p>
            <div className="exterior_futures">
              <div className="exterior_futures_group1">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Doorman</label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Fitness</label>
                </div>
              </div>
              <div className="exterior_futures_group2">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Park</label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Tenis Court</label>
                </div>
              </div>
              <div className="exterior_futures_group3">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Pool</label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Sound Proof</label>
                </div>
              </div>
              <div className="exterior_futures_group4">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Heat Proof</label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label">
                    {" "}
                    Basketball Court
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="interior_future_wrapper">
            <p>Interior Futures</p>
            <div className="interior_futures">
              <div className="interior_futures_group1">
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> Alarm</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> Painted</label>
                </div>
              </div>
              <div className="interior_futures_group2">
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> Closet</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">Dish Washer</label>
                </div>
              </div>
              <div className="interior_futures_group3">
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">Washer & Drier</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> Internet</label>
                </div>
              </div>
              <div className="interior_futures_group4">
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> AC</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">White Goods</label>
                </div>
              </div>
            </div>
          </div>
          <div className="realestate_type_future_wrapper">
            <p>Type</p>
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
                    Mobil House
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
            <p>Neighborhood</p>
            <div className="region_futures">
              <div className="region_futures_group1">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">AVM</label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Hospital</label>
                </div>
              </div>
              <div className="region_futures_group2">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Park</label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">School</label>
                </div>
              </div>
              <div className="region_futures_group3">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Restaurant</label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Fitness Center</label>
                </div>
              </div>
              <div className="region_futures_group4">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Train Station</label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Bus Station</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateSubDetails;
