import React, { useState } from "react";
import checkmark from "../../library/advicons/greencheckmark.png";
import "./RealEstateSubStepOne.css";

const RealEstateSubStepOne = () => {
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
  };
  return (
    <div className="adv-realestate">
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
                        <p>Kategori secimi tamamlanmistir</p>
                        <a
                          href="http://localhost:3000/advertisement/realestate_main/step_two"
                          alt="realestate_steptwo"
                        >
                          {" "}
                          <button
                            onClick={() => handleFourthBoxClick("Devam edin")}
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
    </div>
  );
};

export default RealEstateSubStepOne;
