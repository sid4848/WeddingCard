import React from "react";
import Logo from "../../assets/Logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="wc__navbar">
      <p className="wc__navbar-links">
        <a href="#">
          <img src={Logo} alt="logo..." />
        </a>
      </p>
      <p className="wc__navbar-links">
        <a href="#">Wedding Cards</a>
      </p>
      <p className="wc__navbar-links">
        <a href="#">Birthday Cards</a>
      </p>
      <p className="wc__navbar-links">
        <a href="#">Aniversery Crads</a>
      </p>
      <p className="wc__navbar-links">
        <a href="#">Login | </a>
        <a href="#">Signin</a>
      </p>
    </div>
  );
};

export default Navbar;
