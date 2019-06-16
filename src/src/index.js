import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Me from './parts/Me'

const App = () => {
  return (
    <main>
      <Me />
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
