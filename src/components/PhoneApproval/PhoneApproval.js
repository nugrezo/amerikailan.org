import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../ContextProvider"; // Import the ContextProvider

import "./PhoneApproval.css";
import Usermenu from "../Usermenu/Usermenu";
import logo from "../../library/logo.png";
import cellphoneimage from "../../library/advicons/phone.png";
import lockimage from "../../library/advicons/lock.png";
import checkmark from "../../library/advicons/greencheckmark.png";
import Footer from "../Footer/Footer";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
import ProgressBar from "../ProgressBar/ProgressBar";

const PhoneApproval = () => {
  const { handleNext } = useContext(AppContext); // Access handleNext from context

  const [showContent, setShowContent] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [textCode, setTextCode] = useState("");
  const [isCodeMatched, setIsCodeMatched] = useState(false);
  const [error, setError] = useState("");
  const [isTimerZero, setIsTimerZero] = useState(false);
  const [restartTimer, setRestartTimer] = useState(false);
  const [numAttempts, setNumAttempts] = useState(0);

  const navigate = useNavigate();

  const originalCode = "123456";

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCellPhoneFormSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      setError("Please enter valid 10 digits valid phone number");
      return;
    }

    const phoneRegex = /^[0-9]{3}[0-9]{3}[0-9]{4}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("Please enter valid phone number");
      return;
    }

    setPhoneNumber("");
    setError("");
    setIsCodeMatched("");
    setShowContent(!showContent);
  };

  const handleTextCodeChange = (event) => {
    const enteredCode = event.target.value;
    setTextCode(enteredCode);
  };

  const handleTextCodeFormSubmit = (e) => {
    e.preventDefault();
    const enteredCode = textCode;
    console.log("enteredcode is ", enteredCode);
    if (enteredCode === originalCode) {
      setIsCodeMatched(true);
      setError("");
      setShowContent(false);
      handleNext();
      navigate("/advertisement/electronic/electronic_details_s3");
    } else {
      setIsCodeMatched(false);
      setError("The code did not match");
    }
    setTextCode("");
  };

  const handleChangeCellPhoneNo = () => {
    if (numAttempts < 2) {
      setShowContent(!showContent);
      setError("");
      setIsTimerZero(false);
      setNumAttempts(numAttempts + 1);
    } else {
      // Disable the input field after three attempts
      setShowContent(false);
      setError("Max allowed changes made. Try again tomorrow");
    }
  };

  const handleTimerZero = () => {
    setIsTimerZero(true);
  };

  const handleResendCode = (event) => {
    event.preventDefault();
    setRestartTimer(true);
    setIsTimerZero(!isTimerZero);
    setTimeout(() => {
      setError("");
    }, 0);
  };

  return (
    <div className="adv-electronic_step_two">
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
      <div className="adv-electronic_step_two_main">
        <h3 id="electronic_cellphoneapr">
          2-Please enter your cell phone number
        </h3>
        <div className="wrapper">
          {!isCodeMatched ? (
            <aside className="cellphone_images">
              <img className="phoneimage" src={cellphoneimage} alt="phone" />
              <img className="lockimage" src={lockimage} alt="lock" />
            </aside>
          ) : (
            <aside className="cellphone_images">
              <img className="phoneimage" src={cellphoneimage} alt="phone" />
              <img className="green" src={checkmark} alt="checkmark" />
            </aside>
          )}

          {showContent ? (
            <main className="cellphone_approval">
              <header>
                <h3 className="step_two_header">
                  You must approve your cell phone number to publish commercial
                </h3>
              </header>
              <form
                className="cellphone_form"
                onSubmit={handleCellPhoneFormSubmit}
              >
                <ul>
                  <li>Please enter your mobile number</li>
                  <li>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={phoneNumber}
                      placeholder="(###) ###-####"
                      required
                      onChange={handlePhoneNumberChange}
                      disabled={!showContent}
                    />
                  </li>
                  <li>
                    <button
                      type="submit"
                      className="submit_cellphone_btn_electronic"
                    >
                      Continue
                    </button>
                  </li>
                </ul>
              </form>
              {error && (
                <p
                  style={{
                    color: "red",
                    border: "1px solid red",
                    boxShadow: "0 0 5px red",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {error}
                </p>
              )}
            </main>
          ) : (
            <main className="textcode_approval">
              {!isCodeMatched ? (
                <header>
                  <h3 className="step_two_header">
                    Please enter the 6 digit code you received
                  </h3>
                </header>
              ) : (
                ""
              )}
              {!isCodeMatched ? (
                <CountDownTimer
                  onTimerZero={handleTimerZero}
                  onTimerRestart={restartTimer}
                />
              ) : (
                ""
              )}

              {!isCodeMatched ? (
                <form
                  className="textcode_form"
                  onSubmit={handleTextCodeFormSubmit}
                >
                  <ul>
                    <li>Enter the code(123456 for demo purpose)</li>
                    <li>
                      <input
                        type="text"
                        id="text_onaymsg"
                        name="text_onaykodu"
                        value={textCode}
                        placeholder="----"
                        onChange={handleTextCodeChange}
                      />
                    </li>
                    <li>
                      <button
                        type="button"
                        className="change_cellphone_btn"
                        onClick={handleChangeCellPhoneNo}
                      >
                        Change Number
                      </button>
                      {isTimerZero ? (
                        <button
                          type="button"
                          className="approve_cellphone_btn_electronic"
                          onClick={handleResendCode}
                        >
                          Sent again
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="approve_cellphone_btn_electronic"
                        >
                          Approve
                        </button>
                      )}
                    </li>
                  </ul>
                </form>
              ) : (
                ""
              )}

              {isCodeMatched ? (
                <div>
                  <p style={{ color: "green", fontSize: "20px" }}>
                    Telefon onay işleminiz başarıyla gerçekleştirilmiştir.
                  </p>
                  <br></br>
                  <p
                    style={{
                      color: "green",
                      border: "1px solid darkgreen",
                      boxShadow: "0 0 5px green",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    Diger asamaya yonlendiriliyorsunuz
                    <span
                      className="arrow right-arrow"
                      style={{
                        color: "green",
                        marginLeft: "18px",
                        verticalAlign: "middle",
                        fontSize: "20px",
                      }}
                    >
                      {"\u25B6"}
                    </span>
                  </p>
                </div>
              ) : (
                error && (
                  <p
                    style={{
                      color: "red",
                      border: "1px solid red",
                      boxShadow: "0 0 5px red",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    {error}
                  </p>
                )
              )}
            </main>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PhoneApproval;
