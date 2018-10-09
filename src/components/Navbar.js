import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = () => (
  <nav className="navbar has-position-top is-transparent">
    <div className="container is-fluid">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img className="logo" src={logo} alt="Guadagnare col Matched Betting"/>
          </figure>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
