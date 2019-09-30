import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'

import Header from './components/Header/Header'
import Me from './parts/Me'
import Startups from './parts/Startups'

const App = () => {
  return (
    <main>
      <Router>
        <Header>James Garner</Header>
        <Switch>
          <Route path='/' exact strict component={Me} />
          <Route path='/startups' exact strict component={Startups} />
        </Switch>
      </Router>
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
