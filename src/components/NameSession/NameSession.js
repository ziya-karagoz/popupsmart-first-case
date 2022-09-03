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

function NameSession({ name }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
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
      {name != "null" ? null : (
        <Modal
          isOpen={true}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <form className='name-form'>
            <label htmlFor='nameInput'>İsminizi Giriniz</label>
            <input
              placeholder='Örn: Ahmet'
              required
              type='text'
              name='nameInput'
              onChange={(e) => (tempName = e.target.value)}
            />
            <button
              onClick={() => {
                localStorage.setItem("name", tempName);
              }}
            >
              Kaydet
            </button>
          </form>
        </Modal>
      )}
    </>
  );
}

export default NameSession;
