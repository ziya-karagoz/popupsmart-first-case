import React from "react";
import "./navbar.css";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export const Navbar = ({ userName, setTheme }) => {
  return (
    <nav className='navbar'>
      <h1 href='#'>{userName != "null" ? userName : ""}</h1>
      <div className='toggle-btn'>
        <ToggleSwitch label={"Theme"} setTheme={setTheme} />
      </div>
    </nav>
  );
};
