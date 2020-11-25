import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/atoms/hero/hero'
import BoopMoji from '../components/atoms/boop-moji/boop-moji'
import Quote from '../components/atoms/quote/quote'

export const query = graphql`
  query PostsQuery {
    site {
      siteMetadata {
        description
        miniBio
      }
    }
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
  const {
    allMdx: { edges },
    site: {
      siteMetadata: { description, miniBio },
    },
  } = data
  return (
    <Layout>
      <main className="w-screen h-screen flex flex-col justify-center overflow-hidden">
        <section className="flex flex-1 justify-center items-center flex-wrap">
          <div className="presentation w-full sm:w-1/2 px-4 lg:px-0">
            <Hero description={description}>
              <BoopMoji ariaLabel="hi !">👋</BoopMoji>
            </Hero>
            <Quote miniBio={miniBio} />
            {/* {edges.map(({ node: { frontmatter } }) => (
              <PostsCard key={frontmatter.date} {...frontmatter} />
            ))} */}
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
