import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import React from 'react';

const HeaderContainer = styled.div`
background: rebeccapurple;
margin-bottom: 1.45rem;`

const HeaderContent = styled.div`
margin: 0 auto;
max-width: 960;
padding: 1.45rem 1.0875rem;`;

const HeaderTitle = styled.h1`
margin: 0;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContent>
      <HeaderTitle>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </HeaderTitle>
    </HeaderContent>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
