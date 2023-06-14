import React from "react";
import "./style.css";
import {Animate} from 'react-simple-animate'
import {useNavigate} from 'react-router-dom';
import img1 from './img.jpg'
function Home() {

    const navigate = useNavigate();

    const handleClick = () =>{
         navigate('/contact')
    }
  return (
    <section id="home" className="home">
      <div className="wrapper">
        <h1 className="animate-character">
          Hlo, I'm Yoshitha
          <br />
          Frontend Developer
        </h1>
        <Animate play duration={1.5} delay={1} 
          start={{transform:'translateY(400px)'}} 

          end = {{transform:'translatex(0px)'}}
        >
        <div className="btn">
          <button onClick={handleClick}>Hire Me</button>
        </div>
        </Animate>
         
      </div>
      <div className="mini">
         <img  src = {img1} className="img-mini"/>
      </div>
    </section>
  );
}

export default Home;
