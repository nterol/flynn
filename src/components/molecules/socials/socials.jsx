import React from 'react'

import Icon from '../../atoms/icon/icon'

function Social({ socials }) {
  return (
    <ul className="grid grid-cols-2 place-content-center max-w-xs">
      {Object.keys(socials).map((name, i) => (
        <a
          className="flex justify-center lg:justify-end content-center max-w-1"
          target="_blank"
          href={socials[name]}
        >
          <Icon name={name} />
        </a>
      ))}
    </ul>
  )
}

export default Social
