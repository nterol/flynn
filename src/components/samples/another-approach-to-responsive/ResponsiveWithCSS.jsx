import React from 'react'

import styles from './styles.module.scss'

function ResponsiveWithCSS() {
  return (
    <section className={styles.container}>
      <div className={styles.withCSS} />
    </section>
  )
}

export default ResponsiveWithCSS
