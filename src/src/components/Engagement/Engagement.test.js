import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Engagement from './Engagement'

test('renders', () => {
  const tree = renderer
    .create(<Engagement>content</Engagement>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
