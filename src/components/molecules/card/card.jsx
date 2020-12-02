import React, { useState } from 'react'
import { Link } from 'gatsby'

import classes from './styles.module.scss'

console.log('YES', classes)

const Card = ({ title, excerpt, link, large }) => {
  const [isTouched, setTouched] = useState(false)
  return (
    <article
      className={`${
        classes[large ? 'large-card-container' : 'card-container']
      } ${isTouched ? classes['tilted'] : ''}`}
    >
      <section>
        <h3 className="text-black-typography">{title}</h3>
        {/* <p>{subtitle}</p> */}
      </section>
      <Link to={link}>
        <span> -{'>'}</span>
      </Link>
    </article>
  )
}

export default Card
