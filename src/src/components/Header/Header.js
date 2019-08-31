import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  .logo {
    display: inline-block;
    margin-top: 1.5rem;
    margin-bottom: 0.25rem;
    margin-left: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 3rem;
    line-height: 2rem;
    font-weight: 800;
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

const Header = ({ children }) => (
  <StyledHeader>
    <Link className='logo' to='/'>{children}</Link>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/startups'>Startups</Link></li>
        <li><a href='https://cv.jada.io'>CV</a></li>
      </ul>
    </nav>
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
