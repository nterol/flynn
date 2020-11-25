import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import React, { useState } from 'react'
import { animated, useTransition } from 'react-spring'

const HeaderContainer = styled.header`
  padding: 32px;
  display: flex;
  flex-direction: row;
`

const TitleContainer = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HeaderTitle = styled.h1`
  margin: 0;
`

const Gradient = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: linear-gradient(90deg, #378ea9 0%, rgba(255, 255, 255, 0) 100%),
  rgba(254, 215, 226, 100);
  position: relative;
`

const waveAnimation = keyframes`{
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}`

const animationName = css`
  animation-name: ${waveAnimation};
`

const WavingHand = styled.span`
  font-size: 32px;
  ${animationName};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`

const Header = ({ siteTitle, siteSubtitle }) => {
  const [hello, sayHello] = useState(false)

  const transition = useTransition(hello, hello => hello, {
    from: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(55%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(150%,0,0)' },
  })

  return (
    <HeaderContainer>
      <Gradient
        onMouseEnter={() => sayHello(true)}
        onMouseLeave={() => sayHello(false)}
      >
        {transition.map(
          ({ item, key, props }) =>
            item && (
              <animated.span
                key={key}
                style={{ position: 'absolute', top: '30%', ...props }}
              >
                <WavingHand role="img" aria-label="waving hand">
                  👋
                </WavingHand>
              </animated.span>
            )
        )}
      </Gradient>
      <TitleContainer>
        <HeaderTitle>
          <Link
            to="/"
            style={{
              color: 'black',
              textDecoration: 'none',
              marginBottom: '0.5 rem',
            }}
          >
            {siteTitle}
          </Link>
          <h3>{siteSubtitle}</h3>
        </HeaderTitle>
      </TitleContainer>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
