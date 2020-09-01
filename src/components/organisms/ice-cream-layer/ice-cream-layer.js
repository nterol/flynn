import React from 'react'

import styles from './styles.module.scss'

function IceCreamLayer({ index }) {
  return (
    <article className={styles.layerSection}>
      <header>
        <h2>Title</h2>
      </header>
      <section>
        <div>Subtitle subtitles subtitle</div>
      </section>
    </article>
  )
}

export default IceCreamLayer
