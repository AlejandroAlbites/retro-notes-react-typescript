import React, { useContext, useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import { ModalDeleteNote } from "../modalComponent/ModalDeleteNote";
import "./noteSpace.scss";

export const NoteSpace = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { noteState, noteSpaceView } = useContext(NoteContext);

  const noteCurrent = noteState.notes.find(
    (note) => note._id === noteState.noteId
  );

  const handleClick = () => {
    noteSpaceView("showUpdateNote");
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  return (
    <div className="note-space-container">
      {!!noteCurrent?.favorite && (
        <div className="favorite-container">
          <i className="nes-icon is-large star"></i>
        </div>
      )}
      <h1>{noteCurrent && noteCurrent.name}</h1>
      <p>{noteCurrent && noteCurrent.text}</p>

      <div className="btn-note-options">
        <button
          type="button"
          className="nes-btn is-success"
          onClick={handleClick}
        >
          Editar
        </button>
        <button
          type="button"
          className="nes-btn is-error"
          onClick={handleOpenModal}
        >
          Eliminar
        </button>
        {isOpenModal && (
          <ModalDeleteNote
            text={"¿Seguro que quieres eliminar esta nota?"}
            setIsOpenModal={setIsOpenModal}
          />
        )}
      </div>
    </div>
  );
};
