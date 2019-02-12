import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Link from './Link'

test('renders', () => {
  const tree = renderer
    .create(<Link href='https://github.com'>GitHub</Link>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
