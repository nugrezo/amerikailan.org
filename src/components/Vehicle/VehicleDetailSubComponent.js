import React from "react";
import "./VehicleDetailSubComponent.css";

const VehicleDetailSubComponent = () => {
  return (
    <div className="adv_vehicle_details">
      <h4>Detay Bilgiler</h4>
      <div className="adv_vehicle_details_main_wrapper">
        <div className="adv_vehicle_details_wrapper">
          <div className="vehicle_row">
            <label htmlFor="select_whose_adv">Kimden </label>
            <select>
              <option value="">Select</option>
              <option value="1">Owner</option>
              <option value="2">Dealership</option>
              <option value="3">Short Sale</option>
            </select>
          </div>
          <div className="vehicle_row">
            <label htmlFor="vehicle_label">Make </label>
            <select>
              <option value="">Select</option>
              <option value="1">Acura</option>
              <option value="2">Alfa Romeo</option>
              <option value="3">Alpina</option>
              <option value="4">Aston Martin</option>
              <option value="5">Audi</option>
              <option value="6">Bentley</option>
              <option value="6">BMW</option>
              <option value="7">Bugatti</option>
              <option value="8">Buick</option>
              <option value="9">Cadillac</option>
              <option value="10">Chery</option>
              <option value="11">Chevrolet</option>
              <option value="12">Chrysler</option>
              <option value="13">Citroën</option>
              <option value="14">Dacia</option>
              <option value="15">Daewoo</option>
              <option value="16">Daihatsu</option>
              <option value="17">Daimler</option>
              <option value="18">Dodge</option>
              <option value="19">Dodge Viper</option>
              <option value="20">Eagle</option>
              <option value="21">Ferrari</option>
              <option value="22">Fiat</option>
              <option value="23">Ford</option>
              <option value="24">Ford Mustang</option>
              <option value="25">General Motors</option>
              <option value="26">Genesis</option>
              <option value="27">GMC</option>
              <option value="28">Gilbern</option>
              <option value="29">Honda</option>
              <option value="30">Hummer</option>
              <option value="31">Hyundai</option>
              <option value="32">Infiniti</option>
              <option value="33">Isuzu</option>
              <option value="34">Iveco</option>
              <option value="35">Jaguar</option>
              <option value="36">JMC</option>
              <option value="37">Kaiser</option>
              <option value="38">Kia</option>
              <option value="39">Lada</option>
              <option value="40">Lamborghini</option>
              <option value="41">Lancia</option>
              <option value="42">Land Rover</option>
              <option value="43">Lexus</option>
              <option value="44">Leyland</option>
              <option value="45">Lincoln</option>
              <option value="46">Lotus</option>
              <option value="47">Maserati</option>
              <option value="48">Maybach</option>
              <option value="49">Mazda</option>
              <option value="50">McLaren</option>
              <option value="51">Mercedes-AMG</option>
              <option value="52">Mercedes-Benz</option>
              <option value="53">Mercury</option>
              <option value="54">MG</option>
              <option value="55">Mini</option>
              <option value="56">Mitsubishi</option>
              <option value="57">Nissan GT-R</option>
              <option value="58">Nissan</option>
              <option value="59">Opel</option>
              <option value="60">Pagani</option>
              <option value="61">Peugeot</option>
              <option value="62">Polestar</option>
              <option value="63">Pontiac</option>
              <option value="64">Porsche</option>
              <option value="65">Proton</option>
              <option value="66">Renault</option>
              <option value="67">Rolls-Royce</option>
              <option value="68">Rover</option>
              <option value="69">Saab</option>
              <option value="70">SEAT</option>
              <option value="71">Škoda</option>
              <option value="72">Subaru</option>
              <option value="73">Suzuki</option>
              <option value="74">Tesla</option>
              <option value="75">Toyota</option>
              <option value="76">Volkswagen</option>
              <option value="77">Volvo</option>
              <option value="78">Wiesmann</option>
              <option value="79">Yulon</option>
              <option value="80">Yutong</option>
              <option value="81">Zenos</option>
              <option value="82">Diger</option>
            </select>
          </div>
          <div className="vehicle_row">
            <label htmlFor="model_acura">Model </label>
            <input className="model_input"></input>
          </div>
          <div className="vehicle_row">
            <label htmlFor="floor_label">Yil </label>
            <input className="year_input"></input>
          </div>
          <div className="vehicle_row">
            <label htmlFor="gastype_label">Gas Type </label>
            <select>
              <option value="">Seciniz</option>
              <option value="1">Gasolin</option>
              <option value="2">Dizel</option>
            </select>
          </div>
          <div className="vehicle_row">
            <label htmlFor="mile_label">Mile </label>
            <input className="mile_input"></input>
          </div>
          <div className="vehicle_row">
            <label htmlFor="furniture_label">Color</label>
            <input className="color_input"></input>
          </div>
          <div className="vehicle_row">
            <label htmlFor="power_label">Engine Power </label>
            <input className="power_input"></input>
          </div>
          <div className="vehicle_row">
            <label htmlFor="damage_label">Damage </label>
            <select>
              <option value="">Select</option>
              <option value="1">No Damage</option>
              <option value="2">Damged</option>
              <option value="3">Partially Damaged</option>
            </select>
          </div>
          <div className="vehicle_row">
            <label htmlFor="guarantee_label">Guarantee</label>
            <select>
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
        </div>
        <div className="adv_vehicle_details_wrapper_right">
          <div className="exterior_future_wrapper">
            <p>Dis Donanim</p>
            <div className="exterior_futures">
              <div className="exterior_futures_group1">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label">
                    {" "}
                    Glass Sun Roof
                  </label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label">
                    {" "}
                    headlight cleaner
                  </label>
                </div>
              </div>
              <div className="exterior_futures_group2">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label">Fog lights</label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label">
                    {" "}
                    Heatet mirrors
                  </label>
                </div>
              </div>
              <div className="exterior_futures_group3">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label">
                    Signal on Mirror
                  </label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label">Rain sensor</label>
                </div>
              </div>
              <div className="exterior_futures_group4">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Heat proof</label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Sound proof</label>
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
                  <label htmlFor="interior_futures_label"> Leather seats</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">
                    Adjustable chairs
                  </label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">
                    {" "}
                    Parking sensor
                  </label>
                </div>
              </div>
              <div className="interior_futures_group2">
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> AC</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">Heated Seats</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">Sun Roof</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">
                    Auto headlights
                  </label>
                </div>
              </div>
              <div className="interior_futures_group3">
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">
                    {" "}
                    Chairs dashboard
                  </label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">
                    Charis dashboard(p)
                  </label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">Navigation</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">Lane Alarm</label>
                </div>
              </div>
            </div>
          </div>
          <div className="vehicle_type_future_wrapper">
            <p>Technical Futures</p>
            <div className="vehicle_type_futures">
              <div className="vehicle_type_futures_group1">
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">ABS</label>
                </div>
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">EBD</label>
                </div>
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">
                    Seat Belt Alarm
                  </label>
                </div>
              </div>
              <div className="vehicle_type_futures_group2">
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">Radar</label>
                </div>
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">
                    Tire Sensor
                  </label>
                </div>
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">
                    Central Lock
                  </label>
                </div>
              </div>
              <div className="vehicle_type_futures_group3">
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">Airbags</label>
                </div>
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">
                    Airbags side
                  </label>
                </div>
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">Spare tire</label>
                </div>
              </div>
            </div>
          </div>
          <div className="region_future_wrapper">
            <p>Multimedya</p>
            <div className="region_futures">
              <div className="region_futures_group1">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Hoparlor</label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">CD Player</label>
                </div>
              </div>
              <div className="region_futures_group2">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">AUX</label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">AUX back</label>
                </div>
              </div>
              <div className="region_futures_group3">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Bluetooth</label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">HDMI</label>
                </div>
              </div>
              <div className="region_futures_group4">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">USB</label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">Reciever</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailSubComponent;
