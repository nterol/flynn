import React from 'react';
// import { graphql } from 'gatsby';
// import Layout from '../components/Layout';
// import Post from '../components/Post';
// import { useSiteMetadata } from '../hooks';
// import type { MarkdownRemark } from '../types';

// type Props = {
//   data: {
//     markdownRemark: MarkdownRemark
//   }
// };

const PostTemplate = (props) => {
  console.log('📦', props);
  // const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  // const { frontmatter } = data.mdx;
  // const { title: postTitle, description: postDescription, socialImage } = frontmatter;
  // const metaDescription = postDescription !== null ? postDescription : siteSubtitle;
  // const socialImageUrl = typeof socialImage !== 'undefined' ? socialImage['publicURL'] : undefined;

  return (
  <div>{props.children}</div>
  // <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImageUrl} >
  //   <Post post={data.mdx} />
  // </Layout>
  );
}
;

// export const query = graphql`
//   query PostBySlug($slug: String!) {
//     mdx(fields: { slug: { eq: $slug } }) {
//       id
//       body
//       fields {
//         slug
//         tagSlugs
//       }
//       frontmatter {
//         date
//         description
//         tags
//         title
//         socialImage {
//           publicURL
//         }
//       }
//     }
//   }
// `;

export default PostTemplate;
