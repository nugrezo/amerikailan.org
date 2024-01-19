import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import checkmark from "../../library/advicons/greencheckmark.png";
import "./ElectronicCategory.css";
import Footer from "../Footer/Footer";
import logo from "../../library/logo.png";
import Usermenu from "../Usermenu/Usermenu";
import ProgressBar from "../ProgressBar/ProgressBar";
import { AppContext } from "../ContextProvider";

const ElectronicCategory = () => {
  const { handleNext } = useContext(AppContext); // Access handleNext from context
  const navigate = useNavigate();
  const [openBox2, setOpenBox2] = useState(false);
  const [openBox3, setOpenBox3] = useState(false);
  const [selectedWordsFromBox1, setSelectedWordsFromBox1] = useState([]);
  const [selectedWordsFromBox2, setSelectedWordsFromBox2] = useState([]);
  const [selectedWordsFromBox3, setSelectedWordsFromBox3] = useState([]);
  console.log(selectedWordsFromBox3);
  const [backToSelectionVisible, setBackToSelectionVisible] = useState(true);
  const [advElectronicBodyVisible, setAdvVehcileBodyVisible] = useState(true);

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
    navigate("/advertisement/electronic/cellaprv_s2");
  };
  return (
    <div className="adv-electronic">
      <div>
        <div className="electronic-box">
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
          <div className="electronic-content">
            <main>
              <div>
                <h3 id="electronic_category-selection">1-Kategori Secimi</h3>
                <h4 className="electronic-stepbystep">
                  Adim adim kategori seciniz
                </h4>
                {backToSelectionVisible && (
                  <div className="backtoselection">
                    <a href={"http://localhost:3000/advertisement"}>
                      Elektronik Urunler
                    </a>
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
                {advElectronicBodyVisible && (
                  <div className="adv-electronic-body">
                    <ul>
                      <li
                        onClick={() => handleFirstBoxClick(" Bilgisayar")}
                        className={
                          selectedWordsFromBox1.includes(" Bilgisayar")
                            ? "veh_selected"
                            : ""
                        }
                      >
                        Bilgisayar
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick("Beyaz Esya")}
                        className={
                          selectedWordsFromBox1.includes("Beyaz Esya")
                            ? "veh_selected"
                            : ""
                        }
                      >
                        Beyaz Esya
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick("Cep Telefonu")}
                        className={
                          selectedWordsFromBox1.includes("Cep Telefonu")
                            ? "veh_selected"
                            : ""
                        }
                      >
                        Cep Telefonu
                      </li>
                      <li
                        onClick={() =>
                          handleFirstBoxClick(" Fotograf & Kamera")
                        }
                        className={
                          selectedWordsFromBox1.includes(" Fotograf & Kamera")
                            ? "veh_selected"
                            : ""
                        }
                      >
                        Fotograf & Kamera
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick("Ev Elektronigi")}
                        className={
                          selectedWordsFromBox1.includes("Ev Elektronigi")
                            ? "veh_selected"
                            : ""
                        }
                      >
                        Ev Elektronigi
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick(" Diger")}
                        className={
                          selectedWordsFromBox1.includes(" Diger")
                            ? "veh_selected"
                            : ""
                        }
                      >
                        Diger
                      </li>
                    </ul>
                    {openBox2 && (
                      <ul>
                        <li
                          onClick={() => handleSecondBoxClick(" Yeni Urun")}
                          className={
                            selectedWordsFromBox2.includes(" Yeni Urun")
                              ? "veh_selected"
                              : ""
                          }
                        >
                          Yeni Urun
                        </li>
                        <li
                          onClick={() => handleSecondBoxClick("Ikinci El Urun")}
                          className={
                            selectedWordsFromBox2.includes("Ikinci El Urun")
                              ? "veh_selected"
                              : ""
                          }
                        >
                          Ikinci El Urun
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

export default ElectronicCategory;
