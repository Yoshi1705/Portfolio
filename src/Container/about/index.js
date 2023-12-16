import React from "react";
import Main from "../../Components/Headercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { DiApple, DiGithubBadge } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";



import resume from "./resume.pdf";
import intern from './intern.pdf'

import "./style.css";

function About() {
  const jobsummary =
    "I'm a final-year BTech student in Electronics and Communications Engineering at JNTUK with a strong passion for computer science and programming. I hold certifications in Java, Python, and JavaScript from HackerRank and currently serve as a Subject Matter Expert at Chegg, assisting students in various computer science topics. I've honed my skills through practical experiences, including rebuilding a company website with React and Bootstrap during a previous internship. Now, as a Software Development Engineer at Code Inbound LLP, I specialize in ReactJS, Redux, TypeScript, and JavaScript for web development, with expertise in API integration and documentation. My dedication, enthusiasm for learning, and problem-solving mindset drive me to excel in any challenge. I'm on the lookout for a fulfilling role in computer science where I can contribute and grow. Let's connect and explore opportunities together!";

  const openResume = () => {
    window.open(resume, "_blank");
  };

  const openIntern = () => {
    window.open(intern, "_blank");
  };

  return (
    <div className="about">
      <Main text="ABOUT ME" icon={<BsInfoCircleFill size={40} />} />

      <div className="container">
        <div className="about-me">
          <Animate
            play
            duration={2}
            delay={0.5}
            className="unique"
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <p>
              {jobsummary}
              <a
                 onClick={openIntern}
                style={{
                  textDecoration: "none",
                  marginLeft: "7px",
                  color: "#FF90BB",
                }}
                target="_blank"
              >
                See Internship Highlights
              </a>
            </p>

            <button onClick={openResume}>Resume</button>
          </Animate>
        </div>

        <div className="about-icon">
          <div className="inner">
            <div>
              <FaDev size={50} color="var(--blue-main-color)" />
            </div>
            <div>
              <FaDatabase size={50} color="var(--blue-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var(--blue-main-color)" />
            </div>
            <div>
              <DiGithubBadge size={60} color="var(--blue-main-color)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
