import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const PrivacyPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="section">
      <PageContent className="content" content={content}/>
    </div>
  );
};

PrivacyPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const PrivacyPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>

      <Helmet title={`Privacy Policy | Rosiconi.com`}/>

      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">{post.frontmatter.title}</h1>
          </div>
        </div>
      </section>

      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <PrivacyPageTemplate
                contentComponent={HTMLContent}
                content={post.html}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

PrivacyPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default PrivacyPage;

export const privacyPageQuery = graphql`
  query PrivacyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
