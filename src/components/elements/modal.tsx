import React, { FC, ReactNode, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../redux/appState'

import types from '../../redux/types';
import { Modal } from 'flowbite-react';

interface ModalProps {
    children: ReactNode;


}
const CustomModal: FC<ModalProps> = ({ children }) => {
    const dispatch = useDispatch()
    const modal = useSelector((state: AppState) => state.modalReducer)
    const [open, setOpen] = useState(false)
    // const { open } = modal;




    function closeModal() {
        dispatch({ type: types.MODAL_CLOSE })
        if (localStorage.getItem('courseId')) {
            localStorage.removeItem('courseId')
        }
    }
    useEffect(() => {
        setOpen(modal.open)
    }, [modal])

    return (
        <div

        >



            <Modal show={open} position={'center'} onClose={() => { closeModal() }} className='custom-modal'>
                <Modal.Header className='w-20 h-20 absolute -top-0 -right-0 m-0 p-2 border-0'></Modal.Header>
                <Modal.Body className='m-4'>
                    {children}
                </Modal.Body>



            </Modal>



        </div>
    )
}

export default CustomModal