import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledEngagement = styled.section`
  padding: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 400;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.1px;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  a.cv-link {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    // background-color: red;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  > div:nth-of-type(1) {
    float: left;
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0.25rem;
    width: 96px;
    background-color: white;
    border-radius: 4px;
    > img {
      display: block;
      width: 100%;
      height: 96px;
      border: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    > p {
      text-align: center;
      color: rgb(204, 204, 204);
    }
    img + p {
      margin-top: 0.5rem;
      font-size: 0.8rem;
      // background-color: green;
    }
  }
  > div:nth-of-type(2) {
    margin-left: calc(96px + 1.5rem);
    p:first-child {
      margin-top: 0.25rem;
    }
    h1 {
      font-size: 1.25rem;
      line-height: 1.25rem;
      font-weight: 800;
      color: rgb(96, 96, 96);
      letter-spacing: -0.5px;
      margin-top: 0.75rem;
      // background-color: green;
      > span {
        margin-left: 4px;
        color: rgb(204, 204, 204);
      }
    }
    p {
      font-size: 0.8rem;
      line-height: 1rem;
      text-align: justify;
      color: rgb(48, 48, 48);
      // background-color: red;
    }
    h1 + p {
      margin-top: 0.5rem;
    }
    p + a {
      margin-top: 1rem;
    }
    p + p {
      margin-top: 0.5rem;
    }
    a + a {
      margin-top: 0.5rem;
    }
  }
`

const Engagement = ({ children, backgroundColor }) => (
  <StyledEngagement style={{ backgroundColor }}>
    {children}
  </StyledEngagement>
)

Engagement.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Engagement.defaultProps = {
  backgroundColor: 'rgb(255, 255, 255)'
}

export default Engagement
