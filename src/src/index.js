import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Brick from './components/Brick/Brick'

class App extends PureComponent {
  render() {
    return (
      <main>
        <Brick>
          <h1>James Garner</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus ullamcorper elit, nec ultricies eros tempus ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vestibulum lacus in ipsum sollicitudin, et bibendum purus rhoncus.</p>
          <p>Nulla feugiat rutrum suscipit. Praesent consectetur ornare dolor, in viverra nulla placerat et. Nam tincidunt placerat purus vitae fermentum. Vestibulum dolor ante, placerat ut porta in, vulputate sed nisl. In mauris erat, porttitor nec ornare non, mollis non tellus. Praesent pulvinar quis magna rhoncus blandit.</p>
          <p>Praesent commodo cursus eros ut sollicitudin. Sed elementum, tortor sed tempus pretium, enim leo aliquam neque, ut hendrerit neque diam a tellus. Aenean eu eros velit.</p>
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
