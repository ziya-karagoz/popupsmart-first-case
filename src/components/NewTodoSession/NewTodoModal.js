import React, { useState, useEffect } from "react";
import "./newTodoModal.css";

import Modal from "react-modal";
import { AiFillFileAdd } from "react-icons/ai";
import { addTodo } from "../../api";
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

export const NewTodoModal = ({ refetchTodos }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [content, setContent] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const handleAddTodoBtn = (e) => {
    e.preventDefault();
    var text = document.getElementById("requiredArea").value;
    if (text.length < 3) {
      alert("Your todo must be at least 3 characters long!");
      return false;
    }

    const newTodo = {
      content: content,
    };
    addTodo(newTodo).then((data) => {
      console.log(data);
      refetchTodos();
      closeModal();
    });
  };

  return (
    <>
      <button className='add-todo-btn' onClick={openModal}>
        <AiFillFileAdd size={100} color={"#4e9591"} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form className='add-todo-form'>
          <label htmlFor='todoContent'>Enter Todo...</label>
          <textarea
            id='requiredArea'
            type='text'
            name='todoContent'
            placeholder='Example: Do homework'
            required
            title='3 characters minimum'
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleAddTodoBtn}>Save</button>
        </form>
      </Modal>
    </>
  );
};
