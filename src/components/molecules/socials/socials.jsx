import React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-gtag'

import Icon from '../../atoms/icon/icon'
import { Link } from 'gatsby'

function Social({ socials }) {
  return (
    <ul className="grid grid-cols-3 place-content-center max-w-xs">
      <li>
        <Link className="col-start-1 font-bold" to="/skills">
          Skills
        </Link>
      </li>
      {Object.keys(socials).map((name, i) => (
        <OutboundLink
          key={name}
          className="flex justify-center lg:justify-end content-center max-w-1"
          href={socials[name]}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name={name} />
        </OutboundLink>
      ))}
    </ul>
  )
}

export default Social
