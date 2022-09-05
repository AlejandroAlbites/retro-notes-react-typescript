import React, { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";
import "./modal.scss";
interface Props {
  text: string;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: object;
}
export const ModalAceptCreateUser = ({ text, setIsOpenModal, data }: Props) => {
  const { registerUser } = useContext(NoteContext);

  const handleClick = () => {
    registerUser(data);
    setIsOpenModal(false);
  };

  return (
    <div className="modal-background">
      <div
        className="nes-dialog is-rounded modal-form-container"
        id="dialog-rounded"
      >
        <div>
          <h2 className="modal-title">{text}</h2>
        </div>
        <div className="btn-container">
          <button
            className="nes-btn is-error btn-modal"
            onClick={() => setIsOpenModal(false)}
          >
            Cancelar
          </button>
          <button
            className="nes-btn is-primary btn-modal"
            onClick={handleClick}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
