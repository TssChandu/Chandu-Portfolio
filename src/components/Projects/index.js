import {Component} from 'react'
import Footer from '../Footer'
import { BsGithub} from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import TwitterImg from '../../assets/Twitter_Clone.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './index.css'

const FrontendProjectsList = [{
  id : 1,
  name : "Nxt Trendz (ECommerce Clone - Amazon, Flipkart)",
  imageUrl : "https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-home-output.png",
  description : "Created a modern e-commerce experience with a design inspired by Amazon and Flipkart",
  projectLink : "https://nxttrendztssc.ccbp.tech/login",
  githubLink : "https://github.com/TssChandu/NxtTrendzShoppingApp",
},{
  id : 2,
  name : "Movies App (Netflix/Amazon Prime Clone)",
  imageUrl : "https://res.cloudinary.com/dzvngxapf/image/upload/v1686656680/netfilx_1_ckz96i.png",
  description : "Built a dynamic, feature-rich OTT platform for movie enthusiasts.",
  projectLink : "https://tsscmoviesapp.ccbp.tech/",
  githubLink : "https://github.com/TssChandu/MoviesApp-Amazon-Prime-Clone-",
},{
  id : 3,
  name : "Prime Video",
  imageUrl : "https://assets.ccbp.in/frontend/content/react-js/prime-video-lg-output-img.png",
  description : "Created an Amazon prime video page using React Player",
  projectLink : "https://tsscprimevideo.ccbp.tech/",
  githubLink : "https://github.com/TssChandu/PrimeVideoPage",
},{
  id : 4,
  name : "Jobby App",
  imageUrl : "https://assets.ccbp.in/frontend/content/react-js/jobby-app-login-lg-output.png",
  description : "Brought to life an all-encompassing job search platform, Jobby App",
  projectLink : "https://tsscjobbyapp.ccbp.tech/",
  githubLink : "https://github.com/TssChandu/JobbyApp",
},{
  id : 5,
  name : "Cowin Dashboard",
  imageUrl : "https://assets.ccbp.in/frontend/content/react-js/cowin-dashboard-xl-output.png",
  description : "Created Statistics Page of Covid Vaccination in different formats.",
  projectLink : "https://tssccowindash.ccbp.tech",
  githubLink : "https://github.com/TssChandu/CowinDashboard",
},{
  id : 6,
  name : "Emoji Game",
  imageUrl : "https://assets.ccbp.in/frontend/content/react-js/emoji-game-lg-output-v2.png",
  description : "Created an Emoji game using Array Methods.",
  projectLink : "https://tsscemojigame.ccbp.tech",
  githubLink : "https://github.com/TssChandu/EmojiGame",
},{
  id : 7,
  name : "Appointment App",
  imageUrl : "https://assets.ccbp.in/frontend/content/react-js/appointments-app-lg-output.png",
  description : "Created an Appointment page where we can update Appointments.",
  projectLink : "https://tsscapntmnt.ccbp.tech/",
  githubLink : "https://github.com/TssChandu/AppointmentApp",
}
]

const BackendProjectsList = [{
  id : 1,
  name : "Twitter Database Clone",
  imageUrl : TwitterImg,
  description : "Implemented several REST APIs using Node and Express. Users are authenticated using a middleware function. Used SQLite for accessing, updating, creating data",
  githubLink : "https://github.com/TssChandu/twitterDatabaseClone",
},{
  id : 2,
  name : "To Do Application",
  imageUrl : "https://techengage.com/wp-content/uploads/2020/03/Best-To-Do-List-Apps.jpg",
  description : "Implemented several REST APIs using Node and Express. Users can filter various To Dos based on the different categories.",
  githubLink : "https://github.com/TssChandu/ToDoDatabase",
},{
  id : 3,
  name : "Covid19 India Database",
  imageUrl : "https://www.mygov.in/sites/all/themes/mygov/images/covid/covid-share.jpg",
  description : "Implemented several REST APIs using Node and Express. Users are authenticated using a middleware function. Performed CRUD Operations using SQLite",
  githubLink : "https://github.com/TssChandu/Covid19IndianPortalDatabase",
},{
  id : 4,
  name : "Authenticate Database",
  imageUrl : "https://www.beyondidentity.com/sites/default/files/2021-09/authorization-vs-authentication.jpeg",
  description : "Implemented several REST APIs using Node and Express. Created Authentication features.",
  githubLink : "https://github.com/TssChandu/AuthenticateDatabase",
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
      <div>
        <a href={githubLink} target='_blank' rel="noreferrer">
          <BsGithub size={30} style={{color:"#fcce00",margin:"10px",cursor:"pointer"}}/>
        </a>
        {projectLink !== undefined && <a href={projectLink} target='_blank' rel="noreferrer">
          <FiExternalLink size={30} style={{color:"#fcce00",margin:"10px",cursor:"pointer"}}/>
        </a>}
      </div>
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
      autoplay:true,
      autoplaySpeed: 1500,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className='project-bg-container'>
        <div className='projects-container'>
            <h1>Projects</h1>
              <h2 className='project-type'>Frontend Projects</h2>
              <div className='slick-bg-container'>
                <div className="slick-container">
                  <Slider {...settings} >
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
                  {BackendProjectsList.map(eachProject => (
                    <ProjectItem key={eachProject.id} projectDetails={eachProject}/>
                  ))}
                  </Slider>
                </div>
              </div>
            <Footer/>
        </div>
      </div>
    )
  }  
}

export default Projects