import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Container/home";
import About from "./Container/about";
import Projects from "./Container/portfolio";
import Skills from "./Container/skills";
import Contact from "./Container/contact";
import NavBar from "./Components/nav";
import Certificates from "./Container/resume";
import Design from "./Container/home/Design";
 

function App() {
   

  return (
    <div className="App" style ={{height:'100%'}} >
      
      <Design />
       <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
