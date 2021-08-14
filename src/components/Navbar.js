import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    // It is generally usd to toggle the bar and cross sign for dropdown
    setClick(!click);
  };

  const closeMobileMenu = () => {
    // It is used to remove the dropdown menuw right after clicking the option
    setClick(false);
  };

  useEffect(() => {
    // It is used to remove the last signin button from the navbar on mobile view
    showButton();
  });

  const showButton = () => {
    // This is the place where the page actually becomes responsive and the navbar menu converts into the dropdown table in mobile view
    if (window.innerWidth <= 960) {
      // if the display size becomes less than or eqals to 960 out website changes according to the device ratio
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              src="/images/school_logo.png"
              alt="school_logo"
              className="logo"
            ></img>
          </Link>
          <h5>Gyansudha English School</h5>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/aboutus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/contactus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/signin"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign In</Button>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
