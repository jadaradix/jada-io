import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledHeader = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 3rem;
  line-height: 2rem;
  font-weight: 800;
  -webkit-font-smoothing: antialiased;
  color: rgb(204, 204, 204);
  line-height: 3rem;
  letter-spacing: -2px;
  // background-color: green;
`;

const Header = ({ children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
);

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Header.defaultProps = {};

export default Header;
