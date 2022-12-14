import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { NoteContext } from "../../context/NoteContext";
import "./formAuth.scss";

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { loginUser, noteState } = useContext(NoteContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit = (data: any) => {
    loginUser(data);
  };

  return (
    <section className="nes-container with-title is-centered">
      <p className="title nes-text is-primary">Iniciar</p>
      <main className="mainForm">
        <form className="mainForm__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="name_field">
            Correo
          </label>
          <input
            className="nes-input input-form"
            {...register("email")}
            type="email"
            id="name_field"
            placeholder="Ingresa tu correo"
            {...register("email", {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email?.type === "required" && (
            <p className="nes-text is-error-validation">
              ⚠ El campo correo es requerido
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="nes-text is-error-validation">
              ⚠ El formato del correo no es el correcto
            </p>
          )}
          <label htmlFor="password" className="name_field">
            Contraseña
          </label>
          <input
            className="nes-input input-form"
            {...register("password")}
            type="password"
            id="name_field"
            placeholder="Ingresa tu contraseña"
            {...register("password", {
              required: true,
              minLength: 8,
              pattern:
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            })}
          />
          {errors.password?.type === "required" && (
            <p className="nes-text is-error-validation">
              ⚠ El campo contraseña es requerido
            </p>
          )}

          {noteState.isLoginValidate && (
            <div className="nes-text is-error-validation">
              Correo o Contraseña invalidos
            </div>
          )}

          <input
            type="submit"
            value="Iniciar sesión"
            className="nes-btn is-success btn-form"
          />
        </form>
      </main>
    </section>
  );
};
