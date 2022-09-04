import React, { useContext, useEffect } from "react";
import "./toggleSwitch.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
const ToggleSwitch = ({ label, setTheme }) => {
  const value = localStorage.getItem("theme");

  const handleThemeButton = () => {
    localStorage.setItem("theme", value === "light" ? "dark" : "light");
    setTheme(value === "light" ? "dark" : "light");
    if (value === "light") {
    } else {
    }
  };
  //
  return (
    <div className='container-toggle-switch'>
      <div className='toggle-switch'>
        <input
          type='checkbox'
          className='checkbox'
          name={label}
          id={label}
          onClick={handleThemeButton}
          defaultChecked={value === "light" ? false : true}
        />
        <label className='label' htmlFor={label}>
          <span className='inner' />
          <span className='switch'>
            {value === "dark" ? (
              <BsFillMoonFill
                style={{
                  color: "black",
                  padding: "3px",
                  paddingBottom: "6px",
                }}
              />
            ) : (
              <BsFillSunFill
                style={{
                  color: "black",
                  padding: "3px",
                  paddingBottom: "6px",
                }}
              />
            )}
          </span>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
