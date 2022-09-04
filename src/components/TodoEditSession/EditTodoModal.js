import React, { useState, useEffect } from "react";
import "./editTodoModal.css";
import { AiFillEdit } from "react-icons/ai";

import Modal from "react-modal";
import { updateTodo } from "../../api";
Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const EditTodoModal = ({ todo, refetchTodos }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(todo.content);
  const [completed, setCompleted] = useState(todo.isCompleted);
  const handleEditTodoBtn = (e, id) => {
    e.preventDefault();
    openModal();
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const handleEditSaveBtn = (e, id) => {
    e.preventDefault();
    var text = document.getElementById("requiredArea").value;
    if (text.length < 3) {
      alert("Your todo must be at least 3 characters long!");
      return false;
    }
    const updatedTodo = {
      content: content,
      isCompleted: completed,
    };
    updateTodo(id, updatedTodo).then((data) => {
      console.log(data);
      refetchTodos();
      closeModal();
    });
  };
  return (
    <>
      <button onClick={(e) => handleEditTodoBtn(e, todo.id)}>
        <AiFillEdit size={25} color={"#4e9591"} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {" "}
        <form className='edit-todo-form'>
          <label htmlFor='todoContent'>Enter Todo...</label>
          <textarea
            id='requiredArea'
            type='text'
            name='todoContent'
            defaultValue={todo.content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className='edit-input'>
            <label htmlFor='completedControl'>
              <input
                type='checkbox'
                name='completedControl'
                onChange={(e) => setCompleted(e.target.checked)}
                defaultChecked={todo.isCompleted}
              />{" "}
              I have completed this task
            </label>
          </div>
          <button
            onClick={(e) => {
              handleEditSaveBtn(e, todo.id);
            }}
          >
            Save
          </button>
        </form>
      </Modal>
    </>
  );
};
