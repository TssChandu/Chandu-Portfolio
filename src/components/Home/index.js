import React from 'react'
import HeroImg from './HeroImg'
import Footer from '../Footer'
import './index.css'

const Home = () => {
  return (
    <div className='home-container'>
      <HeroImg />
      <Footer/>
    </div>
  )
}

export default Home