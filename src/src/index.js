import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Brick from './components/Brick/Brick'

class App extends PureComponent {
  render() {
    return (
      <main>
        <Brick>
          <p>Brick 1</p>
        </Brick>
        <Brick>
          <p>Brick 2</p>
        </Brick>
        <Brick>
          <p>Brick 3</p>
        </Brick>
        <Brick>
          <p>Brick 4</p>
        </Brick>
        <Brick>
          <p>Brick 5</p>
        </Brick>
        <Brick>
          <p>Brick 6</p>
        </Brick>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
