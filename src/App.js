import React,{useState} from 'react'
import HeaderContext from './Context/HeaderContext'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css'

const App = () => {
  const activeState = JSON.parse(localStorage.getItem("active"))
  const [active,setActive] = useState(activeState !== null ? activeState: "Home")
  
  const setActiveState = activeText => {
    localStorage.setItem("active",JSON.stringify(activeText))
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
          <Route exact path="/skills" component={Skills}/>
        </Switch>
      </>
    </HeaderContext.Provider>
  )
}

export default App