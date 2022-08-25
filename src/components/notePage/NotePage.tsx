import React, { useContext, useEffect } from 'react'
import { Aside } from './Aside'
import { NavBar } from './NavBar'
import { NoteSpace } from './NoteSpace'
import './notePage.scss'
import { FormCreateNote } from './FormCreateNote'
import { NoteContext } from '../../context/NoteContext'
import { UpdateNote } from './UpdateNote'
import { SuccessNotification } from './SuccessNotification'
export const NotePage = () => {

    const { getNotes, noteState } = useContext(NoteContext)


    useEffect(() => {
        getNotes()
    }, [])
    return (
        <main>
            <NavBar />
            <div className='note-page-container'>
                <Aside />
                <section className='note-space-page'>
                    {noteState.NoteSpaceView === 'hidden' && <div className='hidden-container' />}
                    {noteState.NoteSpaceView === 'showCurrentNote' && <NoteSpace />}
                    {noteState.NoteSpaceView === 'showCreateNote' && <FormCreateNote />}
                    {noteState.NoteSpaceView === 'showUpdateNote' && <UpdateNote />}
                    {noteState.notification[0] && <SuccessNotification text={noteState.notification[1]} />}


                </section>
            </div>
        </main>
    )
}
