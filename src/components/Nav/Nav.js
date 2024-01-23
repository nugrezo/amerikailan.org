import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../library/logo.png";

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav nav-logo">
          <a className="navbar-brand" href="https://www.amerikailan.org">
            <img src={logo} width="200px;" height="40px;" alt="logo" />
          </a>
        </div>
        <div className="nav nav-search">
          <form action="#" method="get">
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
