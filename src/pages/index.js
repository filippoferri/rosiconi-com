import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

import hero from "../img/rosiconi-matching-betting.jpg";



export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>

        <section className="hero is-fullheight has-background"
                 style={{ backgroundImage: `url(${hero})` }}>

          <div className="hero-body">
            <div className="container has-text-centered">
              <span className="is-uppercase has-text-white has-text-weight-bold">Un aiuto valido per chi ha logori</span>
              <h1 className="title is-huge has-text-white is-uppercase">denti & fegato</h1>

              <Link to="/soldi-sicuri-matched-betting" className="button is-primary is-large is-uppercase is-rounded">Come rosicare* meno</Link>

            </div>
          </div>

          <div className="hero-foot">
            <div className="container has-text-centered">
              <span className="has-text-white"><b>*Rosicare</b> /ro·si·cà·re/ Rodersi, consumarsi per la gelosia, l’invidia</span>
            </div>
          </div>

        </section>
      </Layout>
    );
  }
}
