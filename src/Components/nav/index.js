import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.css";

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "CERTIFICATES", to: "/certificates" },
  { label: "PROJECTS", to: "/projects" },
  { label: "CONTACT", to: "/contact" },
];

function NavBar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <AppBar position="static" style={{backgroundColor : "var(--blue-nav-color)",display : "flex"}} >
        <Toolbar>
          <IconButton edge="start" color="black" onClick={handleClick} sx={{ marginRight: 2 }}>
            {toggle ? <HiX size={30} /> : <FaBars size={30} style={{color : "var(--blue-main-color)"}} />}
          </IconButton>
          <Link className="icon" to="/">
            <FaReact size={30} />
          </Link>
        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={toggle} onClose={handleClick}>
        <List style={{backgroundColor : "var(--blue-background-color)"}}>
          {data.map((item, key) => (
            <ListItem key={key} button component={Link} to={item.to} onClick={handleClick} style={{color : "var(--blue-text-color)"}}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
