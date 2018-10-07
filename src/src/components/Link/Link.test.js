import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

it('renders', () => {
  const tree = renderer
    .create(<Link href='https://github.com'>GitHub</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
