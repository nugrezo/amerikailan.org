import React, { useState } from "react";
import checkmark from "../../library/advicons/greencheckmark.png";
import "./Vehicle.css";
import Footer from "../Footer/Footer";
import logo from "../../library/logo.png";
import Usermenu from "../Usermenu/Usermenu";

const Vehicle = () => {
  const [openBox2, setOpenBox2] = useState(false);
  const [openBox3, setOpenBox3] = useState(false);
  const [openBox4, setOpenBox4] = useState(false);
  const [selectedWordsFromBox1, setSelectedWordsFromBox1] = useState([]);
  const [selectedWordsFromBox2, setSelectedWordsFromBox2] = useState([]);
  const [selectedWordsFromBox3, setSelectedWordsFromBox3] = useState([]);
  const [selectedWordsFromBox4, setSelectedWordsFromBox4] = useState([]);
  console.log(selectedWordsFromBox4);
  const [backToSelectionVisible, setBackToSelectionVisible] = useState(true);
  const [advVehicleBodyVisible, setAdvVehcileBodyVisible] = useState(true);

  const handleFirstBoxClick = (value) => {
    setSelectedWordsFromBox1([value]);
    setSelectedWordsFromBox2([""]);
    setSelectedWordsFromBox3([""]);
    setOpenBox2(true);
    setOpenBox3(false);
    setOpenBox4(false);
  };

  const handleSecondBoxClick = (value) => {
    setSelectedWordsFromBox2([value]);
    setSelectedWordsFromBox3([""]);
    setOpenBox3(true);
  };

  const handleThirdBoxClick = (value) => {
    setSelectedWordsFromBox4([value]);
    console.log("button is clicked");
    setOpenBox2(false);
    setOpenBox3(false);
    setBackToSelectionVisible(false);
    setAdvVehcileBodyVisible(false);
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
                    {openBox4 && <span>&gt;</span>}
                    {selectedWordsFromBox3.map((word, index) => (
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
                      <li onClick={() => handleFirstBoxClick("Otomobil")}>
                        Otomobil
                      </li>
                      <li onClick={() => handleFirstBoxClick("Motosiklet")}>
                        Motosiklet
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick("Arazi&SUV&Pick-Up")}
                      >
                        Arazi & SUV & Pick-Up
                      </li>
                      <li onClick={() => handleFirstBoxClick("Ticari Arac")}>
                        Ticari Arac
                      </li>
                      <li onClick={() => handleFirstBoxClick("Kiralik Arac")}>
                        Kiralik Arac
                      </li>
                    </ul>
                    {openBox2 && (
                      <ul>
                        <li onClick={() => handleSecondBoxClick("Satilik")}>
                          Satilik
                        </li>
                        <li onClick={() => handleSecondBoxClick("Kiralik")}>
                          Kiralik
                        </li>
                      </ul>
                    )}
                    {openBox3 && (
                      <ul className="lastchild">
                        <img src={checkmark} alt="checkmark" />
                        <p>Kategori secimi tamamlanmistir</p>
                        <a
                          href="http://localhost:3000/advertisement/vehicle/step_two"
                          alt="realestate_steptwo"
                        >
                          {" "}
                          <button
                            onClick={() => handleThirdBoxClick("Devam edin")}
                          >
                            Devam ediniz
                          </button>
                        </a>
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

export default Vehicle;
