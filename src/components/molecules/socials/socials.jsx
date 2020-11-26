import React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Icon from '../../atoms/icon/icon'

function Social({ socials }) {
  return (
    <ul className="grid grid-cols-2 place-content-center max-w-xs">
      {Object.keys(socials).map((name, i) => (
        <OutboundLink
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
