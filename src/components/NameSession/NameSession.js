import React from "react";
import "./nameSession.css";

import Modal from "react-modal";
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

function NameSession({ name, setName }) {
  const [modalIsOpen, setIsOpen] = React.useState(true);
  let tempName;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {" "}
      {name !== "null" ? null : (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <form className='name-form'>
            <label htmlFor='nameInput'>Your Name</label>
            <input
              placeholder='Example: Ahmet'
              required
              type='text'
              name='nameInput'
              onChange={(e) => (tempName = e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setName(tempName);
                localStorage.setItem("name", tempName);
                closeModal();
              }}
            >
              Save
            </button>
          </form>
        </Modal>
      )}
    </>
  );
}

export default NameSession;
