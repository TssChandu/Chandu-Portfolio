import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { BsGithub,BsFillTelephoneFill } from "react-icons/bs";
import { RiMailAddLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-icons-container'>
            <a href='https://www.linkedin.com/in/tss-chandu/' target='_blank' rel="noreferrer">
                <FaLinkedin size={30} style={{color:"#0A66C2",marginLeft:"10px",marginRight:"10px",cursor:"pointer"}}/>
            </a>
            <a href='https://github.com/TssChandu?tab=repositories' target='_blank' rel="noreferrer">
                <BsGithub size={30} style={{color:"#ffffff",marginLeft:"10px",marginRight:"10px",cursor:"pointer"}}/>
            </a>
            <a href='tel:+917836028114'>
                <BsFillTelephoneFill size={30} style={{color:"#ffffff",marginLeft:"10px",marginRight:"10px",cursor:"pointer"}}/>
            </a>
            <a href='mailto:t.s.s.chandu444@gmail.com' >
                <RiMailAddLine size={30} style={{color:"#a31300",marginLeft:"10px",marginRight:"10px",cursor:"pointer"}}/>
            </a> 
        </div>
    </div>
  )
}

export default Footer