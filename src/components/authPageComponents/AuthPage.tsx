import React, { useState } from 'react'
import './authPage.scss'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(false)
    const handleClick = () => {
        setIsLogin((prevState) => !prevState)
    }
    return (
        <main className='login-container'>
            <h1>RETRO LISTA DE NOTAS</h1>
            <div>
                <section className="nes-container info-message">
                    <section className="message-list">
                        <section className="message -left">
                            <i className="nes-bcrikko"></i>
                            <div className="nes-balloon from-left">
                                <p>Hola, si <span>{isLogin ? "no" : "ya"}</span> tienes una cuenta dame click aqui en <strong onClick={handleClick}>{
                                    isLogin ? "Registarse" : "Iniciar"
                                }</strong>, es muy sencillo</p>
                            </div>
                        </section>
                    </section>
                </section>
                <section className='form-auth-container'>
                    {
                        isLogin ? <LoginForm /> : <RegisterForm />
                    }

                </section>
            </div>
            <section className="nes-container with-title is-centered">
                <p className="title nes-text is-primary">Bienvenido</p>
                <p>Bienvenido a Retro Lista de Notas, una simple app de notas con un toque retro para los amantes de los video juegos</p>
            </section>

        </main>
    )
}
