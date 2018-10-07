import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import CookieConsent from "react-cookie-consent";

import Navbar from "../components/Navbar";
import "../style/all.sass";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Come smettere di rosicare | Rosiconi"/>
    <Navbar/>
    <main>{children}</main>

    <CookieConsent
      disableStyles={true}
      location="top"
      acceptOnScroll={true}
      acceptOnScrollPercentage={50}
      buttonText="Chiudi"
      buttonClasses="button is-primary"
      containerClasses="cookie-alert"
      contentClasses="cookie-content"
      cookieName="rosiconidotcom"
      debug={true}
    >Questo sito utilizza i cookie. Per maggiori informazioni, <Link to={"/privacy-policy"} rel="noopener noreferrer">clicca qui</Link>. Se per te va bene, continua a navigare.</CookieConsent>

  </div>
);

export default TemplateWrapper;
