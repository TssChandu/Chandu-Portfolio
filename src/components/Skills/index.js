import styled from 'styled-components'
import {Database} from '@styled-icons/fa-solid/Database'
import Footer from '../Footer'
import './index.css'

const Db = styled(Database)`
    color: #fff;
`

const Skills = () => {
  return (
    <div className='skills-bg-container'>
      <h1>Skills</h1>
      <p>Technical competencies in many areas with a decent proficiency in MERN Stack</p>
      <div className='skills-container'>
        <div className='front-end-card'>
            <Db size={25}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Skills