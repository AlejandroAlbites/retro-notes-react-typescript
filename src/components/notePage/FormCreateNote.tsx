import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NoteContext } from "../../context/NoteContext";
import "./formCreateNote.scss";
type FormValues = {
  name: string;
  text: string;
  favorite: boolean;
};

export const FormCreateNote = () => {
  const { createNote, noteSpaceView, noteState } = useContext(NoteContext);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const handleClick = () => {
    setIsFavorite((prev) => !prev);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit = (data: any) => {
    const newNote = {
      ...data,
      favorite: isFavorite,
    };

    createNote(newNote);
  };

  return (
    <section>
      <main className="">
        <form
          className="nes-field form-create-note-container"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="name" className="name_field label-create-note">
            Título de la nota
          </label>
          <input
            className="nes-input input-form input-create-note"
            {...register("name")}
            type="text"
            id="name_field"
            placeholder="Ingresa un título para tu nueva nota"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name?.type === "required" && (
            <p className="nes-text is-error">⚠ El campo título es requerido</p>
          )}
          <label htmlFor="text" className="name_field label-create-note">
            Contenido
          </label>
          <textarea
            className="nes-textarea input-form"
            {...register("text")}
            id="textarea_field"
            placeholder="Escribe tus notas aquí"
            {...register("text", {
              required: true,
            })}
          />
          {errors.text?.type === "required" && (
            <p className="nes-text is-error">⚠ Debes ingresar algo</p>
          )}

          <label htmlFor="name_field" className="name_field label-create-note">
            Marcar favorito
          </label>
          <div>
            {isFavorite ? (
              <i className="nes-icon is-large star" onClick={handleClick}></i>
            ) : (
              <i
                className="nes-icon is-large star is-empty"
                onClick={handleClick}
              ></i>
            )}
          </div>

          <input
            type="submit"
            value="Guardar"
            className="nes-btn is-success btn-save-note"
          />
        </form>
      </main>
    </section>
  );
};
