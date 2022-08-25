import React, { useContext } from 'react'
import { NoteContext } from '../../context/NoteContext'
import './modal.scss'
interface Props {
    text: string,
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
}
export const ModalDeleteNote = ({ text, setIsOpenModal }: Props) => {

    const { noteState, noteSpaceView, deleteNote, noteId } = useContext(NoteContext)

    const handleDelete = () => {
        deleteNote(noteState.noteId)
        noteSpaceView('hidden')
        setIsOpenModal(false)
    }

    return (
        <div className='modal-background'>
            <div className='nes-dialog is-rounded modal-container' id="dialog-rounded">
                <div className='modal-title'>{text}</div>
                <div className='btn-container'>
                    <button className='nes-btn is-error' onClick={() => setIsOpenModal(false)}>Cancelar</button>
                    <button className='nes-btn is-primary' onClick={handleDelete}>Continuar</button>
                </div>
            </div>
        </div>
    )
}
