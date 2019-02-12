import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Header from './Header'

test('renders', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
