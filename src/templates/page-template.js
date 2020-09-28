import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const PageTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { body: pageBody } = data.mdx;

  const { frontmatter } = data.mdx;
  const {
    title: pageTitle,
    description: pageDescription,
    socialImage,
  } = frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;
  const socialImageUrl = typeof socialImage !== 'undefined' ? socialImage['publicURL'] : undefined;

  return (
    <Layout
      title={`${pageTitle} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImageUrl}
    >
      <Sidebar />
      <Page title={pageTitle}>
        <MDXRenderer>{pageBody}</MDXRenderer>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date
        description
        socialImage {
          publicURL
        }
      }
    }
  }
`;

export default PageTemplate;
