import {Component} from 'react'
import Footer from '../Footer'
import { BsGithub} from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './index.css'

const FrontendProjectsList = [{
  id : 1,
  name : "Jobby App",
  imageUrl : "https://assets.ccbp.in/frontend/content/react-js/jobby-app-login-lg-output.png",
  description : "Brought to life an all-encompassing job search platform, Jobby App",
  projectLink : "https://tsscjobbyapp.ccbp.tech/",
  githubLink : "https://github.com/TssChandu/JobbyApp",
},{
  id : 2,
  name : "Movies App (Netflix/Amazon Prime Clone)",
  imageUrl : "https://res.cloudinary.com/dzvngxapf/image/upload/v1686656680/netfilx_1_ckz96i.png",
  description : "Built a dynamic, feature-rich OTT platform for movie enthusiasts.",
  projectLink : "https://tsscmoviesapp.ccbp.tech/",
  githubLink : "https://github.com/TssChandu/MoviesApp-Amazon-Prime-Clone-",
},{
  id : 3,
  name : "Nxt Trendz (ECommerce Clone - Amazon, Flipkart)",
  imageUrl : "https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-home-output.png",
  description : "Created a modern e-commerce experience with a design inspired by Amazon and Flipkart",
  projectLink : "https://nxttrendztssc.ccbp.tech/login",
  githubLink : "https://github.com/TssChandu/JobbyApp",
},{
  id : 4,
  name : "Jobby App",
  imageUrl : "https://assets.ccbp.in/frontend/content/react-js/jobby-app-login-lg-output.png",
  description : "Brought to life an all-encompassing job search platform, Jobby App",
  projectLink : "https://tsscjobbyapp.ccbp.tech/",
  githubLink : "https://github.com/TssChandu/JobbyApp",
},{
  id : 5,
  name : "Movies App (Netflix/Amazon Prime Clone)",
  imageUrl : "https://res.cloudinary.com/dzvngxapf/image/upload/v1686656680/netfilx_1_ckz96i.png",
  description : "Built a dynamic, feature-rich OTT platform for movie enthusiasts.",
  projectLink : "https://tsscmoviesapp.ccbp.tech/",
  githubLink : "https://github.com/TssChandu/MoviesApp-Amazon-Prime-Clone-",
},{
  id : 6,
  name : "Nxt Trendz (ECommerce Clone - Amazon, Flipkart)",
  imageUrl : "https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-home-output.png",
  description : "Created a modern e-commerce experience with a design inspired by Amazon and Flipkart",
  projectLink : "https://nxttrendztssc.ccbp.tech/login",
  githubLink : "https://github.com/TssChandu/JobbyApp",
}
]

const ProjectItem = props => {
  const {projectDetails} = props
  const {name,imageUrl,description,projectLink,githubLink} = projectDetails
  return(
    <div className='project-card'>
      <img src={imageUrl} className='project-img' alt="projectImg"/>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={githubLink} target='_blank' rel="noreferrer">
        <BsGithub size={30} style={{color:"#fcce00",margin:"10px",cursor:"pointer"}}/>
      </a>
      <a href={projectLink} target='_blank' rel="noreferrer">
        <FiExternalLink size={30} style={{color:"#fcce00",margin:"10px",cursor:"pointer"}}/>
      </a>
    </div>
  )
}

class Projects extends Component {
  
  
  render(){
    const settings = {
      dots: false,
      infinite: true,
      adaptiveHeight: true,
      arrows:true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 359,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className='project-bg-container'>
        <div className='projects-container'>
            <h1>Projects</h1>
            <div>
              <h2 className='project-type'>Frontend Projects</h2>
              <div className='slick-bg-container'>
                <div className="slick-container">
                  <Slider {...settings}>
                  {FrontendProjectsList.map(eachProject => (
                    <ProjectItem key={eachProject.id} projectDetails={eachProject}/>
                  ))}
                  </Slider>
                </div>
              </div>
              <h2 className='project-type'>Backend Projects</h2>
              <div className='slick-bg-container'>
                <div className="slick-container">
                  <Slider {...settings}>
                  {FrontendProjectsList.map(eachProject => (
                    <ProjectItem key={eachProject.id} projectDetails={eachProject}/>
                  ))}
                  </Slider>
                </div>
              </div>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }  
}

export default Projects