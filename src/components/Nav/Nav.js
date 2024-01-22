import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../library/logo.png";
import axios from "axios"; // Import axios for making HTTP requests

const Nav = () => {
  const [searchPlaceholder, setSearchPlaceholder] = useState(
    "Aranacak kelimeyi giriniz"
  );
  const [loginText, setLoginText] = useState("Giris");
  const [registerText, setRegisterText] = useState("Kayit");
  const [freeAdText, setFreeAdText] = useState("Ucretsiz Ilan Ver");

  const translateToEnglish = () => {
    // Replace 'YOUR_GOOGLE_TRANSLATION_API_KEY' with your actual Google Cloud Translation API key
    const apiKey = "YOUR_GOOGLE_TRANSLATION_API_KEY";
    const apiUrl = "https://translation.googleapis.com/language/translate/v2";

    // Texts to be translated
    const textsToTranslate = [
      searchPlaceholder,
      loginText,
      registerText,
      freeAdText,
    ];

    axios
      .post(`${apiUrl}?key=${apiKey}`, {
        q: textsToTranslate,
        target: "en", // English language code
      })
      .then((response) => {
        const translations = response.data.data.translations;
        setSearchPlaceholder(translations[0].translatedText);
        setLoginText(translations[1].translatedText);
        setRegisterText(translations[2].translatedText);
        setFreeAdText(translations[3].translatedText);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <nav>
      <div className="container">
        <div className="nav nav-logo">
          <a className="navbar-brand" href="https://www.amerikailan.org">
            <img src={logo} width="200px;" height="40px;" alt="logo" />
          </a>
        </div>
        <div className="nav nav-search">
          <form action="#" method="get" onClick={translateToEnglish}>
            <input
              className="search-input-field"
              type="search"
              name="search"
              placeholder="type the word that you are looking for"
            />
            <button type="submit" className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className="nav nav-auth">
          <ul>
            <li>
              <form action="*" method="post">
                <input type="submit" className="enBtn" value="" name="lang" />
              </form>
            </li>
            <Link className="giris-yap-btn" to="/login">
              <li>Login</li>
            </Link>

            <Link className="kayit-ol-btn" to="/register">
              <li>Register</li>
            </Link>
          </ul>
        </div>
        <div className="nav nav-adv">
          <Link className="advertisement-btn" to="/advertisement">
            <button type="button" className="btn-primary">
              Free Add
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
