import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../library/logo.png";
import "./Register.css";
import googleIcon from "../../library/google.png";
import Footer from "../Footer/Footer";
import { AppContext } from "../ContextProvider";

const Register = () => {
  const { updateUserEmail, updateUserName, updateUserLastname } =
    useContext(AppContext);

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
    console.log("Email:", email);
    console.log("Name:", userName);
    console.log("Lastname:", userLastname);
    if (email.trim() === "" || password.trim() === "") {
      alert("Enter valid email or password");
    } else if (emailIsValid && passwordIsValid) {
      updateUserEmail(email);
      updateUserName(userName);
      updateUserLastname(userLastname);
      alert(
        "Successfully registered. Please confirm the activation link sent to your email"
      );
      navigate("/Login");
    } else {
      alert("Please enter correct crdidentials");
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
              placeholder="enter your e-mail"
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
                placeholder="Enter your name"
              />
            </div>
            <div className="user-lastname">
              <label htmlFor="lastname"></label>
              <input
                type="text"
                value={userLastname}
                onChange={handleLastnameChange}
                placeholder="Enter your lastname"
              />
            </div>
          </div>
          <div className="password">
            <label htmlFor="password"></label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
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
                Password must be min 6 character long
              </li>
              <li style={{ color: getTickColor(/[a-zA-Z]/.test(password)) }}>
                Password must contain min 1 letter
              </li>
              <li style={{ color: getTickColor(/[0-9]/.test(password)) }}>
                Password must contain min 1 number
              </li>
              <li style={{ color: getTickColor(/[!@#$%^&*]/.test(password)) }}>
                Password must contain min 1 special character[!@#$%^&*]
              </li>
            </ul>
          </div>

          <div className="email-giris-button">
            <button className="email-giris-button btn" type="submit">
              Register with your e-mail
            </button>
          </div>
        </form>
        <div className="register">
          <p>
            you already registered?
            <Link to="/login">
              <span className="custom-space">
                Login <span className="arrow right-arrow">{"\u25B6"}</span>
              </span>
            </Link>
          </p>
          <div className="split-line">
            <span className="line"></span>
            <span className="split-text">OR</span>
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
            Login with Google
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
