import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
// import type { MarkdownRemark } from '../types';

// type Props = {
//   data: {
//     markdownRemark: MarkdownRemark
//   }
// };

const PageTemplate = ({ data }) => {
  console.log('FDGHJKLJHGFDGHJKLMOHGFDGHJKLJHGFDGHJKLHGFDGHJKGFDFXGHJKL');
  console.log('PAGE TEMPLATE', data);
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: pageBody } = data.mdx;

  const { frontmatter } = data.mdx;
  const { title: pageTitle, description: pageDescription, socialImage } = frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;
  const socialImageUrl = typeof socialImage !== 'undefined' ? socialImage['publicURL'] : undefined;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImageUrl} >
      <Sidebar />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      html
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
