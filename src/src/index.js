import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hello, World.</h1>
        </header>
        <p>
          Hello, World.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
