import React from 'react'

import Card from '../../molecules/card/card'
import classes from './styles.module.scss'


function CardSection({ sectionTitle, posts }) {
  return (
    <section className={classes.sectionContainer}>
      <h3>{sectionTitle}</h3>
      {posts.map(post => (
        <Card {...post} />
      ))}
    </section>
  )
}

export default CardSection
