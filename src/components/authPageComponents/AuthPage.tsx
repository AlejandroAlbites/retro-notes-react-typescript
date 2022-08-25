import React, { useState } from 'react'
import './authPage.scss'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

export const AuthPage = () => {
    const [isNewUser, setIsNewUser] = useState(false)
    const handleClick = () => {
        setIsNewUser((prevState) => !prevState)
    }
    return (
        <main className='auth-container'>
            <div className='login-container'>
                <div className='header-container'>
                    <h1><i className="snes-logo"></i> RETRO LISTA DE NOTAS <i className="snes-logo"></i></h1>
                    <div className='social-icon-container'>
                        <a href='https://github.com/AlejandroAlbites' target="_blank"><i className="nes-icon github is-large"></i></a>
                        <a href='https://pe.linkedin.com/in/juan-alejandro-albites-tapia-316185112?original_referer=https%3A%2F%2Fwww.google.com%2F'
                            target="_blank"><i className="nes-icon linkedin is-large"></i></a>


                    </div>
                </div>
                <div className='body-container'>
                    <section className="nes-container info-message">
                        <section className="message-list">
                            <section className="message -left">
                                <i className="nes-bcrikko"></i>
                                <div className="nes-balloon from-left">
                                    <p>Hola, si <span>{isNewUser ? "ya" : "no"}</span> tienes una cuenta dame click aquí en <strong onClick={handleClick}>{
                                        isNewUser ? "Iniciar" : "Registrarse"
                                    }</strong>, es muy sencillo</p>
                                </div>
                            </section>
                        </section>
                    </section>
                    <section className='form-auth-container'>
                        {
                            isNewUser ? <RegisterForm /> : <LoginForm />
                        }

                    </section>
                </div>
            </div>
            <footer className='footer-container'>
                <section className="nes-container with-title is-centered">
                    <p className="title nes-text is-primary">Bienvenido</p>
                    <p>Bienvenido a Retro Lista de Notas, una simple app de notas con un toque retro para los amantes de los video juegos</p>
                </section>
            </footer>
        </main>
    )
}
