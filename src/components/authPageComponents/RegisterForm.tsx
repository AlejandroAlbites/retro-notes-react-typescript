import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { NoteContext } from '../../context/NoteContext';
import { ModalAceptCreateUser } from '../modalComponent/ModalAceptCreateUser';
import './formAuth.scss'
import { SelectAvatar } from './SelectAvatar';

type FormValues = {
    fullName: string,
    email: string,
    password: string,
    repeatPassword: string,
};

export const RegisterForm = () => {
    const { noteState } = useContext(NoteContext)

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [newUser, setNewUser] = useState({})
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm<FormValues>();

    const password = useRef({});
    password.current = watch('password', '');

    const onSubmit = (data: any) => {
        setIsOpenModal(true)
        setNewUser({ ...data, avatar: noteState.avatarImage })
    };


    return (
        <section className="nes-container with-title is-centered" >
            <p className="title nes-text is-primary">Registrarse</p>
            <main className="mainForm">
                <form className="mainForm__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className='register-form-data'>
                        <div>
                            <label htmlFor="name" className="name_field">
                                Nombres
                            </label>
                            <input
                                className="nes-input input-form"
                                {...register("fullName")}
                                type="text"
                                id="name_field"
                                placeholder="Ingresa tu nombre"
                                {...register('fullName', {
                                    required: true,
                                    pattern: /^[a-z\d A-Z\d]{4,30}$/i,
                                })}
                            />
                            {errors.fullName?.type === 'required' && (
                                <p className="nes-text is-error-validation">
                                    ⚠ El campo de nombre y apellido es requerido
                                </p>
                            )}
                            {errors.fullName?.type === 'pattern' && (
                                <p className="nes-text is-error-validation">
                                    ⚠ Introduzca un nombre con un mínimo de 6 caracteres y un máximo de
                                    30
                                </p>
                            )}

                        </div>
                        <div>
                            <label htmlFor="email" className="name_field">
                                Correo
                            </label>
                            <input
                                className="nes-input input-form"
                                {...register("email")}
                                type="email"
                                id="name_field"
                                placeholder="Ingresa tu correo"
                                {...register('email', {
                                    required: true,
                                    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                })}
                            />
                            {errors.email?.type === 'required' && (
                                <p className="nes-text is-error-validation">
                                    ⚠ El campo correo es requerido
                                </p>
                            )}
                            {errors.email?.type === 'pattern' && (
                                <p className="nes-text is-error-validation" >
                                    ⚠ El formato del correo no es el correcto
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='register-form-data'>
                        <div>
                            <label htmlFor="password" className="name_field">
                                Clave
                            </label>
                            <input
                                className="nes-input input-form"
                                {...register("password")}
                                type="password"
                                id="name_field"
                                placeholder="Ingresa tu contraseña"
                                {...register('password', {
                                    required: true,
                                    minLength: 8,
                                    pattern:
                                        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                                })}
                            />
                            {errors.password?.type === 'required' && (
                                <p className="nes-text is-error-validation">
                                    ⚠ El campo contraseña es requerido
                                </p>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <p className="nes-text is-error-validation">
                                    ⚠ La contraseña debe tener un mínimo de 8 caracteres
                                </p>
                            )}
                            {errors.password?.type === 'pattern' && (
                                <p className="nes-text is-error-validation">
                                    ⚠ La contraseña debe tener al menos una letra mayúscula, una letra
                                    minúscula, un número o carácter especial y una longitud mínimo de 8
                                    caracteres
                                </p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="repeatPassword" className="name_field">
                                Rep. clave
                            </label>
                            <input
                                className="nes-input input-form"
                                {...register("repeatPassword")}
                                type="password"
                                id="name_field"
                                placeholder="Repite tu contraseña"
                                {...register('repeatPassword', {
                                    validate: (value) =>
                                        value === password.current || '⚠ Las contraseñas no coinciden',
                                    required: true,
                                })}
                            />
                            {errors.repeatPassword && (
                                <p className="nes-text is-error-validation">{errors.repeatPassword.message}</p>
                            )}
                            {errors.repeatPassword?.type === 'required' && (
                                <p className="nes-text is-error-validation">
                                    ⚠ El campo repetir clave es requerido
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <SelectAvatar />
                    </div>
                    <input
                        type="submit"
                        value="Registrarse"
                        className="nes-btn is-success btn-form"
                    />
                </form>
                {isOpenModal && <ModalAceptCreateUser text={"¿Estas conforme con los datos ingresados?"} setIsOpenModal={setIsOpenModal} data={newUser} />}
            </main>

        </section>
    )
}
