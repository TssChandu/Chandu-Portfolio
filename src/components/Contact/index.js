import React,{useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../Footer'
import './index.css'

const Contact = () => {
  const form = useRef()
  const [showResult,setShowResult] = useState(false)
  const [name,setName] = useState("")
  const onChangingName = event => {
    setName(event.target.value)
  } 
  const [email,setEmail] = useState("")
  
  const onChangingMail = event => {
    setEmail(event.target.value)
  } 
  const [text,setText] = useState("")
  
  const onChangingText = event => {
    setText(event.target.value)
  }
  
  const sendEmail = (event) => {
    event.preventDefault();
    setName("")
    setEmail("")
    setText("")
    emailjs.sendForm('service_ppfw8j9', 'template_e0gxcwc', form.current, '49K7OEX8W0ow88K5K')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setShowResult(true)
  };
  setTimeout(() => {
    setShowResult(false)
  }, 8000);

  return (
    <div className='contact-bg-container'>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <h1>Get In Touch</h1>
        <div className='input-container'>
          <input className="name-input" name="user_name" type='text' placeholder='Enter Name' onChange={onChangingName} value={name} required/>
          <input className="mail-input" name="user_email" type='email' required onChange={onChangingMail} value={email} placeholder='Enter Email'/>
        </div>
        <textarea rows={8} name="message" value={text} required onChange={onChangingText} placeholder='Enter Your Message'/>
        <button type='submit' className='submit-btn' >
          Send It 
        </button>
        {showResult && <p>Your Message has been successfully sent, I will contact you soon.</p>}
      </form>
      <Footer/>
    </div>
  )
}

export default Contact