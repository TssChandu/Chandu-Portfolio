import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import './App.css'

const App = () => {
  return (
    <>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/projects" component={Projects}/>
    </Switch>
    </>
  )
}

export default App