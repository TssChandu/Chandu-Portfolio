import React from 'react'
import HeroImg from './HeroImg'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Header/>
      <HeroImg />
      <Footer/>
    </div>
  )
}

export default Home