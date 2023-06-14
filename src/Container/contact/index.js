import React,{ useRef } from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import Main from '../../Components/Headercontent' ;
import { Animate } from 'react-simple-animate';
import emailjs from '@emailjs/browser';
import './style.css';


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vbnld64', 'template_lteqpu6', form.current, 'nm0rfgZnZ_4pvecYF')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
    <Main 
     text = "CONTACT ME"
     icon = {<BsInfoCircleFill size = {40} />}
    />

    <div className='contact'>
      <Animate play duration= {1} delay = {1} start = {{transform : 'translatX(-200px)'}} end = {{transform : 'translatX(0px)'}}>
         <h3 className='header-text'>
           Let's Talk
         </h3>

      </Animate>

         <form ref = {form} onSubmit={sendEmail}> 
         <div className='contact-form'>
          <div className='control-wrapper'>

            <div  className='div'>
              <input required name = "user_name" className= "input-name" type = "text"/>
              <label className='label-name'>NAME</label>

            </div>

            <div className='div' >
            <input  required name = "user_email" className= "input-email"  type = "text"/>
              <label className='label-email'>EMAIL</label>

            </div>

            <div className='div' >
            <input  required name = "message" className= "input-des"  type = "text"/>
              <label className='label-desc'>DESCRIPTION</label>
            </div>

          </div>
            <button className='buton'>Submit</button>
         </div>
       </form>
    </div>
  </div>
  )
}

export default  Contact