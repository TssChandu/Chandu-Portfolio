import { Link } from "react-router-dom";
import HeaderContext from "../../Context/HeaderContext";
import './index.css'
import { FaBars,FaTimes } from "react-icons/fa";
import React, {useState} from 'react'

const Header = () => {
    const [click,changeClick] = useState(false);
    const handleClick = () => changeClick(!click)
    const [color,setColor] = useState(false);
                const changeColor = () => {
                  if (window.scrollY >= 100){
                      setColor(true)
                  } else {
                      setColor(false)
                  }
                }
                window.addEventListener("scroll",changeColor)
    return(
        <HeaderContext.Consumer>
            {value => {
                const {active,setActiveState} = value
                const changeActiveStatus = event => {
                    setActiveState(event.target.textContent)
                }
                const goToHome = () => {
                  setActiveState("Home")
                }
              
                return (
                  <nav className= {color ? 'nav-container nav-container-bg' : "nav-container"}>
                      <Link className="link-style" to='/' onClick={goToHome}>
                          <h1 className='nav-heading'>TSS Chandu</h1>
                      </Link>
                      <ul className={click ? "nav-menu active" : "nav-menu"}>
                          <li onClick={changeActiveStatus}>
                              <Link to='/' className={active === "Home" ? "active-list":""} >
                                  Home
                              </Link>
                          </li>
                          <li onClick={changeActiveStatus}>
                              <Link to='/projects' className={active === "Projects" ? "active-list":""}>
                                  Projects
                              </Link>
                          </li>
                          <li onClick={changeActiveStatus}>
                              <Link to='/about' className={active === "About" ? "active-list":""}>
                                  About
                              </Link>
                          </li>
                          <li onClick={changeActiveStatus}>
                              <Link to='/contact' className={active === "Contact" ? "active-list":""}>
                                  Contact
                              </Link>
                          </li>
                      </ul>
                      <div className='hamburger' onClick={handleClick}>
                          {click ? (<FaTimes size={30} style={{color:"#ffffff"}}/>) : 
                          (<FaBars size={30} style={{color:"#ffffff"}}/>)}
                      </div>
                  </nav>
                )
            }}
        </HeaderContext.Consumer>
    )
}

export default Header