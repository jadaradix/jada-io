import React from 'react';
import ReactDOM from 'react-dom';
import Brick from './Brick';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Brick />, div);
  ReactDOM.unmountComponentAtNode(div);
});
