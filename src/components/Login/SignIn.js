import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../library/logo.png";

import "./Login.css";
import googleIcon from "../../library/google.png";
import Footer from "../Footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password.");
    } else if (emailIsValid && passwordIsValid) {
      // Perform login logic here
      alert("Login successful!");
    } else {
      alert("Invalid email or password. Please check your credentials.");
    }
    setEmail("");
    setPassword("");
    setEmailIsValid(true);
    setPasswordIsValid(true);
  };

  return (
    <div className="box">
      <div className="nav-login">
        <a className="navbar-brand" href="http://localhost:3000/">
          <img src={logo} width="200px;" height="60px;" alt="logo" />
        </a>
      </div>
      <div className="login-container">
        <h2>Giris Yapin</h2>
        <form className="login-form" onSubmit={handleLogin}>
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
          <div className="email-giris-button">
            <button className="email-giris-button btn" type="submit">
              E-mail adresiniz ile giris yapin
            </button>
          </div>
        </form>
        <div className="register">
          <p>
            Eger hesabinizi olusturmadiysaniz
            <Link to="/register">
              <span className="custom-space">
                kayit olun <span className="arrow right-arrow">{"\u25B6"}</span>
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

export default Login;
