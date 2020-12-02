import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './organisms/header/header'
import useSiteMetadata from '../hooks/useSiteMetadata'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Layout = ({ children, location }) => {
  const {
    site: {
      siteMetadata: { siteUrl, title, socials, description },
    },
  } = useSiteMetadata()

  const headerRef = useRef(null)

  const isHeaderInScreen = useIntersectionObserver(headerRef)

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <description>{description}</description>
        <link rel="canonical" href={`${siteUrl}${location}`} />
      </Helmet>
      <Header controlRef={headerRef} siteTitle={title} socials={socials} />
      {location === '/' ? children({ isHeaderInScreen }) : children}
    </>
  )
}

export default Layout
