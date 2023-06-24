import React from 'react'
import Footer from '../Footer'
import chandu from '../../assets/T S S Chandu 1.jpg'
import './index.css'

const About = () => {
  return (
    <div className='about-bg-container'>
      <h1>About Me</h1>
      <div className='profile-container'>
        <img src={chandu} alt="chandu" className='profile-pic'/>
        <div className='profile-content'>
        <h2>Hi, I am <span>Thota Sri Sai Chandu</span><br/> A Full Stack Web Developer</h2>
        <p>I enjoy designing and programming web applications that exceed expectations.
          I've developed strong passion for the software development Industry and love what I do.
          I'm always looking to improve my skills set and provide value to the organisation. 
        </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About