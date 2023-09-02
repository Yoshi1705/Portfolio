import React from "react";
import "./style.css";
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter"; // Import useTypewriter
 
import img1 from './img.jpg'
function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  const secondHandler = () => {
    window.open(
      "https://www.linkedin.com/in/yoshitha-peddireddy-6ba645253/",
      "_blank"
    );
  };

  const [text] = useTypewriter({
    words: ["Frontend Dev", "Techie", "Chegg Expert","Btech Student"],
    loop: true,
    typeSpeed: 120,
  });

  return (
    <section id="home" className="home">

     <div className="main-wrapper"> 
      <div className="wrapper">
          <h1
            style={{ color: "#73BBC9", fontSize: "30px", fontFamily : "cursive" }}
          >
            I'm Yoshitha I'm a,
          </h1>
      </div>

        <div   className="writer">
          <span style={{ color: "rgb(205,92,155)" ,fontWeight:'bold'  }} className="writer-type">{text}</span>
          <span>
            <Cursor />
          </span>
        </div>
        
     
      <div className="btn"  >
        <button onClick={handleClick}>Hire Me</button>
        <button onClick={secondHandler}>Let's Connect</button>
      </div>
      
    </div>

     
    <div className="mini">
         <img  src = {img1} className="img-mini"/>
      </div>
    

     
       
    </section>
  );
}

export default Home;
