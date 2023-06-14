import React from "react";
import Main from "../../Components/Headercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { DiApple, DiGithubBadge } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

import resume from './resume.pdf';

import "./style.css";

function About() {
  const jobsummary = "Iam a third-year ECE student with a strong foundation in programming. I started with C language in my first year and then expanded my skills by learning Java. In my second year,I focused on Data Structures and Algorithms, as well as HTML and CSS for web development. In my third year, I mastered JavaScript and React, and during a one-month internship at Spondias Company, I successfully recreated their website using React. I am now working on my portfolio to showcase my skills in web development. I am passionate about coding and eager to contribute to innovative projects in the software development field";

  const openResume = () => {
    window.open(resume, '_blank');
  };

  return (
    <div className="about">
      <Main text="ABOUT ME" icon={<BsInfoCircleFill size={40} />} />

      <div className="container">
        <div className="about-me">
          <Animate
            play
            duration={1.5}
            delay={1}
            className="unique"
            start={{ transform: 'translateX(-900px)' }}
            end={{ transform: 'translatex(0px)' }}
          >
            <p>{jobsummary}</p>

            <button onClick={openResume}>Resume</button>
          </Animate>
        </div>

        <div className="about-icon">
          <div className="inner">
            <div><FaDev size={50} color="var(--blue-main-color)" /></div>
            <div><FaDatabase size={50} color="var(--blue-main-color)" /></div>
            <div><DiApple size={60} color="var(--blue-main-color)" /></div>
            <div><DiGithubBadge size={60} color="var(--blue-main-color)" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
