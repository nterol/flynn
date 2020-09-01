import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.scss'

import Layout from '../components/layout'
import BlogDescription from '../components/atoms/blog-description/blog-description'
import IceCreamLayer from '../components/organisms/ice-cream-layer/ice-cream-layer'

const IndexPage = () => {
  return (
    <Layout>
      <BlogDescription />

      <main className={styles.mainContainer}>
        {Array.from({ length: 6 }).map((_, i) => (
          <IceCreamLayer key={`article-${i}`} index={i} />
        ))}
      </main>
      {/* <div ‚style={{ width: '500px' }}></div> */}

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
