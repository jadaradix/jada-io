import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 3rem;
  line-height: 2rem;
  font-weight: 800;
  -webkit-font-smoothing: antialiased;
  line-height: 3rem;
  letter-spacing: -2px;
  // background-color: green;
  a {
    text-decoration: none;
    color: rgb(204, 204, 204);
  }
`

const Header = ({ children }) => (
  <StyledHeader>
    <Link to='/'>{children}</Link>
  </StyledHeader>
)

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Header.defaultProps = {}

export default Header
