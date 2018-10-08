import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import hero from "../img/rosiconi-guadagnare-soldi-extra.jpg";
import pic1 from "../img/profiles/pic-0001.jpg";
import pic2 from "../img/profiles/pic-0002.jpg";
import pic3 from "../img/profiles/pic-0003.jpg";
import pic4 from "../img/profiles/pic-0004.jpg";
import pic5 from "../img/profiles/pic-0005.jpg";
import pic6 from "../img/profiles/pic-0006.jpg";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (


    <div className="section">
      <PageContent className="content" content={content}/>
    </div>

  );
};

AboutPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>

      <Helmet title={`(1) Basta rosicare, guadagna soldi sicuri`}/>

      <section className="hero is-medium has-background"
               style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h1 className="title has-text-white is-huge">{post.frontmatter.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="thead-container">
                <div className="thead-header">
                  <div className="thead-header-left">27 Settembre 2018, 9:53 PM</div>
                  <div className="thead-header-right has-text-right">#1</div>
                </div>
                <div className="thead-body">
                  <div className="thead-body-left">
                    <div className="thead-username">michelesan</div>
                    <span className="is-block">Studente</span>

                    <img className="thead-avatar" src={pic1} alt="zerorischi avatar"/>

                    <ul>
                      <li>Città: Milano</li>
                      <li>Condivisioni: 1.239</li>
                      <li>Likes: 834</li>
                    </ul>

                  </div>
                  <div className="thead-body-right">

                    <div className="thead-body-description">Uno studente universitario si mantiene gli studi arrivando a guadagnare fino a 5000€ all'anno</div>

                    <AboutPageTemplate
                      contentComponent={HTMLContent}
                      content={post.html}
                    />

                    <div className="thead-body-footer"></div>
                  </div>
                </div>
              </div>

              <div className="thead-container">
                <div className="thead-header">
                  <div className="thead-header-left">28 Settembre 2018, 11:07 PM</div>
                  <div className="thead-header-right has-text-right">#2</div>
                </div>
                <div className="thead-body">
                  <div className="thead-body-left">
                    <div className="thead-username">giacko95</div>
                    <span className="is-block">Studente</span>

                    <img className="thead-avatar" src={pic2} alt="zerorischi avatar" style={{width: 80}}/>

                    <ul>
                      <li>Città: Torino</li>
                      <li>Condivisioni: 2.419</li>
                      <li>Likes: 52</li>
                    </ul>

                  </div>
                  <div className="thead-body-right">

                    <div className="thead-body-description">Re: Uno studente universitario si mantiene gli studi arrivando a guadagnare fino a 5000€ all'anno</div>
                    <div className="section">
                    Complimenti per il metodo, rosiconi a parte NinjaBet è il migliore sito di Matching Betting in Italia. Ho iniziato circa un mese fa ed ho già guadagnato 250€.
                    </div>

                    <div className="thead-body-footer"></div>

                  </div>
                </div>
              </div>

              <div className="thead-container">
                <div className="thead-header">
                  <div className="thead-header-left">29 Settembre 2018, 6:12 PM</div>
                  <div className="thead-header-right has-text-right">#3</div>
                </div>
                <div className="thead-body">
                  <div className="thead-body-left">
                    <div className="thead-username">lagiuly</div>
                    <span className="is-block">Studente</span>

                    <img className="thead-avatar" src={pic6} alt="lagiuly avatar" style={{width: 80}}/>

                    <ul>
                      <li>Città: Venezia</li>
                      <li>Condivisioni: 289</li>
                      <li>Likes: 26</li>
                    </ul>

                  </div>
                  <div className="thead-body-right">

                    <div className="thead-body-description">Re: Uno studente universitario si mantiene gli studi arrivando a guadagnare fino a 5000€ all'anno</div>
                    <div className="section">
                      Ninjabet guadagno assicurato!!! Basta seguire le istruzioni e con pochi minuti al giorno guadagno garantito!!!
                    </div>

                    <div className="thead-body-footer"></div>

                  </div>
                </div>
              </div>

              <div className="thead-container">
                <div className="thead-header">
                  <div className="thead-header-left">29 Settembre 2018, 7:23 PM</div>
                  <div className="thead-header-right has-text-right">#4</div>
                </div>
                <div className="thead-body">
                  <div className="thead-body-left">
                    <div className="thead-username">david24</div>
                    <span className="is-block">Studente</span>

                    <img className="thead-avatar" src={pic3} alt="zerorischi avatar" style={{width: 80}}/>

                    <ul>
                      <li>Città: Roma</li>
                      <li>Condivisioni: 45</li>
                      <li>Likes: 12</li>
                    </ul>

                  </div>
                  <div className="thead-body-right">

                    <div className="thead-body-description">Re: Uno studente universitario si mantiene gli studi arrivando a guadagnare fino a 5000€ all'anno</div>
                    <div className="section">
                      Ero molto scettico, ma mi son dovuto ricredere subito. Esattamente tutto come descritto, niente inganni, servizio eccellente, guadagno super!</div>

                    <div className="thead-body-footer"></div>

                  </div>
                </div>
              </div>

              <div className="thead-container">
                <div className="thead-header">
                  <div className="thead-header-left">30 Settembre 2018, 11:45 AM</div>
                  <div className="thead-header-right has-text-right">#5</div>
                </div>
                <div className="thead-body">
                  <div className="thead-body-left">
                    <div className="thead-username">danyred</div>
                    <span className="is-block">Studente</span>

                    <img className="thead-avatar" src={pic4} alt="danyred avatar" style={{width: 80}}/>

                    <ul>
                      <li>Città: Roma</li>
                      <li>Condivisioni: 25</li>
                      <li>Likes: 23</li>
                    </ul>

                  </div>
                  <div className="thead-body-right">

                    <div className="thead-body-description">Re: Uno studente universitario si mantiene gli studi arrivando a guadagnare fino a 5000€ all'anno</div>
                    <div className="section">
                      sono una studentessa e impegnando poche ore a settimana riesco sempre a guadagnare qualche centinaio di euro, alcuni amici si impegnano di più e riescono anche ad arrivare a cifre più alte che sono ben più di un semplice arrotondamento di stipendio</div>

                    <div className="thead-body-footer"></div>

                  </div>
                </div>
              </div>

              <div className="thead-container">
                <div className="thead-header">
                  <div className="thead-header-left">30 Settembre 2018, 6:28 PM</div>
                  <div className="thead-header-right has-text-right">#6</div>
                </div>
                <div className="thead-body">
                  <div className="thead-body-left">
                    <div className="thead-username">alexzanti</div>
                    <span className="is-block">Studente</span>

                    <img className="thead-avatar" src={pic5} alt="alexzanti avatar" style={{width: 80}}/>

                    <ul>
                      <li>Città: Milano</li>
                      <li>Condivisioni: 39</li>
                      <li>Likes: 35</li>
                    </ul>

                  </div>
                  <div className="thead-body-right">

                    <div className="thead-body-description">Re: Uno studente universitario si mantiene gli studi arrivando a guadagnare fino a 5000€ all'anno</div>
                    <div className="section">
                      Il metodo fa quello che promette, ci vuole tempo per ingranare io dopo 1 mesetto ho iniziato ad avere guadagni interessanti.</div>

                    <div className="thead-body-footer"></div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
