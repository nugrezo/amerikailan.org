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
              <option value="">Seciniz</option>
              <option value="1">Sahibinden</option>
              <option value="2">Bayiden</option>
              <option value="3">Bankadan</option>
            </select>
          </div>
          <div className="vehicle_row">
            <label htmlFor="vehicle_label">Marka </label>
            <select>
              <option value="">Seciniz</option>
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
            <label htmlFor="gastype_label">Yakit Turu </label>
            <select>
              <option value="">Seciniz</option>
              <option value="1">Benzin</option>
              <option value="2">Dizel</option>
            </select>
          </div>
          <div className="vehicle_row">
            <label htmlFor="mile_label">Mil </label>
            <input className="mile_input"></input>
          </div>
          <div className="vehicle_row">
            <label htmlFor="furniture_label">Renk</label>
            <input className="color_input"></input>
          </div>
          <div className="vehicle_row">
            <label htmlFor="power_label">Motor Hacmi </label>
            <input className="power_input"></input>
          </div>
          <div className="vehicle_row">
            <label htmlFor="damage_label">Hasar Durumu </label>
            <select>
              <option value="">Seciniz</option>
              <option value="1">Hasarsiz</option>
              <option value="2">Hasarli</option>
              <option value="3">Kismi Hasarli</option>
            </select>
          </div>
          <div className="vehicle_row">
            <label htmlFor="guarantee_label">Garanti Durumu</label>
            <select>
              <option value="">Seciniz</option>
              <option value="1">Var</option>
              <option value="2">Yok</option>
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
                  <label htmlFor="exterior_futures_label"> Acilir Tavan</label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Far Yikama</label>
                </div>
              </div>
              <div className="exterior_futures_group2">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label">Sis Fari</label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label"> Isitmali Ayna</label>
                </div>
              </div>
              <div className="exterior_futures_group3">
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label">
                    Yan Ayna Sinyali
                  </label>
                </div>
                <div className="exterior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="exterior_futures_label">
                    Yagmur-Kar Sensoru
                  </label>
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
            <p>Ic Donanim</p>
            <div className="interior_futures">
              <div className="interior_futures_group1">
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> Alarm</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> Deri Koltuk</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">
                    {" "}
                    Direksyon Ayari
                  </label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> Park Sensoru</label>
                </div>
              </div>
              <div className="interior_futures_group2">
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label"> Klima</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">Koltuk Isitma</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">Sun Roof</label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">
                    Otomatik Far Ayari
                  </label>
                </div>
              </div>
              <div className="interior_futures_group3">
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">
                    {" "}
                    On Kolutuk Ayari-Surucu
                  </label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">
                    On Koltuk Ayari- Yolcu
                  </label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">
                    Yol Bilgisayari
                  </label>
                </div>
                <div className="interior_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="interior_futures_label">Serit Kontrol</label>
                </div>
              </div>
            </div>
          </div>
          <div className="vehicle_type_future_wrapper">
            <p>Teknik Ozellikler</p>
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
                    Emniyet Kemer Ikazi
                  </label>
                </div>
              </div>
              <div className="vehicle_type_futures_group2">
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">
                    Hiz Sabitleyici
                  </label>
                </div>
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">
                    Lastik Basinc Sensoru
                  </label>
                </div>
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">
                    Merkezi Kilit
                  </label>
                </div>
              </div>
              <div className="vehicle_type_futures_group3">
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">
                    On Hava Yastigi
                  </label>
                </div>
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">
                    Yan Hava Yastigi
                  </label>
                </div>
                <div className="vehicle_type_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="vehicle_type_futures_label">
                    Yedek Lastik
                  </label>
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
                  <label htmlFor="region_futures_label">CD Calar</label>
                </div>
              </div>
              <div className="region_futures_group2">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">AUX Giris On</label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">AUX giris arka</label>
                </div>
              </div>
              <div className="region_futures_group3">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">
                    Bluetooth Baglanti
                  </label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">HDMI Girisi</label>
                </div>
              </div>
              <div className="region_futures_group4">
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">
                    Digital Medya Girisi
                  </label>
                </div>
                <div className="region_futures_row">
                  <input type="checkbox"></input>
                  <label htmlFor="region_futures_label">
                    Navigasyon Alicisi
                  </label>
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
