import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Brick from './Brick'

test('renders', () => {
  const tree = renderer
    .create(<Brick />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
