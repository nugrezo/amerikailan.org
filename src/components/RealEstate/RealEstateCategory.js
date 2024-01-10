import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import checkmark from "../../library/advicons/greencheckmark.png";
import "./RealEstateCategory.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import Usermenu from "../Usermenu/Usermenu";
import logo from "../../library/logo.png";
import Footer from "../Footer/Footer";

const RealEstateCategory = () => {
  const navigate = useNavigate();
  const [openBox2, setOpenBox2] = useState(false);
  const [openBox3, setOpenBox3] = useState(false);
  const [openBox4, setOpenBox4] = useState(false);
  const [selectedWordsFromBox1, setSelectedWordsFromBox1] = useState([]);
  const [selectedWordsFromBox2, setSelectedWordsFromBox2] = useState([]);
  const [selectedWordsFromBox3, setSelectedWordsFromBox3] = useState([]);
  const [selectedWordsFromBox4, setSelectedWordsFromBox4] = useState([]);
  console.log(selectedWordsFromBox4);
  const [backToSelectionVisible, setBackToSelectionVisible] = useState(true);
  const [advEmlakBodyVisible, setAdvEmlakBodyVisible] = useState(true);

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
    console.log("selected word 2 is ", value);
    setSelectedWordsFromBox3([value]);
    console.log("Value 2 ", [value]);
    setOpenBox4(true);
  };

  const handleFourthBoxClick = (value) => {
    setSelectedWordsFromBox4([value]);
    console.log("button is clicked");
    setOpenBox2(false);
    setOpenBox3(false);
    setOpenBox4(false);
    setBackToSelectionVisible(false);
    setAdvEmlakBodyVisible(false);
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
                {advEmlakBodyVisible && (
                  <div className="adv-emlak-body">
                    <ul>
                      <li onClick={() => handleFirstBoxClick("Konut")}>
                        Konut
                      </li>
                      <li onClick={() => handleFirstBoxClick("Isyeri")}>
                        Isyeri
                      </li>
                      <li onClick={() => handleFirstBoxClick("Arsa")}>Arsa</li>
                      <li onClick={() => handleFirstBoxClick("Bina")}>Bina</li>
                      <li onClick={() => handleFirstBoxClick("Turistik Tesis")}>
                        Turistik Tesis
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
                      <ul>
                        <li onClick={() => handleThirdBoxClick("Daire")}>
                          Daire
                        </li>
                        <li onClick={() => handleThirdBoxClick("Residence")}>
                          Residence
                        </li>
                        <li onClick={() => handleThirdBoxClick("Mustakil Ev")}>
                          Mustakil Ev
                        </li>
                        <li onClick={() => handleThirdBoxClick("Villa")}>
                          Villa
                        </li>
                        <li onClick={() => handleThirdBoxClick("Yazlik")}>
                          Yazlik
                        </li>
                        <li onClick={() => handleThirdBoxClick("Ciftlik Evi")}>
                          Ciftlik Evi
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

export default RealEstateCategory;
