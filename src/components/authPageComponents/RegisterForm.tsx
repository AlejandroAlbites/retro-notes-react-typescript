import React, { useRef } from 'react'
import { useForm } from 'react-hook-form';
import './formAuth.scss'

type FormValues = {
    fullName: string,
    email: string,
    password: string,
    repeatPassword: string,
};

export const RegisterForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm<FormValues>();

    const password = useRef({});
    password.current = watch('password', '');

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <section className="nes-container with-title is-centered" >
            <p className="title nes-text is-primary">Registrarse</p>
            <main className="mainForm">
                <form className="mainForm__form" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name" className="name_field">
                        Nombre y Apellido
                    </label>
                    <input
                        className="nes-input"
                        {...register("fullName")}
                        type="text"
                        id="name_field"
                        placeholder="Ingresa tu nombre y apellido"
                        {...register('fullName', {
                            required: true,
                            pattern: /^[a-z\d A-Z\d]{4,30}$/i,
                        })}
                    />
                    {errors.fullName?.type === 'required' && (
                        <p className="nes-text is-error">
                            ⚠ El campo de nombre y apellido es requerido
                        </p>
                    )}
                    {errors.fullName?.type === 'pattern' && (
                        <p className="nes-text is-error">
                            ⚠ Introduzca un nombre con un mínimo de 6 caracteres y un máximo de
                            30
                        </p>
                    )}

                    <label htmlFor="email" className="name_field">
                        Correo
                    </label>
                    <input
                        className="nes-input"
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
                        <p className="nes-text is-error">
                            ⚠ El campo correo es requerido
                        </p>
                    )}
                    {errors.email?.type === 'pattern' && (
                        <p className="nes-text is-error" >
                            ⚠ El formato del correo no es el correcto
                        </p>
                    )}
                    <label htmlFor="password" className="name_field">
                        Contraseña
                    </label>
                    <input
                        className="nes-input"
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
                        <p className="nes-text is-error">
                            ⚠ El campo contraseña es requerido
                        </p>
                    )}
                    {errors.password?.type === 'minLength' && (
                        <p className="nes-text is-error">
                            ⚠ La contraseña debe tener un mínimo de 8 caracteres
                        </p>
                    )}
                    {errors.password?.type === 'pattern' && (
                        <p className="nes-text is-error">
                            ⚠ La contraseña debe tener al menos una letra mayúscula, una letra
                            minúscula, un número o carácter especial y una longitud mínimo de 8
                            caracteres
                        </p>
                    )}
                    <label htmlFor="repeatPassword" className="name_field">
                        Repite tu contraseña
                    </label>
                    <input
                        className="nes-input"
                        {...register("repeatPassword")}
                        type="password"
                        id="name_field"
                        placeholder="Ingresa tu contraseña nuevamente"
                        {...register('repeatPassword', {
                            validate: (value) =>
                                value === password.current || '⚠ Las contraseñas no coinciden',
                            required: true,
                        })}
                    />
                    {errors.repeatPassword && (
                        <p className="nes-text is-error">{errors.repeatPassword.message}</p>
                    )}
                    {errors.repeatPassword?.type === 'required' && (
                        <p className="nes-text is-error">
                            ⚠ El campo repetir contraseña es requerido
                        </p>
                    )}
                    <input
                        type="submit"
                        value="Registrarse"
                        className="nes-btn is-success"
                    />
                </form>
            </main>

        </section>
    )
}
