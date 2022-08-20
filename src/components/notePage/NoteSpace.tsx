import React, { useContext } from 'react'
import { NoteContext } from '../../context/NoteContext'
import './noteSpace.scss'


export const NoteSpace = () => {

    const { noteState } = useContext(NoteContext)

    const noteCurrent = noteState.notes.find(note => note.id === noteState.noteId.id)
    return (
        <div className='note-space-container'>
            <h1>{noteCurrent && noteCurrent.name}</h1>
            <p>{noteCurrent && noteCurrent.text}</p>

        </div>
    )
}
