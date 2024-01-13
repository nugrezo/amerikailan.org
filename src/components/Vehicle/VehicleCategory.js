import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import checkmark from "../../library/advicons/greencheckmark.png";
import "./VehicleCategory.css";
import Footer from "../Footer/Footer";
import logo from "../../library/logo.png";
import Usermenu from "../Usermenu/Usermenu";
import ProgressBar from "../ProgressBar/ProgressBar";
import { AppContext } from "../ContextProvider";

const VehicleCategory = () => {
  const { handleNext } = useContext(AppContext); // Access handleNext from context
  const navigate = useNavigate();
  const [openBox2, setOpenBox2] = useState(false);
  const [openBox3, setOpenBox3] = useState(false);
  const [selectedWordsFromBox1, setSelectedWordsFromBox1] = useState([]);
  const [selectedWordsFromBox2, setSelectedWordsFromBox2] = useState([]);
  const [selectedWordsFromBox3, setSelectedWordsFromBox3] = useState([]);
  console.log(selectedWordsFromBox3);
  const [backToSelectionVisible, setBackToSelectionVisible] = useState(true);
  const [advVehicleBodyVisible, setAdvVehcileBodyVisible] = useState(true);

  const handleFirstBoxClick = (value) => {
    setSelectedWordsFromBox1([value]);
    setSelectedWordsFromBox2([""]);
    setSelectedWordsFromBox3([""]);
    setOpenBox2(true);
    setOpenBox3(false);
  };

  const handleSecondBoxClick = (value) => {
    setSelectedWordsFromBox2([value]);
    setSelectedWordsFromBox3([""]);
    setOpenBox3(true);
  };

  const handleThirdBoxClick = (value) => {
    setSelectedWordsFromBox3([value]);
    console.log("button is clicked");
    setOpenBox2(false);
    setOpenBox3(false);
    setBackToSelectionVisible(false);
    setAdvVehcileBodyVisible(false);
    handleNext();
    navigate("/advertisement/vehicle/cellaprv_s2");
  };
  return (
    <div className="adv-vehicle">
      <div>
        <div className="vehicle-box">
          <div className="container">
            <nav className="navbar">
              <div className="nav-logo">
                <a className="navbar-brand" href="http://localhost:3000">
                  <img src={logo} width="200px;" height="60px;" alt="logo" />
                </a>
              </div>
              <div className="nav-userProfile">
                <Usermenu />
              </div>
            </nav>
          </div>
          <ProgressBar />
          <div className="vehicle-content">
            <main>
              <div>
                <h3 id="vehicle_category-selection">1-Kategori Secimi</h3>
                <h4 className="vehicle-stepbystep">
                  Adim adim kategori seciniz
                </h4>
                {backToSelectionVisible && (
                  <div className="backtoselection">
                    <a href={"http://localhost:3000/advertisement"}>Arac</a>
                    {openBox2 && <span>&gt;</span>}
                    {selectedWordsFromBox1.map((word, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <span>&gt;</span>}
                        <p>{word}</p>
                      </React.Fragment>
                    ))}
                    {openBox3 && <span>&gt;</span>}
                    {selectedWordsFromBox2.map((word, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <span>&gt;</span>}
                        <p>{word}</p>
                      </React.Fragment>
                    ))}
                  </div>
                )}
                {advVehicleBodyVisible && (
                  <div className="adv-vehicle-body">
                    <ul>
                      <li
                        onClick={() => handleFirstBoxClick("Otomobil")}
                        className={
                          selectedWordsFromBox1.includes("Otomobil")
                            ? "veh_selected"
                            : ""
                        }
                      >
                        Otomobil
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick("Motosiklet")}
                        className={
                          selectedWordsFromBox1.includes("Motosiklet")
                            ? "veh_selected"
                            : ""
                        }
                      >
                        Motosiklet
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick("Arazi&SUV&Pick-Up")}
                        className={
                          selectedWordsFromBox1.includes("Arazi&SUV&Pick-Up")
                            ? "veh_selected"
                            : ""
                        }
                      >
                        Arazi & SUV & Pick-Up
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick("Ticari Arac")}
                        className={
                          selectedWordsFromBox1.includes("Ticari Arac")
                            ? "veh_selected"
                            : ""
                        }
                      >
                        Ticari Arac
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick("Kiralik Arac")}
                        className={
                          selectedWordsFromBox1.includes("Kiralik Arac")
                            ? "veh_selected"
                            : ""
                        }
                      >
                        Kiralik Arac
                      </li>
                    </ul>
                    {openBox2 && (
                      <ul>
                        <li
                          onClick={() => handleSecondBoxClick("Satilik")}
                          className={
                            selectedWordsFromBox2.includes("Satilik")
                              ? "veh_selected"
                              : ""
                          }
                        >
                          Satilik
                        </li>
                        <li
                          onClick={() => handleSecondBoxClick("Kiralik")}
                          className={
                            selectedWordsFromBox2.includes("Kiralik")
                              ? "veh_selected"
                              : ""
                          }
                        >
                          Kiralik
                        </li>
                      </ul>
                    )}
                    {openBox3 && (
                      <ul className="lastchild">
                        <img src={checkmark} alt="checkmark" />
                        <p>Kategori secimi tamamlanmistir</p>
                        <button
                          onClick={() => handleThirdBoxClick("Devam edin")}
                        >
                          Devam ediniz
                        </button>
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VehicleCategory;
