import React, { useRef } from 'react'
import GradientIcon from '../../atoms/gradient/gradient'
import './header.scss'

import useIntersectionObserver from '../../../hooks/useIntersectionObserver'
import Social from '../../molecules/socials/socials'

function Header({ siteTitle, socials }) {
  const headerRef = useRef(null)

  const isInScreen = useIntersectionObserver(headerRef)


  console.log(isInScreen)

  return (
    <header
      ref={headerRef}
      className={`py-2 px-4 lg:px-8 lg:py-4 w-full grid grid-col-5 gap-4 bg-transparent`}
    >
      <hgroup className={`col-start-1 col-end-3 flex flex-row items-center`}>
        <GradientIcon inScreen={isInScreen} />
        <h2 className="title relative m-0 text-white font-bold text-2xl sm:text-3xl col-2">
          {siteTitle}
        </h2>
      </hgroup>
      <nav className="p-2 col-end-7 col-span-2 grid">
        <Social socials={socials} />
      </nav>
    </header>
  )
}

export default Header
