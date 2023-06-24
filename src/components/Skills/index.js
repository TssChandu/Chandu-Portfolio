import Footer from '../Footer'
import './index.css'

const Skills = () => {
  return (
    <div className='skills-bg-container'>
      <h1>Skills</h1>
      <p>Technical competencies in many areas with a decent proficiency in MERN Stack</p>
      <div className='skills-container'>
        <div className='frontend-card'>
            <img src="https://img.icons8.com/?size=200&id=Ac7AQHgh9jd0&format=png" alt="frontend" className='logo'/>
            <p>HTML</p>
            <p>CSS</p>
            <p>Bootstrap</p>
            <p>JavaScript</p>
            <p>React.js</p>
        </div>
        <div className='backend-card'>
            <img src="https://img.icons8.com/?size=192&id=COrg3qaBVQe6&format=png" alt="backend" className='logo'/>
            <p>Python</p>
            <p>Express</p>
            <p>Node.js</p>
        </div>
        <div className='database-card'>
            <img src="https://img.icons8.com/?size=128&id=rZw8t5TQVPpL&format=png" alt="database" className='logo'/>
            <p>SQLite</p>
        </div>
        <div className='tools-card'>
            <img src="https://img.icons8.com/?size=192&id=43171&format=png" alt="tools" className="logo"/>
            <p>GitHub</p>
            <p>VS Code</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Skills