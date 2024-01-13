import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import checkmark from "../../library/advicons/greencheckmark.png";
import "./RealEstateCategory.css";
import { AppContext } from "../ContextProvider"; // Import the ContextProvider

import ProgressBar from "../ProgressBar/ProgressBar";
import Usermenu from "../Usermenu/Usermenu";
import logo from "../../library/logo.png";
import Footer from "../Footer/Footer";

const RealEstateCategory = () => {
  const { handleNext } = useContext(AppContext); // Access handleNext from context

  const navigate = useNavigate();
  const [openBox2, setOpenBox2] = useState(false);
  const [openBox3, setOpenBox3] = useState(false);
  const [openBox4, setOpenBox4] = useState(false);
  const [selectedWordsFromBox1, setSelectedWordsFromBox1] = useState([]);
  const [selectedWordsFromBox2, setSelectedWordsFromBox2] = useState([]);
  const [selectedWordsFromBox3, setSelectedWordsFromBox3] = useState([]);
  const [selectedWordsFromBox4, setSelectedWordsFromBox4] = useState([]);
  console.log(selectedWordsFromBox4);
  const [conditionalBoxThreeOpen, setConditionalBoxThreeOpen] = useState(false);
  const [
    selectedWordsFromConditionalBoxThree,
    setSelectedWordsConditionalBoxThree,
  ] = useState([]);
  const [conditionalTuristTesisBox, setConditionalTuristTesisBox] =
    useState(false);
  const [
    selectedWordsConditionalTuristTesis,
    setSelectedWordsConditionalTuristTesis,
  ] = useState([]);

  const [backToSelectionVisible, setBackToSelectionVisible] = useState(true);

  const handleFirstBoxClick = (value) => {
    if (value === "Kiralik Oda") {
      setSelectedWordsFromBox1([value]);

      setOpenBox2(false);
      setOpenBox3(true);
    } else {
      setSelectedWordsFromBox1([value]);
      setSelectedWordsFromBox2([""]);
      setSelectedWordsFromBox3([""]);
      setSelectedWordsFromBox4([""]);
      setSelectedWordsConditionalBoxThree([""]);
      setOpenBox2(true);
      setOpenBox3(false);
      setOpenBox4(false);
      setConditionalBoxThreeOpen(false);
      setConditionalTuristTesisBox(false);
    }
  };

  const handleSecondBoxClick = (value) => {
    if (selectedWordsFromBox1.includes("Isyeri")) {
      setConditionalBoxThreeOpen(true);
      setSelectedWordsFromBox2([value]);
      setOpenBox4(false);
    } else {
      setSelectedWordsFromBox2([value]);
      setSelectedWordsFromBox3([""]);
      setOpenBox3(true);
      setOpenBox4(false);
    }

    if (selectedWordsFromBox1.includes("Arsa")) {
      setOpenBox3(false);
      setOpenBox4(true);
    }
    if (selectedWordsFromBox1.includes("Bina")) {
      setOpenBox3(false);
      setOpenBox4(true);
    }
    if (selectedWordsFromBox1.includes("Turistik Tesis")) {
      setConditionalTuristTesisBox(true);
      setSelectedWordsFromBox2([value]);

      setOpenBox3(false);
      setConditionalBoxThreeOpen(false);
    }
  };

  const handleThirdBoxClick = (value) => {
    console.log("selected word 2 is ", value);
    setSelectedWordsFromBox3([value]);
    console.log("Value 2 ", [value]);
    setOpenBox4(true);
  };

  const handleConditionalBoxThree = (value) => {
    setSelectedWordsConditionalBoxThree([value]);
    setOpenBox4(true);
  };

  const handleConditionalTuristTesisBox = (value) => {
    setSelectedWordsConditionalTuristTesis([value]);
    setOpenBox4(true);
  };

  const handleFourthBoxClick = (value) => {
    setSelectedWordsFromBox4([value]);
    console.log("button is clicked");
    setOpenBox2(false);
    setOpenBox3(false);
    setOpenBox4(false);
    setBackToSelectionVisible(false);
    handleNext();
    navigate("/advertisement/realestate/cellaprv_s2");
  };

  return (
    <div className="adv-realestate">
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
      <div>
        <div className="emlak-box">
          <div className="emlak-content">
            <main>
              <div>
                <h3 id="emlak_category-selection">1-Kategori Secimi</h3>
                <h4 className="stepbystep">Adim adim kategori seciniz</h4>
                {backToSelectionVisible && (
                  <div className="backtoselection">
                    <a href={"http://localhost:3000/advertisement"}>Emlak</a>
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

                <div className="adv-emlak-body">
                  <ul>
                    <li
                      onClick={() => handleFirstBoxClick("Kiralik Oda")}
                      className={
                        selectedWordsFromBox1.includes("Kiralik Oda")
                          ? "selected"
                          : ""
                      }
                    >
                      Kiralik Oda
                    </li>
                    <li
                      onClick={() => handleFirstBoxClick("Konut")}
                      className={
                        selectedWordsFromBox1.includes("Konut")
                          ? "selected"
                          : ""
                      }
                    >
                      Konut
                    </li>
                    <li
                      onClick={() => handleFirstBoxClick("Isyeri")}
                      className={
                        selectedWordsFromBox1.includes("Isyeri")
                          ? "selected"
                          : ""
                      }
                    >
                      Isyeri
                    </li>
                    <li
                      onClick={() => handleFirstBoxClick("Arsa")}
                      className={
                        selectedWordsFromBox1.includes("Arsa") ? "selected" : ""
                      }
                    >
                      Arsa
                    </li>
                    <li
                      onClick={() => handleFirstBoxClick("Bina")}
                      className={
                        selectedWordsFromBox1.includes("Bina") ? "selected" : ""
                      }
                    >
                      Bina
                    </li>
                    <li
                      onClick={() => handleFirstBoxClick("Turistik Tesis")}
                      className={
                        selectedWordsFromBox1.includes("Turistik Tesis")
                          ? "selected"
                          : ""
                      }
                    >
                      Turistik Tesis
                    </li>
                  </ul>
                  {openBox2 && (
                    <ul>
                      <li
                        onClick={() => handleSecondBoxClick("Satilik")}
                        className={
                          selectedWordsFromBox2.includes("Satilik")
                            ? "selected"
                            : ""
                        }
                      >
                        Satilik
                      </li>
                      <li
                        onClick={() => handleSecondBoxClick("Kiralik")}
                        className={
                          selectedWordsFromBox2.includes("Kiralik")
                            ? "selected"
                            : ""
                        }
                      >
                        Kiralik
                      </li>
                    </ul>
                  )}
                  {openBox3 && (
                    <ul>
                      <li
                        onClick={() => handleThirdBoxClick("Daire")}
                        className={
                          selectedWordsFromBox3.includes("Daire")
                            ? "selected"
                            : ""
                        }
                      >
                        Daire
                      </li>
                      <li
                        onClick={() => handleThirdBoxClick("Residence")}
                        className={
                          selectedWordsFromBox3.includes("Residence")
                            ? "selected"
                            : ""
                        }
                      >
                        Residence
                      </li>
                      <li
                        onClick={() => handleThirdBoxClick("Mustakil Ev")}
                        className={
                          selectedWordsFromBox3.includes("Mustakil Ev")
                            ? "selected"
                            : ""
                        }
                      >
                        Mustakil Ev
                      </li>
                      <li
                        onClick={() => handleThirdBoxClick("Villa")}
                        className={
                          selectedWordsFromBox3.includes("Villa")
                            ? "selected"
                            : ""
                        }
                      >
                        Villa
                      </li>
                      <li
                        onClick={() => handleThirdBoxClick("Yazlik")}
                        className={
                          selectedWordsFromBox3.includes("Yazlik")
                            ? "selected"
                            : ""
                        }
                      >
                        Yazlik
                      </li>
                      <li
                        onClick={() => handleThirdBoxClick("Ciftlik Evi")}
                        className={
                          selectedWordsFromBox3.includes("Ciftlik Evi")
                            ? "selected"
                            : ""
                        }
                      >
                        Ciftlik Evi
                      </li>
                    </ul>
                  )}
                  {conditionalBoxThreeOpen && (
                    <ul>
                      <li
                        onClick={() =>
                          handleConditionalBoxThree("Akaryakit Istasyonu")
                        }
                        className={
                          selectedWordsFromConditionalBoxThree.includes(
                            "Akaryakit Istasyonu"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Akaryakit Istasyonu
                      </li>
                      <li
                        onClick={() => handleConditionalBoxThree("Atolye")}
                        className={
                          selectedWordsFromConditionalBoxThree.includes(
                            "Atolye"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Atolye
                      </li>
                      <li
                        onClick={() => handleConditionalBoxThree("Bufe")}
                        className={
                          selectedWordsFromConditionalBoxThree.includes("Bufe")
                            ? "selected"
                            : ""
                        }
                      >
                        Bufe
                      </li>
                      <li
                        onClick={() => handleConditionalBoxThree("Buro & 0fis")}
                        className={
                          selectedWordsFromConditionalBoxThree.includes(
                            "Buro & 0fis"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Buro & 0fis
                      </li>
                      <li
                        onClick={() => handleConditionalBoxThree("Cafe & Bar")}
                        className={
                          selectedWordsFromConditionalBoxThree.includes(
                            "Cafe & Bar"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Cafe & Bar
                      </li>
                      <li
                        onClick={() => handleConditionalBoxThree("Depo")}
                        className={
                          selectedWordsFromConditionalBoxThree.includes("Depo")
                            ? "selected"
                            : ""
                        }
                      >
                        Depo
                      </li>
                      <li
                        onClick={() =>
                          handleConditionalBoxThree("Dukkan&Magaza")
                        }
                        className={
                          selectedWordsFromConditionalBoxThree.includes(
                            "Dukkan&Magaza"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Dukkan & Magaza
                      </li>
                      <li
                        onClick={() => handleConditionalBoxThree("Fabrika")}
                        className={
                          selectedWordsFromConditionalBoxThree.includes(
                            "Fabrika"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Fabrika
                      </li>
                      <li
                        onClick={() => handleConditionalBoxThree("Imalathane")}
                        className={
                          selectedWordsFromConditionalBoxThree.includes(
                            "Imalathane"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Imalathane
                      </li>
                      <li
                        onClick={() => handleConditionalBoxThree("Market")}
                        className={
                          selectedWordsFromConditionalBoxThree.includes(
                            "Market"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Market
                      </li>
                      <li
                        onClick={() => handleConditionalBoxThree("Supermarket")}
                        className={
                          selectedWordsFromConditionalBoxThree.includes(
                            "Supermarket"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Supermarket
                      </li>
                      <li
                        onClick={() => handleConditionalBoxThree("Otopark")}
                        className={
                          selectedWordsFromConditionalBoxThree.includes(
                            "Otopark"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Otopark
                      </li>
                      <li
                        onClick={() =>
                          handleConditionalBoxThree("Pastane & Firin")
                        }
                        className={
                          selectedWordsFromConditionalBoxThree.includes(
                            "Pastane & Firin"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Pastane & Firin
                      </li>
                      <li
                        onClick={() => handleConditionalBoxThree("Restaurant")}
                        className={
                          selectedWordsFromConditionalBoxThree.includes(
                            "Restaurant"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Restaurant
                      </li>
                      <li
                        onClick={() =>
                          handleConditionalBoxThree("Prefabrik Yapi")
                        }
                        className={
                          selectedWordsFromConditionalBoxThree.includes(
                            "Prefabrik Yapi"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Prefabrik Yapi
                      </li>
                      <li
                        onClick={() => handleConditionalBoxThree("Diger")}
                        className={
                          selectedWordsFromConditionalBoxThree.includes("Diger")
                            ? "selected"
                            : ""
                        }
                      >
                        Diger
                      </li>
                    </ul>
                  )}
                  {conditionalTuristTesisBox && (
                    <ul>
                      <li
                        onClick={() => handleConditionalTuristTesisBox("Otel")}
                        className={
                          selectedWordsConditionalTuristTesis.includes("Otel")
                            ? "selected"
                            : ""
                        }
                      >
                        Otel
                      </li>
                      <li
                        onClick={() =>
                          handleConditionalTuristTesisBox("Hostel")
                        }
                        className={
                          selectedWordsConditionalTuristTesis.includes("Hostel")
                            ? "selected"
                            : ""
                        }
                      >
                        Hostel
                      </li>
                      <li
                        onClick={() => handleConditionalTuristTesisBox("Motel")}
                        className={
                          selectedWordsConditionalTuristTesis.includes("Motel")
                            ? "selected"
                            : ""
                        }
                      >
                        Motel
                      </li>
                      <li
                        onClick={() =>
                          handleConditionalTuristTesisBox("Kamp Yeri")
                        }
                        className={
                          selectedWordsConditionalTuristTesis.includes(
                            "Kamp Yeri"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Kamp Yeri
                      </li>
                      <li
                        onClick={() =>
                          handleConditionalTuristTesisBox("Tatil Koyu")
                        }
                        className={
                          selectedWordsConditionalTuristTesis.includes(
                            "Tatil Koyu"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Tatil Koyu
                      </li>
                      <li
                        onClick={() =>
                          handleConditionalTuristTesisBox("Dag Evi")
                        }
                        className={
                          selectedWordsConditionalTuristTesis.includes(
                            "Dag Evi"
                          )
                            ? "selected"
                            : ""
                        }
                      >
                        Dag Evi
                      </li>
                      <li
                        onClick={() => handleConditionalTuristTesisBox("Depo")}
                        className={
                          selectedWordsConditionalTuristTesis.includes("Depo")
                            ? "selected"
                            : ""
                        }
                      >
                        Depo
                      </li>
                      <li
                        onClick={() => handleConditionalTuristTesisBox("Diger")}
                        className={
                          selectedWordsConditionalTuristTesis.includes("Diger")
                            ? "selected"
                            : ""
                        }
                      >
                        Diger
                      </li>
                    </ul>
                  )}
                  {openBox4 && (
                    <ul className="lastchild">
                      <img src={checkmark} alt="checkmark" />
                      <p>Kategori secimi tamamlanmistir</p>{" "}
                      <button
                        onClick={() => handleFourthBoxClick("Devam edin")}
                      >
                        Devam ediniz
                      </button>
                    </ul>
                  )}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RealEstateCategory;
