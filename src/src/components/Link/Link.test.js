import React from 'react';
import ReactDOM from 'react-dom';
import Link from './Link';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Link href='https://github.com'>GitHub</Link>, div);
  ReactDOM.unmountComponentAtNode(div);
});
