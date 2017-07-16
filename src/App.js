import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Home from './scenes/Home'
import Settings from './scenes/Settings'
import './App.css'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/settings/" component={Settings}/>
    </div>
  </Router>
)

export default App;
