import React,{ useRef } from 'react';
import {useState} from 'react';
import {BsInfoCircleFill} from 'react-icons/bs'
import Main from '../../Components/Headercontent' ;
import { Animate } from 'react-simple-animate';
import emailjs from '@emailjs/browser';
import './style.css';


function Contact() {

  const form = useRef();

  const [submit , setsubmit] =  useState(false);

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

  const submitHandler = () =>{
    setsubmit(true);
  }

  return (
    <div>
    <Main 
     text = "CONTACT ME"
     icon = {<BsInfoCircleFill size = {40} />}
    />

    {submit === false ? null : <div className='submit-mssg'><p>Your message was sent</p></div>}

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

            <div className='div des' >
            <input  required name = "message" className= "input-des"  type = "text"  />
              <label className='label-desc'>DESCRIPTION</label>
            </div>

          </div>
            <button   onClick={submitHandler} >Submit</button>
         </div>
       </form>
    </div>
  </div>
  )
}

export default  Contact