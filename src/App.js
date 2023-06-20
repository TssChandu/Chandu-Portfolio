import React,{useState} from 'react'
import HeaderContext from './Context/HeaderContext'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import './App.css'

const App = () => {
  const [active,setActive] = useState("Home")
  
  const setActiveState = activeText => {
    setActive(activeText)
  }

  return (
    <HeaderContext.Provider value={{active,setActiveState:setActiveState}}>
      <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/projects" component={Projects}/>
        </Switch>
      </>
    </HeaderContext.Provider>
  )
}

export default App