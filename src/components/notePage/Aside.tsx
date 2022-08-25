import React, { useContext, useEffect, useState } from 'react'
import { NoteContext } from '../../context/NoteContext'
import { Note, NoteState } from '../../interfaces/interfaces'
import './aside.scss'
import { NoteSpace } from './NoteSpace'


export const Aside = () => {


    const { noteState, noteId, noteSpaceView } = useContext(NoteContext)
    const [data, setData] = useState<NoteState['notes']>([]);
    const [newFilter, setNewFilter] = useState('');
    const [favoriteFilter, setFavoriteFilter] = useState<boolean>(false);

    const noteCurrent: Note | undefined = noteState.notes.find(note => note.id === noteState.noteId)

    const search = noteState.notes.filter((note) =>
        note.name.toLowerCase().includes(newFilter.toLowerCase())
    );
    const searchFavorite = data.filter((note) => !!note.favorite === true)
    useEffect(() => {
        favoriteFilter ? setData(searchFavorite) : setData(search)
    }, [noteState.notes, newFilter, favoriteFilter])

    const handleClick = () => {
        noteSpaceView('showCreateNote')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFavoriteFilter(e.target.checked);
    };

    return (
        <aside className='aside-container'>
            <section className='aside-options'>
                <button type="button" className="nes-btn is-primary" onClick={handleClick}>Crear Nota</button>
                <div className="nes-field">
                    <input type="text" id="name_field" className="nes-input" placeholder='Buscar Nota' value={newFilter}
                        onChange={(e) => setNewFilter(e.target.value)} />
                </div>
                <label>
                    <input type="checkbox" className="nes-checkbox" onChange={handleChange}
                    />
                    <span>Filtra tus Favoritos</span>
                </label>
            </section>

            <section className='notes-list'>
                {
                    data.length > 0 && data.map(item => (
                        <div key={item.id} className={noteCurrent?.id === item.id ? "note-name-select" : "note-name"} onClick={() => {
                            noteId(item.id)
                            noteSpaceView('showCurrentNote')
                        }}>
                            <div className='list-note-container'>
                                {!!item.favorite === true &&
                                    <div className='favorite-star-container'>
                                        <i className="nes-icon is-small star" onClick={handleClick}></i>
                                    </div>
                                }
                                <h1>{item.name}</h1>
                            </div>
                        </div>
                    ))
                }
            </section>
        </aside>
    )
}
