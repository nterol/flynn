import React from 'react'
import { Link, graphql } from 'gatsby'

import styles from './styles.module.scss'

import Layout from '../components/layout'
import BlogDescription from '../components/atoms/blog-description/blog-description'
import PostsCard from '../components/organisms/posts-card/posts-card'

export const query = graphql`
  query PostsQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            path
            title
            date
            excerpt
            author
            tags
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { edges } = data.allMdx
  return (
    <Layout>
      <BlogDescription />
      <main className={styles.mainContainer}>
        {edges.map(({ node: { frontmatter } }) => (
          <PostsCard key={frontmatter.date} {...frontmatter} />
        ))}
      </main>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
