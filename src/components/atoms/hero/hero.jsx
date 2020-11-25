import React from 'react'

const Hero = ({ description, children }) => {
  const [main, strong, point] = description.split('**')
  return (
    <h3 className="font-bold text-2xl lg:text-5xl sm:text-3xl text-black-typography">
      {children}
      {main}
      <span className="text-pink-900">{strong}</span>
      {point}
    </h3>
  )
}

export default Hero
