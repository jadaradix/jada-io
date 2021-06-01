import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
  .logo {
    display: inline-block;
    font-size: 3rem;
    line-height: 2rem;
    line-height: 3rem;
    letter-spacing: -2px;
    text-decoration: none;
    color: rgb(96,96,96);
  }
  nav {
    height: 3.5rem;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    ul {
      list-style-type: none;
      li {
        height: 100%;
        display: inline-block;
        // background-color: yellow;
        a {
          display: block;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          line-height: 3rem;
          height: 100%;
          color: rgb(255, 45, 85);
          text-decoration: none;
        }
      }
    }
  }
  @media print {
    display: none;
  }
`

const Header = () => (
  <StyledHeader>
    <Link className='logo' to='/'>
      <strong>James Garner</strong>
    </Link>
  </StyledHeader>
)

Header.propTypes = {
}

Header.defaultProps = {}

export default Header
