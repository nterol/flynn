import React from 'react'

import styles from './styles.module.scss'
import useMatchMedia from '../../../hooks/useMatchMedia'

function ResponsiveWithJS() {
  const screen = useMatchMedia()
  return (
    <section className={styles.container}>
      <div> You're currently using a {screen} format</div>
    </section>
  )
}

export default ResponsiveWithJS
