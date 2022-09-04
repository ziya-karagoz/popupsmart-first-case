import React, { useState, useEffect } from "react";
import "./style.css";
import { deleteTodo } from "../../api";
import { AiFillDelete } from "react-icons/ai";
import { EditTodoModal } from "../TodoEditSession/EditTodoModal";
export const CompletedTodoList = ({ list, refetchTodos }) => {
  const handleDeleteTodoBtn = (e, id) => {
    e.preventDefault();

    deleteTodo(id).then((data) => {
      console.log("silinen: ", data);
      refetchTodos();
    });
  };

  return (
    <div className='todo-container'>
      <h1>
        Completed
        <hr />
      </h1>
      <div className='todo-list'>
        {list.map((todo, idx) => {
          return (
            <div key={idx} className='todo-element'>
              <p>{todo.content}</p>
              <div className='todo-crud-btns'>
                <form>
                  <button onClick={(e) => handleDeleteTodoBtn(e, todo.id)}>
                    <AiFillDelete size={25} color={"#4e9591"} />
                  </button>
                  <EditTodoModal refetchTodos={refetchTodos} todo={todo} />
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
