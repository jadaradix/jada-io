import React, { Component } from 'react';
import styled, { css } from 'styled-components'

const StyledBrick = styled.section`
  padding: 1rem;
  background-color: rgb(248, 248, 248);
  color: rgb(48, 48, 48);
  border-radius: 4px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 400;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.1px;
`;

const Brick = ({ children }) => (
  <StyledBrick>
    {children}
  </StyledBrick>
);

export default Brick;
