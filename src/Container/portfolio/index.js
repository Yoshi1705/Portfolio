import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import Main from "../../Components/Headercontent";
import "./style.css";
import { Link } from "react-router-dom";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";

function Projects() {
  return (
    <div>
      <Main text="MY PROJECTS" icon={<BsInfoCircleFill size={40} />} />

      <div className="projet-container">
        <div className="project-row">
          <Link
            className="link-style"
            to="https://symphonious-maamoul-fdbab7.netlify.app/"
          >
            <div className="image-container">
              <img src={img1} />

              <div className="text-container">
                <h3>Chat Appilication</h3>
                <p>
                  A real-time chat application built with React and Firebase.
                  Users can join chat rooms, send and receive messages
                  instantly, and enjoy a seamless chatting experience
                </p>
              </div>
            </div>
          </Link>

          <Link
            className="link-style"
            to="https://fantastic-cocada-ea19ed.netlify.app/"
          >
            <div className="image-container">
              <img src={img2} />

              <div className="text-container">
                <h3>Rodent Run</h3>
                <p>
                  This game is a maze-solving game that utilizes backtracking
                  algorithm to guide a rat through a maze in search of a piece
                  of cheese.It is played on grid-based-board
                </p>
              </div>
            </div>
          </Link>

          <Link
            className="link-style"
            to="https://universitywebsite-omega.vercel.app/"
          >
            <div className="image-container">
              <img src={img3} />

              <div className="text-container">
                <h3>University Website</h3>
                <p>
                  The university website showcases courses offered, a blog for
                  news and updates, a contact section for inquiries,
                  testimonials from students, and highlights the facilities
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="project-col">
          <Link
            className="link-style"
            to="https://newapp-chi-smoky.vercel.app/"
          >
            <div className="image-container">
              <img src={img7} />

              <div className="text-container">
                <h3>SpaceX</h3>
                <p>
                  The SpaceX project utilizes the SpaceX API to display
                  information about satellites launched by SpaceX missions users
                  can access the data related to SpaceX's satellite
                </p>
              </div>
            </div>
          </Link>

          <Link
            className="link-style"
            to="https://yoshi1705.github.io/Useragent/"
          >
            <div className="image-container">
              <img src={img5} />

              <div className="text-container">
                <h3>Browser Extension</h3>
                <p>
                  A browser extension project that helps users determine the
                  current browser they are working and very useful, for users
                  who switches browser many times.
                </p>
              </div>
            </div>
          </Link>

          <Link
            className="link-style"
            to="https://yoshi1705.github.io/MixorMatch/"
          >
            <div className="image-container">
              <img src={img6} />

              <div className="text-container">
                <h3>MIx or Match</h3>
                <p>
                  A card matching game is a classic game that can be played with
                  a deck of playing cards. The game consists of a set of cards
                  that are shuffled and placed on table.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
