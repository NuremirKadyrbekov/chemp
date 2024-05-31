import React from "react";
import "./Header.css";
import Navigation from "./Navigation/Navigation";
import HeaderDesc from "./HeaderDesc/HeaderDesc";
import HeaderImages from "./HeaderImages/HeaderImages";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__body">
          <Navigation />
          <div className="header__content">
            <HeaderDesc />
            <HeaderImages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
