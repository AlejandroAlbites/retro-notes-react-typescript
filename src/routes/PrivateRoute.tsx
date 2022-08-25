import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { NoteContext } from '../context/NoteContext';

export const PrivateRoute = ({ children }: any) => {
    const { valuesAuth } = useContext(NoteContext)
    if (!valuesAuth.isAuthenticated) {
        return <Navigate to='/' />
    }
    return (
        <div>
            <Outlet />
        </div>
    )
}


