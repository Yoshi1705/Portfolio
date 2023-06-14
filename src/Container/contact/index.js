import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import Main from '../../Components/Headercontent' ;
import { Animate } from 'react-simple-animate';
import './style.css';
function Contact() {
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

      <Animate play duration= {1} delay = {1} start = {{transform : 'translatX(200px)'}} end = {{transform : 'translatX(0px)'}}>
         <div className='contact-form'>
          <div className='control-wrapper'>

            <div  className='div'>
              <input required name = "name" className= "input-name" type = "text"/>
              <label className='label-name'>NAME</label>

            </div>

            <div className='div' >
            <input  required name = "name" className= "input-email"  type = "text"/>
              <label className='label-email'>EMAIL</label>

            </div>

            <div className='div' >
            <input  required name = "name" className= "input-des"  type = "text"/>
              <label className='label-desc'>DESCRIPTION</label>
            </div>

          </div>
            <button className='buton'>Submit</button>
         </div>
      </Animate>
    </div>
  </div>
  )
}

export default  Contact