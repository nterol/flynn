import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.scss'

function PostsCard({ path, excerpt, title }) {
  return (
    <article className={styles.layerSection}>
      <header className={styles.header}>
        <Link to={path}>
          <h2>{title}</h2>
        </Link>
      </header>
      <main className={styles.content}>
        <div>{excerpt}</div>
      </main>
    </article>
  )
}

export default PostsCard
