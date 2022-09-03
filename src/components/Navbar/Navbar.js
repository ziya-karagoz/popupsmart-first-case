import React from "react";
import "./navbar.css";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export const Navbar = ({ setTheme, theme }) => {
  return (
    <nav className={`navbar ${theme}`}>
      <h1 href='#'>Ziya</h1>
      <div className='toggle-btn'>
        <ToggleSwitch label={"Theme"} setTheme={setTheme} />
      </div>
    </nav>
  );
};
