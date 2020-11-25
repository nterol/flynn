import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

// import './layout.css'
import Header from './organisms/header/header'

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title, subtitle, socials, description },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteUrl
          title
          subtitle
          description
          socials {
            linkedin
            github
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet
      // title={title}
      // meta={[
      //   { name: 'subtitle', content: subtitle },
      //   { name: 'keywords', content: 'blog' },
      // ]}
      >
        <html lang="en" />
        <title>{title}</title>
        <description>{description}</description>
      </Helmet>

      <Header siteTitle={title} socials={socials} />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
