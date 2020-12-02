import React, { useEffect, useState } from 'react'

function Boop({ ariaLabel, children, animation, timing, trigger }) {
  const [isBooped, setIsBooped] = useState(false);

  console.log(trigger)
  useEffect(() => {
    if (trigger) {
      setIsBooped(true)
    }
  }, [trigger])

  useEffect(() => {
    if (!isBooped) {
      return
    }

    const timeoutId = setTimeout(() => {
      setIsBooped(false)
    }, timing)

    return () => clearTimeout(timeoutId)
  }, [isBooped, timing])

  const handleMouseEnter = () => !isBooped && setIsBooped(true)

  return (
    <span>
      <span
        className={`transition-all inline-block mr-3 ${
          isBooped ? animation : ''
        }`}
        role="img"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
      >
        {children}
      </span>
    </span>
  )
}

export default Boop
