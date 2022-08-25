import React, { useContext, useEffect, useState } from 'react'
import { NoteContext } from '../../context/NoteContext'

export const SelectAvatar = () => {

    const { avatar: contexAvatar } = useContext(NoteContext)

    const initial_count = 0
    const [avatar, setAvatar] = useState('mario')
    const [count, setCount] = useState(initial_count)
    const avatarArray = ['mario', 'ash', 'pokeball', 'bulbasaur', 'charmander', 'squirtle', 'kirby']

    const handleClickBefore = () => {
        count === 0 ? setCount(avatarArray.length - 1) : setCount((count - 1))
        setAvatar(avatarArray[count])
    }
    const handleClickAfter = () => {
        count === avatarArray.length - 1 ? setCount(0) : setCount(count + 1)
        setAvatar(avatarArray[count])
    }
    useEffect(() => {
        contexAvatar(avatar)
    }, [avatar, count])

    return (
        <div className='select-form-container'>
            <label htmlFor="default_select">Elige un Avatar</label>
            <div className="select-avatar-container">
                <span onClick={handleClickBefore} className="btn-select-avatar"> {'<'} </span>
                <div><i className={`nes-${avatar}`}></i></div>
                <span onClick={handleClickAfter} className="btn-select-avatar"> {'>'} </span>
            </div>
        </div>
    )
}
