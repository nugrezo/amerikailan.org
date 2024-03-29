import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import checkmark from "../../library/advicons/greencheckmark.png";
import "./ServicesCategory.css";
import Footer from "../Footer/Footer";
import logo from "../../library/logo.png";
import Usermenu from "../Usermenu/Usermenu";
import ProgressBar from "../ProgressBar/ProgressBar";
import { AppContext } from "../ContextProvider";

const ServicesCategory = () => {
  const { handleNext } = useContext(AppContext); // Access handleNext from context
  const navigate = useNavigate();

  const [selectedWordsFromBox1, setSelectedWordsFromBox1] = useState([]);

  const [openBox2, setOpenBox2] = useState(false);
  const [selectedWordsFromBox2, setSelectedWordsFromBox2] = useState([]);

  const [openEvTadilatiBox3, setOpenEvTadilatiDekorasyonOpenBox3] =
    useState(false);
  const [selectedWordsFromEvtatiladiBox3, setSelectedWordsFromEvTadilatiBox3] =
    useState([]);

  const [openNakliyeBox3, setOpenNakliyeBox3] = useState(false);
  const [selectedWordsNakliyeFromBox3, setSelectedWordsNakliyeFromBox3] =
    useState([]);

  const [openAracServisBakimBox3, setOpenAracServisBakimBox3] = useState(false);
  const [
    selectedWordsFromAracServisBakimBox,
    setSelectedWordsFromAracServisBakimBox,
  ] = useState([]);

  const [openTechServiceBox3, setOpenTechServiceBox3] = useState(false);
  const [selectedWordFromTechService, setSelectedWordFromTechService] =
    useState([]);

  const [openPrivateLessonBox3, setOpenPrivateLessonBox3] = useState(false);
  const [
    selectedWordFromPrivateLessonBox3,
    setSelectedWordFromPrivateLessonBox3,
  ] = useState([]);

  const [openHelperBox3, setOpenHelperBox3] = useState(false);
  const [selectedWordFromHelperBox3, setSelectedWordFromHelperBox3] = useState(
    []
  );

  const [openLanguageBox, setOpenLanguageBox] = useState(false);
  const [selectedWordFromLanguageBox, setSelectedWordFromLanguageBox] =
    useState([]);

  const [openArtBox, setOpenArtBox] = useState(false);
  const [selectedWordFromArtBox, setSelectedWordFromArtBox] = useState([]);

  const [openSportBox, setOpenSportBox] = useState(false);
  const [selectedWordFromSportBox, setSelectedWordFromSportBox] = useState([]);

  const [openBox4, setOpenBox4] = useState(false);
  const [selectedWordsFromBox4, setSelectedWordsFromBox4] = useState([]);
  console.log(selectedWordsFromBox4);
  useState([]);

  const [advServicesBodyVisible, setAdvServicesBodyVisible] = useState(true);

  const handleFirstBoxClick = (value) => {
    setSelectedWordsFromBox1([value]);
    setOpenBox2(true);
    setOpenEvTadilatiDekorasyonOpenBox3(false);
    setSelectedWordsFromEvTadilatiBox3([""]);
    setOpenAracServisBakimBox3(false);
    setOpenNakliyeBox3(false);
    setSelectedWordsNakliyeFromBox3([""]);
    setOpenTechServiceBox3(false);
    setOpenPrivateLessonBox3(false);
    setOpenLanguageBox(false);
    setOpenArtBox(false);
    setOpenSportBox(false);
    setOpenHelperBox3(false);
    setOpenBox4(false);
  };

  const handleSecondBoxClick = (value) => {
    if (selectedWordsFromBox1.includes("Ev Tadilati & Dekorasyon")) {
      setOpenEvTadilatiDekorasyonOpenBox3(true);
      setSelectedWordsFromBox2([value]);
      setOpenAracServisBakimBox3(false);
      setOpenBox4(false);
    } else if (selectedWordsFromBox1.includes("Nakliye")) {
      setOpenNakliyeBox3(true);
      setOpenEvTadilatiDekorasyonOpenBox3(false);
      setSelectedWordsFromBox2([value]);
      setOpenBox4(false);
    } else if (selectedWordsFromBox1.includes("Arac Servis Bakim")) {
      setOpenAracServisBakimBox3(true);
      setSelectedWordsFromBox2([value]);
      setOpenBox4(false);
    } else if (selectedWordsFromBox1.includes("Teknik Servis")) {
      setOpenTechServiceBox3(true);
      setSelectedWordsFromBox2([value]);
      setOpenBox4(false);
    } else if (selectedWordsFromBox1.includes("Ozel Ders")) {
      setOpenPrivateLessonBox3(true);
      setOpenLanguageBox(false);
      setSelectedWordsFromBox2([value]);
      setOpenBox4(false);
      setOpenEvTadilatiDekorasyonOpenBox3(false);
      setOpenAracServisBakimBox3(false);
      setOpenNakliyeBox3(false);
      setOpenTechServiceBox3(false);
    } else if (selectedWordsFromBox1.includes("Yardimci Arayanlar")) {
      setOpenHelperBox3(true);
      setOpenBox4(false);
      setOpenEvTadilatiDekorasyonOpenBox3(false);
      setOpenAracServisBakimBox3(false);
      setOpenNakliyeBox3(false);
      setOpenTechServiceBox3(false);
      setOpenLanguageBox(false);
      setSelectedWordsFromBox2([value]);
    } else {
      setSelectedWordsFromBox2([value]);
      setOpenBox4(false);
    }
  };

  const handleEvTadilatiBox3Click = (value) => {
    setSelectedWordsFromEvTadilatiBox3([value]);
    setSelectedWordsFromBox4([""]);
    setOpenBox4(true);
  };

  const handleNakliyeBox3Click = (value) => {
    setSelectedWordsNakliyeFromBox3([value]);
    setSelectedWordsFromBox4([""]);
    setOpenBox4(true);
  };

  const handleAracBakimBox3Click = (value) => {
    setSelectedWordsFromAracServisBakimBox([value]);
    setSelectedWordsFromBox4([""]);
    setOpenBox4(true);
  };

  const handleTechServiceBox3Click = (value) => {
    setSelectedWordFromTechService([value]);
    setSelectedWordsFromBox4([""]);
    setOpenBox4(true);
  };

  const handlePrivateLessonBox3 = (value) => {
    setSelectedWordFromPrivateLessonBox3([value]);
    setOpenBox4(false);
    if (value === "Dil") {
      setOpenLanguageBox(true);
      setOpenArtBox(false);
      setOpenSportBox(false);
      setSelectedWordFromLanguageBox([""]);
      setSelectedWordFromArtBox([""]);
      setSelectedWordFromSportBox([""]);
    } else if (value === "Sanat") {
      setOpenArtBox(true);
      setOpenLanguageBox(false);
      setOpenSportBox(false);
      setSelectedWordFromLanguageBox([""]);
      setSelectedWordFromArtBox([""]);
      setSelectedWordFromSportBox([""]);
    } else if (value === "Spor") {
      setOpenSportBox(true);
      setOpenLanguageBox(false);
      setOpenArtBox(false);
      setSelectedWordFromLanguageBox([""]);
      setSelectedWordFromArtBox([""]);
      setSelectedWordFromSportBox([""]);
    } else {
      setOpenLanguageBox(false);
      setOpenSportBox(false);
      setOpenArtBox(false);
      setOpenBox4(true);
    }
  };

  const handleLanguageBox = (value) => {
    setOpenLanguageBox(true);
    setSelectedWordFromLanguageBox([value]);
    setOpenBox4(true);
  };

  const handleArtBox = (value) => {
    setOpenArtBox(true);
    setOpenBox4(true);
    setSelectedWordFromArtBox([value]);
  };

  const handleSportBox = (value) => {
    setOpenSportBox(true);
    setOpenBox4(true);
    setSelectedWordFromSportBox([value]);
  };

  const handleHelperBox = (value) => {
    setSelectedWordFromHelperBox3([value]);
    setOpenSportBox(false);
  };

  const handleFourtBoxClick = (value) => {
    setSelectedWordsFromBox4([value]);
    console.log("button is clicked");
    setOpenBox2(false);
    setOpenBox4(false);
    setAdvServicesBodyVisible(false);
    handleNext();
    navigate("/advertisement/services/cellaprv_s2");
  };

  return (
    <div className="adv-services">
      <div>
        <div className="services-box">
          <div className="container">
            <nav className="navbar">
              <div className="nav-logo">
                <Link to="/">
                  <img src={logo} width="200px;" height="60px;" alt="logo" />
                </Link>
              </div>
              <div className="nav-userProfile">
                <Usermenu />
              </div>
            </nav>
          </div>
          <ProgressBar />
          <div className="services-content">
            <main>
              <div>
                <h3 id="services_category-selection">1-Kategori Secimi</h3>
                <h4 className="services-stepbystep">
                  Adim adim kategori seciniz
                </h4>

                <div className="backtoselection">
                  <a href={"http://localhost:3000/advertisement"}>Hizletler</a>
                  {openBox2 && (
                    <>
                      <span>&gt;</span>
                      {selectedWordsFromBox1.map((word, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <span>&gt;</span>}
                          <p>{word}</p>
                        </React.Fragment>
                      ))}
                    </>
                  )}
                  {openEvTadilatiBox3 && (
                    <>
                      <span>&gt;</span>
                      {selectedWordsFromBox2.map((word, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <span>&gt;</span>}
                          <p>{word}</p>
                        </React.Fragment>
                      ))}
                    </>
                  )}

                  {openNakliyeBox3 && (
                    <>
                      <span>&gt;</span>
                      {selectedWordsFromBox2.map((word, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <span>&gt;</span>}
                          <p>{word}</p>
                        </React.Fragment>
                      ))}
                    </>
                  )}

                  {openAracServisBakimBox3 && (
                    <>
                      <span>&gt;</span>
                      {selectedWordsFromBox2.map((word, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <span>&gt;</span>}
                          <p>{word}</p>
                        </React.Fragment>
                      ))}
                    </>
                  )}
                  {openTechServiceBox3 && (
                    <>
                      <span>&gt;</span>
                      {selectedWordsFromBox2.map((word, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <span>&gt;</span>}
                          <p>{word}</p>
                        </React.Fragment>
                      ))}
                    </>
                  )}
                  {openPrivateLessonBox3 && (
                    <>
                      <span>&gt;</span>
                      {selectedWordsFromBox2.map((word, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <span>&gt;</span>}
                          <p>{word}</p>
                        </React.Fragment>
                      ))}
                    </>
                  )}
                  {openArtBox && (
                    <>
                      <span>&gt;</span>
                      {selectedWordsFromBox2.map((word, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <span>&gt;</span>}
                          <p>{word}</p>
                        </React.Fragment>
                      ))}
                    </>
                  )}
                  {openSportBox && (
                    <>
                      <span>&gt;</span>
                      {selectedWordsFromBox2.map((word, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <span>&gt;</span>}
                          <p>{word}</p>
                        </React.Fragment>
                      ))}
                    </>
                  )}
                  {openHelperBox3 && (
                    <>
                      <span>&gt;</span>
                      {selectedWordsFromBox2.map((word, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <span>&gt;</span>}
                          <p>{word}</p>
                        </React.Fragment>
                      ))}
                    </>
                  )}

                  {<span>&gt;</span>}
                  {selectedWordsFromEvtatiladiBox3.map((word, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span>&gt;</span>}
                      <p>{word}</p>
                    </React.Fragment>
                  ))}
                  {openNakliyeBox3 &&
                    selectedWordsNakliyeFromBox3.map((word, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <span>&gt;</span>}
                        <p>{word}</p>
                      </React.Fragment>
                    ))}
                  {selectedWordsFromAracServisBakimBox.map((word, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span>&gt;</span>}
                      <p>{word}</p>
                    </React.Fragment>
                  ))}
                  {selectedWordFromTechService.map((word, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span>&gt;</span>}
                      <p>{word}</p>
                    </React.Fragment>
                  ))}
                  {selectedWordFromLanguageBox.map((word, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span>&gt;</span>}
                      <p>{word}</p>
                    </React.Fragment>
                  ))}
                  {selectedWordFromArtBox.map((word, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span>&gt;</span>}
                      <p>{word}</p>
                    </React.Fragment>
                  ))}
                  {selectedWordFromSportBox.map((word, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span>&gt;</span>}
                      <p>{word}</p>
                    </React.Fragment>
                  ))}
                  {selectedWordFromHelperBox3.map((word, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span>&gt;</span>}
                      <p>{word}</p>
                    </React.Fragment>
                  ))}
                </div>

                {advServicesBodyVisible && (
                  <div className="adv-services-body">
                    <ul>
                      <li
                        onClick={() =>
                          handleFirstBoxClick("Ev Tadilati & Dekorasyon")
                        }
                        className={
                          selectedWordsFromBox1.includes(
                            "Ev Tadilati & Dekorasyon"
                          )
                            ? "serv_selected"
                            : ""
                        }
                      >
                        Ev Tadilati & Dekorasyon
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick("Nakliye")}
                        className={
                          selectedWordsFromBox1.includes("Nakliye")
                            ? "serv_selected"
                            : ""
                        }
                      >
                        Nakliye
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick("Arac Servis Bakim")}
                        className={
                          selectedWordsFromBox1.includes("Arac Servis Bakim")
                            ? "serv_selected"
                            : ""
                        }
                      >
                        Arac Servis Bakim
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick("Teknik Servis")}
                        className={
                          selectedWordsFromBox1.includes("Teknik Servis")
                            ? "serv_selected"
                            : ""
                        }
                      >
                        Teknik Servis
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick("Ozel Ders")}
                        className={
                          selectedWordsFromBox1.includes("Ozel Ders")
                            ? "serv_selected"
                            : ""
                        }
                      >
                        Ozel Ders
                      </li>
                      <li
                        onClick={() =>
                          handleFirstBoxClick("Yardimci Arayanlar")
                        }
                        className={
                          selectedWordsFromBox1.includes("Yardimci Arayanlar")
                            ? "serv_selected"
                            : ""
                        }
                      >
                        Yardimci Arayanlar
                      </li>
                      <li
                        onClick={() => handleFirstBoxClick(" Diger")}
                        className={
                          selectedWordsFromBox1.includes(" Diger")
                            ? "serv_selected"
                            : ""
                        }
                      >
                        Diger
                      </li>
                    </ul>
                    {openBox2 && (
                      <ul>
                        <li
                          onClick={() =>
                            handleSecondBoxClick("Hizmet Saglayan")
                          }
                          className={
                            selectedWordsFromBox2.includes("Hizmet Saglayan")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Hizmet Saglayan
                        </li>
                        <li
                          onClick={() =>
                            handleSecondBoxClick("Hizmet Talep Eden")
                          }
                          className={
                            selectedWordsFromBox2.includes("Hizmet Talep Eden")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Hizmet Talep Eden
                        </li>
                      </ul>
                    )}
                    {openEvTadilatiBox3 && (
                      <ul>
                        <li
                          onClick={() =>
                            handleEvTadilatiBox3Click("Alarm & Guvenlik")
                          }
                          className={
                            selectedWordsFromEvtatiladiBox3.includes(
                              "Alarm & Guvenlik"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Alarm & Guvenlik
                        </li>
                        <li
                          onClick={() =>
                            handleEvTadilatiBox3Click("Alci & Kartonpiyer")
                          }
                          className={
                            selectedWordsFromEvtatiladiBox3.includes(
                              "Alci & Kartonpiyer"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Alci & Kartonpiyer
                        </li>
                        <li
                          onClick={() =>
                            handleEvTadilatiBox3Click("Bahce & Peyzaj")
                          }
                          className={
                            selectedWordsFromEvtatiladiBox3.includes(
                              "Bahce & Peyzaj"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Bahce & Peyzaj
                        </li>
                        <li
                          onClick={() =>
                            handleEvTadilatiBox3Click("Boya & Badana")
                          }
                          className={
                            selectedWordsFromEvtatiladiBox3.includes(
                              "Boya & Badana"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Boya & Badana
                        </li>
                        <li
                          onClick={() => handleEvTadilatiBox3Click("Cilingir")}
                          className={
                            selectedWordsFromEvtatiladiBox3.includes("Cilingir")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Cilingir
                        </li>
                        <li
                          onClick={() =>
                            handleEvTadilatiBox3Click("Elektrik & Aydinlatma")
                          }
                          className={
                            selectedWordsFromEvtatiladiBox3.includes(
                              "Elektrik & Aydinlatma"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Elektrik & Aydinlatma
                        </li>
                        <li
                          onClick={() =>
                            handleEvTadilatiBox3Click("Isitma & Sogutma")
                          }
                          className={
                            selectedWordsFromEvtatiladiBox3.includes(
                              "Isitma & Sogutma"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Isitma & Sogutma
                        </li>
                        <li
                          onClick={() =>
                            handleEvTadilatiBox3Click("Insaat & Hafriyat")
                          }
                          className={
                            selectedWordsFromEvtatiladiBox3.includes(
                              "Insaat & Hafriyat"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Insaat & Hafriyat
                        </li>
                        <li
                          onClick={() =>
                            handleEvTadilatiBox3Click("Marangonzluk")
                          }
                          className={
                            selectedWordsFromEvtatiladiBox3.includes(
                              "Marangonzluk"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Marangonzluk
                        </li>
                        <li
                          onClick={() =>
                            handleEvTadilatiBox3Click("Mimarlik & Muhendislik")
                          }
                          className={
                            selectedWordsFromEvtatiladiBox3.includes(
                              "Mimarlik & Muhendislik"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Mimarlik & Muhendislik
                        </li>
                      </ul>
                    )}
                    {openNakliyeBox3 && (
                      <ul>
                        <li
                          onClick={() =>
                            handleNakliyeBox3Click("Evden Eve Nakliyat")
                          }
                          className={
                            selectedWordsNakliyeFromBox3.includes(
                              "Evden Eve Nakliyat"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Evden Eve Nakliyat
                        </li>
                        <li
                          onClick={() => handleNakliyeBox3Click("Gumrukleme")}
                          className={
                            selectedWordsNakliyeFromBox3.includes("Gumrukleme")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Gumrukleme
                        </li>
                        <li
                          onClick={() =>
                            handleNakliyeBox3Click("Kurye & Kargo")
                          }
                          className={
                            selectedWordsNakliyeFromBox3.includes(
                              "Kurye & Kargo"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Kurye & Kargo
                        </li>
                        <li
                          onClick={() =>
                            handleNakliyeBox3Click(
                              "Lojistik & Deoplama & Paketleme"
                            )
                          }
                          className={
                            selectedWordsNakliyeFromBox3.includes(
                              "Lojistik & Deoplama & Paketleme"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Lojistik & Deoplama & Paketleme
                        </li>
                        <li
                          onClick={() =>
                            handleNakliyeBox3Click("Soforlu Arac Transfer")
                          }
                          className={
                            selectedWordsNakliyeFromBox3.includes(
                              "Soforlu Arac Transfer"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Soforlu Arac Transfer
                        </li>
                        <li
                          onClick={() =>
                            handleNakliyeBox3Click("Yuk Tasimaciligi")
                          }
                          className={
                            selectedWordsNakliyeFromBox3.includes(
                              "Yuk Tasimaciligi"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Yuk Tasimaciligi
                        </li>
                        <li
                          onClick={() => handleNakliyeBox3Click("Diger")}
                          className={
                            selectedWordsNakliyeFromBox3.includes("Diger")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Diger
                        </li>
                      </ul>
                    )}
                    {openAracServisBakimBox3 && (
                      <ul>
                        <li
                          onClick={() =>
                            handleAracBakimBox3Click("Cekici & Yol Yardim")
                          }
                          className={
                            selectedWordsNakliyeFromBox3.includes(
                              "Cekici & Yol Yardim"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Cekici & Yol Yardim
                        </li>
                        <li
                          onClick={() =>
                            handleAracBakimBox3Click("Oto Servis & Tamir")
                          }
                          className={
                            selectedWordsNakliyeFromBox3.includes("Gumrukleme")
                              ? "Oto Servis & Tamir"
                              : ""
                          }
                        >
                          Oto Servis & Tamir
                        </li>
                        <li
                          onClick={() =>
                            handleAracBakimBox3Click("Dogrultma & Boyama")
                          }
                          className={
                            selectedWordsNakliyeFromBox3.includes(
                              "Dogrultma & Boyama"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Dogrultma & Boyama
                        </li>
                      </ul>
                    )}
                    {openTechServiceBox3 && (
                      <ul>
                        <li
                          onClick={() =>
                            handleTechServiceBox3Click("Altin & Gumus Tamiri")
                          }
                          className={
                            selectedWordFromTechService.includes(
                              "Altin & Gumus Tamiri"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Altin & Gumus Tamiri
                        </li>
                        <li
                          onClick={() =>
                            handleTechServiceBox3Click("Beyaz Esya Servisi")
                          }
                          className={
                            selectedWordFromTechService.includes(
                              "Beyaz Esya Servisi"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Beyaz Esya Servisi
                        </li>
                        <li
                          onClick={() =>
                            handleTechServiceBox3Click("Dogrultma & Boyama")
                          }
                          className={
                            selectedWordFromTechService.includes(
                              "Dogrultma & Boyama"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Dogrultma & Boyama
                        </li>
                        <li
                          onClick={() =>
                            handleTechServiceBox3Click("Bisiklet Tamiri")
                          }
                          className={
                            selectedWordFromTechService.includes(
                              "Bisiklet Tamiri"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Bisiklet Tamiri
                        </li>
                        <li
                          onClick={() =>
                            handleTechServiceBox3Click("Cep Telefonu Tamiri")
                          }
                          className={
                            selectedWordFromTechService.includes(
                              "Cep Telefonu Tamiri"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Cep Telefonu Tamiri
                        </li>
                        <li
                          onClick={() =>
                            handleTechServiceBox3Click("Ev Elektronigi Tamiri")
                          }
                          className={
                            selectedWordFromTechService.includes(
                              "Ev Elektronigi Tamiri"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Ev Elektronigi Tamiri
                        </li>
                        <li
                          onClick={() =>
                            handleTechServiceBox3Click("Mobilya Tamiri")
                          }
                          className={
                            selectedWordFromTechService.includes(
                              "Mobilya Tamiri"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Mobilya Tamiri
                        </li>
                        <li
                          onClick={() => handleTechServiceBox3Click("Diger")}
                          className={
                            selectedWordFromTechService.includes("Diger")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Diger
                        </li>
                      </ul>
                    )}
                    {openPrivateLessonBox3 && (
                      <ul>
                        <li
                          onClick={() => handlePrivateLessonBox3("Dil")}
                          className={
                            selectedWordFromPrivateLessonBox3.includes("Dil")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Dil
                        </li>
                        <li
                          onClick={() => handlePrivateLessonBox3("Sanat")}
                          className={
                            selectedWordFromPrivateLessonBox3.includes("Sanat")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Sanat
                        </li>
                        <li
                          onClick={() => handlePrivateLessonBox3("Spor")}
                          className={
                            selectedWordFromPrivateLessonBox3.includes("Spor")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Spor
                        </li>
                        <li
                          onClick={() => handlePrivateLessonBox3("Diger")}
                          className={
                            selectedWordFromPrivateLessonBox3.includes("Diger")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Diger
                        </li>
                      </ul>
                    )}
                    {openLanguageBox && (
                      <ul>
                        <li
                          onClick={() => handleLanguageBox("Turkce")}
                          className={
                            selectedWordFromLanguageBox.includes("Turkce")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Turkce
                        </li>
                        <li
                          onClick={() => handleLanguageBox("Ingilizce")}
                          className={
                            selectedWordFromLanguageBox.includes("Ingilizce")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Ingilizce
                        </li>
                        <li
                          onClick={() => handleLanguageBox("Ispanyolca")}
                          className={
                            selectedWordFromLanguageBox.includes("Ispanyolca")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Ispanyolca
                        </li>
                        <li
                          onClick={() => handleLanguageBox("Almanca")}
                          className={
                            selectedWordFromLanguageBox.includes("Almanca")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Almanca
                        </li>

                        <li
                          onClick={() => handleLanguageBox("Fransizca")}
                          className={
                            selectedWordFromLanguageBox.includes("Fransizca")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Fransizca
                        </li>
                        <li
                          onClick={() => handleLanguageBox("Italyanca")}
                          className={
                            selectedWordFromLanguageBox.includes("Italyanca")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Italyanca
                        </li>
                        <li
                          onClick={() => handleLanguageBox("Diger")}
                          className={
                            selectedWordFromLanguageBox.includes("Diger")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Diger
                        </li>
                      </ul>
                    )}
                    {openArtBox && (
                      <ul>
                        <li
                          onClick={() => handleArtBox("Muzik")}
                          className={
                            selectedWordFromArtBox.includes("Muzik")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Muzik
                        </li>
                        <li
                          onClick={() => handleArtBox("Resim")}
                          className={
                            selectedWordFromArtBox.includes("Resim")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Resim
                        </li>
                        <li
                          onClick={() => handleArtBox("Diger")}
                          className={
                            selectedWordFromArtBox.includes("Diger")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Diger
                        </li>
                      </ul>
                    )}
                    {openSportBox && (
                      <ul>
                        <li
                          onClick={() => handleSportBox("Fitness")}
                          className={
                            selectedWordFromSportBox.includes("Fitness")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Fitness
                        </li>
                        <li
                          onClick={() => handleSportBox("Basketbol")}
                          className={
                            selectedWordFromSportBox.includes("Basketbol")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Basketbol
                        </li>
                        <li
                          onClick={() => handleSportBox("Futbol")}
                          className={
                            selectedWordFromSportBox.includes("Futbol")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Futbol
                        </li>
                        <li
                          onClick={() => handleSportBox("Golf")}
                          className={
                            selectedWordFromSportBox.includes("Golf")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Golf
                        </li>
                        <li
                          onClick={() => handleSportBox("Plates")}
                          className={
                            selectedWordFromSportBox.includes("Plates")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Plates
                        </li>
                        <li
                          onClick={() => handleSportBox("Yoga")}
                          className={
                            selectedWordFromSportBox.includes("Yoga")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Yoga
                        </li>
                        <li
                          onClick={() => handleSportBox("Diger")}
                          className={
                            selectedWordFromSportBox.includes("Diger")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Diger
                        </li>
                      </ul>
                    )}
                    {openHelperBox3 && (
                      <ul>
                        <li
                          onClick={() => handleHelperBox("Ev Temizligi")}
                          className={
                            selectedWordFromHelperBox3.includes("Ev Temizligi")
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Ev Temizligi
                        </li>
                        <li
                          onClick={() => handleHelperBox("Bebek Bakiciligi")}
                          className={
                            selectedWordFromHelperBox3.includes(
                              "Bebek Bakiciligi"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Bebek Bakiciligi
                        </li>
                        <li
                          onClick={() => handleHelperBox("Yasli Refakatciligi")}
                          className={
                            selectedWordFromHelperBox3.includes(
                              "Yasli Refakatciligi"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Yasli Refakatciligi
                        </li>
                        <li
                          onClick={() => handleHelperBox("Hasta Refakatciligi")}
                          className={
                            selectedWordFromHelperBox3.includes(
                              "Hasta Refakatciligi"
                            )
                              ? "serv_selected"
                              : ""
                          }
                        >
                          Hasta Refakatciligi
                        </li>
                        <li
                          onClick={() => handleHelperBox("Diger")}
                          className={
                            selectedWordFromHelperBox3.includes("Diger")
                              ? "serv_selected"
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
                        <p>Kategori secimi tamamlanmistir</p>
                        <button
                          onClick={() => handleFourtBoxClick("Devam edin")}
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

export default ServicesCategory;
