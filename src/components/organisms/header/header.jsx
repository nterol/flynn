import React, { useRef } from 'react'
import GradientIcon from '../../atoms/gradient/gradient'

import useIntersectionObserver from '../../../hooks/useIntersectionObserver'

function NHeader({ siteTitle }) {
  const headerRef = useRef(null)

  const isInScreen = useIntersectionObserver(headerRef)

  console.log('IS IN SCREEN', isInScreen)
  return (
    <header ref={headerRef} className="p-1 lg:p-8 grid grid-col-6 gap-4">
      <hgroup className="col-start-1 col-end-3 flex flex-row items-center">
        <GradientIcon />
        <h2 className="m-0 text-white font-bold lg:text-2xl sm:text-3xl col-2">
          {siteTitle}
        </h2>
      </hgroup>
      <nav className="col-end-7 col-span-2">
        <div>Github</div>
        <div>Linkedin</div>
        <div>codeSandbox</div>
      </nav>
    </header>
  )
}

export default NHeader
