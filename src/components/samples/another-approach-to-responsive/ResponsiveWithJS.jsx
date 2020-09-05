import React from 'react';

import styles from './styles.module.scss';
import useScreen from '../../../hooks/useScreen'

function ResponsiveWithJS() {
  const screen = useScreen()
  return (
    <section className={styles.container}>
      <div> You're currntly using a {screen} format</div>
    </section>
  )
}

export default ResponsiveWithJS
