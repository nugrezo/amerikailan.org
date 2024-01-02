import React, { useState, useEffect, useRef } from "react";
import "./Usermenu.css";

const Usermenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleIconClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    // Handle menu item click here
    console.log(`Clicked on ${menuItem}`);
    // Close the menu after handling the click if needed
    setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      // Click outside the menu, close it
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);
    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="user-menu" ref={menuRef}>
      <div className="user-info">
        <span className="username">Username</span>
        <span className="icon" onClick={handleIconClick}>
          &#9776; {/* This is a Unicode character for a typical menu icon */}
        </span>
      </div>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <div onClick={() => handleMenuItemClick("Profile")}>Profilim</div>
          <div onClick={() => handleMenuItemClick("Publishing")}>Ilanlarim</div>
          <div onClick={() => handleMenuItemClick("Favorites")}>
            Favorilerim
          </div>

          <div onClick={() => handleMenuItemClick("Logout")}>Cikis Yap</div>
        </div>
      )}
    </div>
  );
};

export default Usermenu;
