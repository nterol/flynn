import React from 'react'

function Quote({ miniBio }) {
  return (
    <div className="max-w-lg">
      <p className="text-xl pt-2 text-black-typography">{miniBio}</p>
    </div>
  )
}

export default Quote
