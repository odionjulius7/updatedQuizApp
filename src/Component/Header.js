import React from "react";
import TwoSure from "../img/2sure-logo.png";
// import Spec from "../img/are-you-a-sp.png";
import logo from "../img/logo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="col">
          <Link to="/">
            <img className="twoSure" src={TwoSure} alt="2sure" />
          </Link>
        </div>

        <div style={{ textAlign: "end" }} className="col">
          <Link to="/">
            <img className="logo" src={logo} alt="logoImage" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
