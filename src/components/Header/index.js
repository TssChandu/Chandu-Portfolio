import { Link } from "react-router-dom";
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

  return (
    <nav className= {color ? 'nav-container nav-container-bg' : "nav-container"}>
        <Link className="link-style" to='/'>
            <h1 className='nav-heading'>TSS Chandu</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to='/' className="link-style">
                    Home
                </Link>
            </li>
            <li>
                <Link to='/projects' className="link-style">
                    Projects
                </Link>
            </li>
            <li>
                <Link to='/about' className="link-style">
                    About
                </Link>
            </li>
            <li>
                <Link to='/contact' className="link-style">
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
}

export default Header