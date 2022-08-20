import React from 'react'
import { Aside } from './Aside'
import { NavBar } from './NavBar'
import { NoteSpace } from './NoteSpace'
import './notePage.scss'
export const NotePage = () => {
    return (
        <main>
            <NavBar />
            <div className='note-page-container'>
                <Aside />
                <section className='note-space-page'><NoteSpace /></section>
            </div>
        </main>
    )
}
