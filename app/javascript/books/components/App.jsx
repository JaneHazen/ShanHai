import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// components
import Map from './Map';
import Header from './Header'

const App = (props) => (
  <Router>
    <div>
      <Header/>
      <Route
        path="/"
        component={Map}
      />
    </div>
  </Router>
)

export default App