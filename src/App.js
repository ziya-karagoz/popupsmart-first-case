import React, { useEffect, useState } from "react";
import "./App.css";
import Modal from "react-modal";
import { fetchTodos } from "./api";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    // for fetchin todos from server
    fetchTodos().then((data) => setTodos(data));
  }, []);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <>
      <Navbar setTheme={setTheme} theme={theme} />
      <div className={`App ${theme}`}></div>
    </>
  );
}

export default App;
