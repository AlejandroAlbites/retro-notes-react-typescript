import React, { useContext } from 'react'
import { NoteContext } from '../context/NoteContext';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }: any) => {
    const { noteState } = useContext(NoteContext)

    return noteState.isLogin ? <Navigate to={`/home`} /> : children;
}
