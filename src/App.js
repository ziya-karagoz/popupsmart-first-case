import React, { useEffect, useState } from "react";
import "./App.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useTodosData } from "./hooks/useTodosData";

import { Navbar } from "./components/Navbar/Navbar";
import NameSession from "./components/NameSession/NameSession";
import { TodoList } from "./components/TodoLists/TodoList";
import { CompletedTodoList } from "./components/TodoLists/Todolist.completed";
import { NewTodoModal } from "./components/NewTodoSession/NewTodoModal";
import { Loading } from "./components/Loading/Loading";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const [name, setName] = useState(localStorage.getItem("name") || "null");

  const onSuccess = (data) => {
    // console.log("Perform side effect after data fetching", data);
  };

  const onError = (err) => {
    // console.log("Perform side effect after encountering error", err);
  };
  const { data, isError, isLoading, refetch } = useTodosData(
    onSuccess,
    onError
  );

  useEffect(() => {
    //localStorage.setItem("name", null);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar setTheme={setTheme} userName={name} />
      <NameSession name={name} />
      <NewTodoModal refetchTodos={refetch} />
      <div className={`display ${theme}`}>
        <TodoList list={data[0]} refetchTodos={refetch} />
        <CompletedTodoList refetchTodos={refetch} list={data[1]} />
      </div>
    </>
  );
}

export default App;
