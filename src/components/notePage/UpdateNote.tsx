import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { NoteContext } from '../../context/NoteContext';
import './formCreateNote.scss'
type FormValues = {
    name: string,
    text: string,
    favorite: boolean,
};

export const UpdateNote = () => {

    const { updateNote, noteState } = useContext(NoteContext)

    const noteCurrent = noteState.notes.find(note => note.id === noteState.noteId)

    const [isFavorite, setIsFavorite] = useState<boolean | undefined>(noteCurrent?.favorite)
    const handleClick = () => {
        setIsFavorite((prev) => !prev)
    }


    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<FormValues>({
        defaultValues: {
            name: noteCurrent?.name,
            text: noteCurrent?.text,
            favorite: noteCurrent?.favorite
        },
    });

    const onSubmit = (data: any) => {
        const newNote = {
            ...data,
            favorite: isFavorite
        }
        updateNote(newNote, noteState.noteId)
    };


    return (
        <section >
            <main className="">
                <form className="nes-field form-create-note-container" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name" className="name_field">
                        Título de la nota
                    </label>
                    <input
                        className="nes-input input-form"
                        {...register("name")}
                        type="text"
                        id="name_field"
                        placeholder="Ingresa un título para tu nueva nota"
                        {...register('name', {
                            required: true,
                        })}
                    />
                    {errors.name?.type === 'required' && (
                        <p className="nes-text is-error">
                            ⚠ El campo título es requerido
                        </p>
                    )}
                    <label htmlFor="text" className="name_field">
                        Contenido
                    </label>
                    <textarea
                        className="nes-textarea input-form"
                        {...register("text")}
                        id="textarea_field"
                        placeholder="Escribe tus notas aquí"
                        {...register('text', {
                            required: true,
                        })}
                    />
                    {errors.text?.type === 'required' && (
                        <p className="nes-text is-error">
                            ⚠ Debes ingresar algo
                        </p>
                    )}

                    <label htmlFor="name_field" className="name_field">Marcar favorito</label>
                    <div>
                        {
                            isFavorite ? <i className="nes-icon is-large star" onClick={handleClick}></i> : <i className="nes-icon is-large star is-empty" onClick={handleClick}></i>


                        }
                    </div>


                    <input
                        type="submit"
                        value="Guardar Cambios"
                        className="nes-btn is-success btn-save-note"
                    />
                </form>
            </main>

        </section>

    )
}
