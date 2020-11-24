import React from 'react'
import getIcon from '../../../utils/getIcon'

const Icon = ({ name }) => {
  const icon = getIcon(name)
  return (
    <svg className="w-5 h-5" viewBox={icon.viewBox}>
      <title>{name}</title>
      <path d={icon.path} />
    </svg>
  )
}

export default Icon
