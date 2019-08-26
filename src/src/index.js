import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './index.css'

import Header from './components/Header/Header'
import Me from './parts/Me'
import Projects from './parts/Projects'

const App = () => {
  return (
    <main>
      <Router>
        <Header>James Garner</Header>
        <Switch>
          <Route path='/' exact strict component={Me} />
          <Route path='/projects' exact strict component={Projects} />
        </Switch>
      </Router>
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
