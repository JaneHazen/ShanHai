import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Map from './Map'

const App = (props) => (
  <Router>
    <div>
      <Route
        path="/"
        component={Map}
      />
    </div>
  </Router>
)

export default App