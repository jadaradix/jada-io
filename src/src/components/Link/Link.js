import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLink = styled.a`
  padding-bottom: 2px;
  color: rgb(255, 45, 85);
`

const Link = ({ children, href }) => (
  <StyledLink href={href}>
    {children}
  </StyledLink>
)

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  href: PropTypes.string.isRequired
}

Link.defaultProps = {
}

export default Link
