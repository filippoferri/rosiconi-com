import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

import facebook from "../img/social/facebook.svg";
import twitter from "../img/social/twitter.svg";
import whatsapp from "../img/social/whatsapp.svg";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

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
      <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <span className="is-hidden-touch">Condividi con un rosicone:</span>

          <FacebookShareButton
            url={"https://rosiconi.com"}
            quote={"Basta rosicare, ti diciamo come!"}
            className="Demo__some-network__share-button">
            <img className="social-icon" src={facebook} alt="facebook"/>
          </FacebookShareButton>

          <TwitterShareButton
            url={"https://rosiconi.com"}
            title={"Basta rosicare, ti diciamo come!"}
            className="Demo__some-network__share-button">
            <img className="social-icon" src={twitter} alt="twitter"/>
          </TwitterShareButton>

          <WhatsappShareButton
            url={"https://rosiconi.com"}
            title={"Basta rosicare, ti diciamo come!"}
            separator=":: "
            className="Demo__some-network__share-button">
            <img className="social-icon" src={whatsapp} alt="whatsapp"/>
          </WhatsappShareButton>
        </div>
      </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
