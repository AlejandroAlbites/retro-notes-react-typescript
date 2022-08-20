import React from 'react'
import "./navBar.scss"

export const NavBar = () => {
    return (
        <nav className='nes-container nav-bar-container'>
            <h1>Bievenido Alejandro</h1>
            <button type="button" className="nes-btn is-warning">Salir</button>
        </nav>
    )
}
