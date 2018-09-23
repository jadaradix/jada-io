import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Brick from './components/Brick/Brick'

class App extends PureComponent {
  render() {
    return (
      <main>
        <Brick>
          <p>Hello, World.</p>
        </Brick>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
