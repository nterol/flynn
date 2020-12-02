import React, { useMemo } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/atoms/hero/hero'
import Boop from '../components/atoms/boop/boop'
import Quote from '../components/atoms/quote/quote'
import CardSection from '../components/organisms/card-section/card-section'

export const query = graphql`
  query PostsQuery {
    site {
      siteMetadata {
        description
        miniBio
      }
    }
    allFile(
      filter: { extension: { eq: "mdx" } }
      sort: { fields: sourceInstanceName }
    ) {
      group(field: dir) {
        edges {
          node {
            dir
            name
            childMdx {
              excerpt
              frontmatter {
                path
                date
                excerpt
                author
              }
            }
            sourceInstanceName
          }
        }
      }
    }
    # allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
    #   edges {
    #     node {
    #       frontmatter {
    #         path
    #         title
    #         date
    #         excerpt
    #         author
    #         tags
    #       }
    #     }
    #   }
    # }
  }
`

const IndexPage = ({ data }) => {
  const {
    allFile,
    site: {
      siteMetadata: { description, miniBio },
    },
  } = data

  const allPosts = useMemo(
    () =>
      allFile.group.reduce((acc, curr) => {
        return [
          ...acc,
          {
            sectionTitle: curr.edges[0].node.sourceInstanceName,
            posts: [...curr.edges],
          },
        ]
      }, []),
    [allFile]
  )

  return (
    <Layout location={window.location.pathname}>
      {({ isHeaderInScreen }) => (
        <main className="w-screen h-screen flex flex-col justify-center overflow-hidden">
          <section className="flex flex-1 justify-center items-center flex-wrap">
            <div className="presentation w-full sm:w-1/2 px-4 lg:px-0">
              <Hero description={description}>
                <Boop
                  trigger={!isHeaderInScreen}
                  timing={2500}
                  ariaLabel="Hey !"
                  animation="animate-waving"
                >
                  👋
                </Boop>
              </Hero>
              <Quote miniBio={miniBio} />
            </div>
          </section>
          {allPosts.map(posts => (
            <CardSection key={posts.sectionTitle} {...posts} />
          ))}
        </main>
      )}
    </Layout>
  )
}

export default IndexPage
