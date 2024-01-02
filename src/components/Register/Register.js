import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../library/logo.png";

import "./Register.css";
import googleIcon from "../../library/google.png";
import Footer from "../Footer/Footer";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setName] = useState("");
  const [userLastname, setLastname] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    if (inputEmail.trim() === "") {
      // Reset validation state when the input is empty
      setEmailIsValid(true);
    } else {
      // Validate email format and domain
      setEmailIsValid(validateEmail(inputEmail));
    }
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    if (inputPassword.trim() === "") {
      // Reset validation state when the input is empty
      setPasswordIsValid(true);
    } else {
      // Validate password format
      setPasswordIsValid(validatePassword(inputPassword));
    }
  };

  const handleNameChange = (e) => {
    const inputUserName = e.target.value;
    setName(inputUserName);
  };

  const handleLastnameChange = (e) => {
    const inputUserLastname = e.target.value;
    setLastname(inputUserLastname);
  };

  const validateEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^\S+@\S+\.\S{2,}$/;
    const isValidFormat = emailRegex.test(email);

    if (isValidFormat) {
      // Additional domain validation
      const validDomains = [
        "gmail.com",
        "hotmail.com",
        "yahoo.com",
        "outlook.com",
        "aol.com",
        "hotmail.co.uk",
        "hotmail.fr",
        "msn.com",
        "yahoo.fr	",
        "wanadoo.fr",
        "orange.fr	",
        "yahoo.co.uk	",
        "ahoo.com.br",
        "live.com",
        "yandex.ru",
        "googlemail.com",
        "yahoo.de",
      ]; // Add your list of valid domains
      const domain = email.split("@")[1];

      if (validDomains.includes(domain)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const validatePassword = (password) => {
    // Password must contain at least 1 number and 1 special character
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    return passwordRegex.test(password);
  };
  const getTickColor = (condition) => (condition ? "green" : "lightcoral");

  const handleRegister = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Lutfen gecerli bir email adresi veya sifre giriniz");
    } else if (emailIsValid && passwordIsValid) {
      // Perform login logic here
      alert(
        "Kayit isleminiz basariyla gerceklestirilmistir. Giris yapmak icin email adresinize gonderilen aktivasyon linkini tiklayiniz."
      );
      navigate("/Login");
    } else {
      alert("Girilen bilgiler hatalidir.Lutfen tekrar deneyiniz");
    }
    setEmail("");
    setPassword("");
    setEmailIsValid(true);
    setPasswordIsValid(true);
    setName("");
    setLastname("");
  };

  return (
    <div className="box">
      <div className="nav-register">
        <a className="navbar-brand" href="http://localhost:3000/">
          <img src={logo} width="200px;" height="60px;" alt="logo" />
        </a>
      </div>
      <div className="register-container">
        <h2>Kayit Olun</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="email">
            <label htmlFor="email"></label>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email adresinizi giriniz"
              style={{
                backgroundColor: emailIsValid
                  ? "rgb(232, 240, 254)"
                  : "lightcoral",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                outline: "none",
              }}
            />
          </div>
          <div className="user-fullame">
            <div className="user-name">
              <label htmlFor="name"></label>
              <input
                type="text"
                value={userName}
                onChange={handleNameChange}
                placeholder="Isminizi giriniz"
              />
            </div>
            <div className="user-lastname">
              <label htmlFor="lastname"></label>
              <input
                type="text"
                value={userLastname}
                onChange={handleLastnameChange}
                placeholder="Soy isminizi giriniz"
              />
            </div>
          </div>
          <div className="password">
            <label htmlFor="password"></label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Sifrenizi giriniz"
              style={{
                backgroundColor: passwordIsValid
                  ? "rgb(232, 240, 254)"
                  : "lightcoral",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                outline: "none",
              }}
            />
          </div>
          <div className="password-requirements">
            <ul>
              <li
                style={{
                  color: getTickColor(password.length >= 6),
                }}
              >
                Sifre minimum 6 karakter uzunlugunda olmalidir
              </li>
              <li style={{ color: getTickColor(/[a-zA-Z]/.test(password)) }}>
                Sifre en az 1 harf icermelidir
              </li>
              <li style={{ color: getTickColor(/[0-9]/.test(password)) }}>
                Sifre minimum 1 rakam icermelidir
              </li>
              <li style={{ color: getTickColor(/[!@#$%^&*]/.test(password)) }}>
                Sifre minimum 1 ozel karakter icermelidir[!@#$%^&*]
              </li>
            </ul>
          </div>

          <div className="email-giris-button">
            <button className="email-giris-button btn" type="submit">
              E-mail adresiniz ile kayit olun
            </button>
          </div>
        </form>
        <div className="register">
          <p>
            Eger uye iseniz
            <Link to="/login">
              <span className="custom-space">
                giris yapin{" "}
                <span className="arrow right-arrow">{"\u25B6"}</span>
              </span>
            </Link>
          </p>
          <div className="split-line">
            <span className="line"></span>
            <span className="split-text">VEYA</span>
            <span className="line"></span>
          </div>
        </div>
        <div className="google-container">
          <button className="google-button">
            <img
              src={googleIcon}
              alt="google-icon"
              className="google-icon"
            ></img>
            Google ile giriş yap
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
