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
                  changeClick(false)
                }
              
                return (
                  <nav className= {color ? 'nav-container nav-container-bg' : "nav-container"}>
                      <Link className="link-style" to='/' onClick={goToHome}>
                          <h1 className='nav-heading'>TSS Chandu</h1>
                      </Link>
                      <ul className={click ? "nav-menu active" : "nav-menu"}>
                          <li onClick={handleClick}>
                              <Link to='/' className={active === "Home" ? "active-list":""} onClick={changeActiveStatus} >
                                  Home
                              </Link>
                          </li>
                          <li onClick={handleClick}>
                              <Link to='/projects' className={active === "Projects" ? "active-list":""} onClick={changeActiveStatus}>
                                  Projects
                              </Link>
                          </li>
                          <li onClick={handleClick}>
                              <Link to='/skills' className={active === "Skills" ? "active-list":""} onClick={changeActiveStatus}>
                                  Skills
                              </Link>
                          </li>
                          <li onClick={handleClick}>
                              <Link to='/about' className={active === "About" ? "active-list":""} onClick={changeActiveStatus}>
                                  About
                              </Link>
                          </li>
                          <li onClick={handleClick}>
                              <Link to='/contact' className={active === "Contact" ? "active-list":""} onClick={changeActiveStatus}>
                                  Contact
                              </Link>
                          </li>
                                <a href="https://drive.google.com/file/d/1uocQz8NDslaAGvrm8Z3moqeZQON-0mg6/view" 
                                target="_blank" rel="noreferrer">
                                    <button className="resume-btn">  
                                        Resume
                                    </button>    
                                </a>
                            
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