import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'

import Header from './components/Header/Header'

import Me from './parts/Me'

const App = () => {
  return (
    <main>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact strict component={Me} />
        </Switch>
      </Router>
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
