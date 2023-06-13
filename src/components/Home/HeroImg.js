import './index.css'
import IntroImg from '../../assets/MERN-portfolio-bg.webp'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt="introImg"/>
        </div>
        <div className='content'>
            <h2>Hi, I am <span>T S S Chandu</span></h2>
            <h1>Full Stack Web Developer</h1>
            <p>I am a Full Stack Web developer with excellent Problem Solving Skills and ability to 
                perform well in a team. Passionate about Coding and enjoy building Web Applications.
            </p>
            <div>
                <Link to="/projects">
                <button className='btn'> Projects </button>
                </Link>
                <Link to="/contact">
                <button className='btn btn-light'> Contact </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg