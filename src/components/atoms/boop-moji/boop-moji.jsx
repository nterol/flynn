import React from 'react'

function BoopMoji({ ariaLabel, children }) {
  return (
    <span className="mr-2" role="img" aria-label={ariaLabel}>
      {children}
    </span>
  )
}

export default BoopMoji
