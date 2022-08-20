import React, { Children, useReducer } from 'react'
import { Note, NoteState } from '../interfaces/interfaces'
import { NoteContext } from './NoteContext'
import { noteReducer } from './noteReducer'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const datamockup: Note[] = [
    {
        id: '1',
        name: "mercado",
        text: "mi lista de mercado, papas camotes huevos",
        favorite: false
    }, {
        id: '2',
        name: "universidad",
        text: "estudiar para ...",
        favorite: false
    }
]


const initial_state: NoteState = {
    notes: datamockup,
    noteId: ''
}

export const NoteProvider = ({ children }: Props) => {

    const [noteState, dispatch] = useReducer(noteReducer, initial_state)

    const noteId = (id: string) => {
        dispatch({ type: 'noteId', payload: { id: id } })
    }
    return (
        <NoteContext.Provider value={{ noteState, noteId }}>{children}</NoteContext.Provider>
    )
}
