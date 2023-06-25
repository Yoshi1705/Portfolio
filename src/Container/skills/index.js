import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import Main from "../../Components/Headercontent";
import {Line} from 'rc-progress'
import "./style.css";
import skillData from "./util";
import { Animate, AnimateKeyframes } from "react-simple-animate";

function Skills() {
  return (
    <div className="skills">
      <Main text="MY SKILLS" icon={<BsInfoCircleFill size={40} />} />
      <div className="skills-content">
        {skillData.map((item, index) => (
          <div key={index} className="skills-inner">
            <Animate
              play
              duration={2}
              delay={0.5}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translatex(0px)" }}
            >
              <h3>{item.label}</h3>
              <div className="skills-innermost">
                {
                  item.data.map((item,index) =>(
                    <AnimateKeyframes play duration={1} keyframes={["opacity:2","opacity:0"]} iterationCount={Infinity}>
                      <div className="skill-bar" key = {index}>
                         <p>{item.skill}</p>
                         <Line percent = {item.percentage}  trailWidth= {2} strokeWidth={2}   strokeLinecap="square"/>
                      </div>

                    </AnimateKeyframes>
                  ))
                }
              </div>

            </Animate>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
