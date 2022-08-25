import React, { useContext } from 'react'
import { NoteContext } from '../../context/NoteContext'
import "./navBar.scss"
// import { User } from "../../interfaces/interfaces";

type User = {
    createdAt?: string
    email?: string
    id?: number
    name?: string
    password?: string
    updatedAt?: string
    avatar?: string
}

export const NavBar = () => {
    const { logout, noteState } = useContext(NoteContext)

    const user: User = noteState.dataUser

    const handleClick = () => {
        logout()
    }
    return (
        <nav className='nes-container nav-bar-container'>
            <div>
                <h1>Bievenido {user.name} </h1>
                {<i className={`nes-${user.avatar} nes-avatar`}></i>}
            </div>

            <button type="button" className="nes-btn is-warning" onClick={handleClick}>Salir</button>
        </nav>
    )
}
