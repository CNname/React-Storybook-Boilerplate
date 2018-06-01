import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './home'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('react-root'));
