import React, { useContext, useEffect } from 'react'
import { NoteContext } from '../../context/NoteContext'

export const Logout = () => {
    const { logout } = useContext(NoteContext)
    useEffect(() => logout());
    return null
}
