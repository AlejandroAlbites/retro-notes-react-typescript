import React, { useContext } from 'react'
import { NoteContext } from '../../context/NoteContext'
import './modal.scss'
interface Props {
    text: string,
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    data: object
}
export const ModalAceptCreateUser = ({ text, setIsOpenModal, data }: Props) => {


    const { registerUser } = useContext(NoteContext)


    const handleClick = () => {
        registerUser(data)
        setIsOpenModal(false)
    }

    return (
        <div className='modal-background'>
            <div className='nes-dialog is-rounded modal-form-container' id="dialog-rounded">
                <div className='modal-title'>{text}</div>
                <div className='btn-container'>
                    <button className='nes-btn is-error' onClick={() => setIsOpenModal(false)}>Cancelar</button>
                    <button className='nes-btn is-primary' onClick={handleClick}>Continuar</button>
                </div>
            </div>
        </div>
    )
}
