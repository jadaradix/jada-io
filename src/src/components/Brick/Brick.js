import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledBrick = styled.section`
  padding: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 400;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.1px;
  border-radius: 4px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: rgb(96, 96, 96);
    line-height: 3rem;
    // background-color: green;
  }
  p {
    color: rgb(48, 48, 48);
    line-height: 1.2rem;
    // background-color: red;
  }
  h1 + p {
    margin-top: 0.5rem;
  }
  p + p {
    margin-top: 1rem;
  }
`;

const Brick = ({ children, backgroundColor }) => (
  <StyledBrick style={{backgroundColor}}>
    {children}
  </StyledBrick>
);

Brick.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Brick.defaultProps = {
  backgroundColor: 'rgb(250, 250, 250)'
};

export default Brick;
