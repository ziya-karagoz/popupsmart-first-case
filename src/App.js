import React, { useEffect, useState } from "react";
import "./App.css";

import { fetchTodos } from "./api";
import { Navbar } from "./components/Navbar/Navbar";
import NameSession from "./components/NameSession/NameSession";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const [name, setName] = useState(localStorage.getItem("name"));

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // for fetchin todos from server
    fetchTodos().then((data) => setTodos(data));
    console.log(name);
    localStorage.setItem("name", null);
  }, []);

  return (
    <>
      <Navbar setTheme={setTheme} userName={name} />
      <NameSession name={name} />
      <div className={`App ${theme}`}></div>
    </>
  );
}

export default App;
