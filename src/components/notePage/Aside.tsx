import React, { useContext, useEffect, useState } from 'react'
import { NoteContext } from '../../context/NoteContext'
import { Note, NoteState } from '../../interfaces/interfaces'
import './aside.scss'
import { NoteSpace } from './NoteSpace'

export const Aside = () => {

    const { noteState, noteId } = useContext(NoteContext)
    const [data, setData] = useState<NoteState['notes']>([]);

    useEffect(() => {
        setData(noteState.notes)
    }, [])


    return (
        <aside className='aside-container'>
            <section className='aside-options'>
                <button type="button" className="nes-btn is-primary">Crear Nota</button>
                <div className="nes-field">
                    <input type="text" id="name_field" className="nes-input" placeholder='Buscar Nota' />
                </div>
                <label>
                    <input type="checkbox" className="nes-checkbox" />
                    <span>Filtra tus Favoritos</span>
                </label>
            </section>


            <section className='notes-list'>
                {
                    data && data.map(item => (
                        <div key={item.id} className="note-name" onClick={() => noteId(item.id)}>
                            {item.name}
                            {/* <NoteSpace notes={data} noteId={noteId} /> */}
                        </div>
                    ))
                }
            </section>
        </aside>
    )
}
