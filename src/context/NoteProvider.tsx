import React, { Children, useReducer } from 'react'
import axios from 'axios';
import { Note, NoteState } from '../interfaces/interfaces'
import { NoteContext } from './NoteContext'
import { noteReducer } from './noteReducer'

const BASE_URL = process.env.REACT_APP_URL_BACKEND;
interface Props {
    children: JSX.Element | JSX.Element[]
}

const datamockup: Note[] = [
    {
        id: '1',
        name: "mercado",
        text: "mi lista de mercado, papas camotes huevos",
        favorite: false
    }, {
        id: '2',
        name: "universidad",
        text: "estudiar para ...",
        favorite: false
    }
]

const initial_state: NoteState = {
    notes: datamockup,
    noteId: '',
    isLogin: false,
    dataUser: {},
}

export const NoteProvider = ({ children }: Props) => {

    const [noteState, dispatch] = useReducer(noteReducer, initial_state)

    const noteId = (id: string) => {
        dispatch({ type: 'noteId', payload: { id: id } })
    }
    const loginUser = async (data: any) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/user/login`, {
                email: data.email,
                password: data.password,
            });
            if (response.data.ok) {
                localStorage.setItem('token', response.data.token);
                dispatch({ type: 'isLogin', payload: { isLogin: true } })
                dispatch({ type: 'dataUser', payload: { dataUser: response.data.data } })
            }
        } catch (error) {
            console.log(error);
        }
    };

    const registerUser = async (data: any) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/user/`, {
                name: data.fullName,
                email: data.email,
                password: data.password,
            });
            if (response.data.ok) {
                localStorage.setItem('token', response.data.token);
                dispatch({ type: 'isLogin', payload: { isLogin: true } })
                dispatch({ type: 'dataUser', payload: { dataUser: response.data.data } })
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <NoteContext.Provider value={{ noteState, noteId, loginUser, registerUser }}>{children}</NoteContext.Provider>
    )
}
