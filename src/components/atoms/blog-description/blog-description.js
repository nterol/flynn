import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './styles.module.scss'

const BlogDescription = () => {
  const data = useStaticQuery(graphql`
    query BlogDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {data.site.siteMetadata.description}
      </div>
    </section>
  )
}

export default BlogDescription
