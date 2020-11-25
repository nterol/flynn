import React from 'react'

import Icon from '../../atoms/icon/icon'

function Social({ socials }) {
  return (
    <ul className="grid grid-cols-2 place-content-center">
      {Object.keys(socials).map((name, i) => (
        <a
          className="flex justify-center content-center"
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
