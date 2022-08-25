import React, { useContext } from 'react'
import { NoteContext } from '../context/NoteContext';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = ({ children }: any) => {
    const { valuesAuth } = useContext(NoteContext)
    if (valuesAuth.isAuthenticated) {
        return <Navigate to='/home' />
    }
    return (
        <div>
            <Outlet />
        </div>
    )
}
