import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { NoteContext } from '../context/NoteContext';

export const PrivateRoute = ({ children }: any) => {
    const { noteState } = useContext(NoteContext)

    return noteState.isLogin ? children : <Navigate to='/' />;

}


