import React, { Component } from 'react';
import styled, { css } from 'styled-components'

const StyledBrick = styled.section`
  color: red;
  font-weight: bold;
`;

const Brick = ({ children }) => (
  <StyledBrick>
    {children}
  </StyledBrick>
);

export default Brick;
