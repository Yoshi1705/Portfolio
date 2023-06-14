import React, { useState } from "react";

import {FaBars, FaReact } from "react-icons/fa";

import {HiX} from "react-icons/hi";

import { Link } from "react-router-dom";

import './style.css';


const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "CERTIFICATES",
    to: "/certificates",
  },
  {
    label: "PROJECTS",
    to: "/projects",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

function NavBar() {

  const [toggle,setToggle] = useState(false);

  const handleClick = () =>{
    setToggle(!toggle);
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="icon" to="/">
          <FaReact size={30} />
        </Link>
      </div>

       <ul className= {`nav-menu ${toggle? "active":""}`}>
        {data.map((item,key) =>(
          <li key = {key} className="nav-list">
               <Link to = {item.to} className="nav-links">
                {item.label}
               </Link>
          </li>
        ))}
     
         
      </ul> 

      <div className="hamburger-menu" onClick={handleClick}>
           {toggle?<HiX size = {30}/>:<FaBars size = {30}/>}
      </div>
    </nav>
  );
}

export default NavBar;
