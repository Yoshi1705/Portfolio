import React from 'react'
import './style.css';

function Main(props) {
  const {text,icon} = props;
  return (
    <div className='wrapper-text'>
      <h2 className='wrap-text'>{text}</h2> 
      <span className='icon'>{icon}</span>
    </div>
  )
}

export default Main;