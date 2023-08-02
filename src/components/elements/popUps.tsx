import React, { FC, ReactNode } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../redux/appState'

import types from '../../redux/types';
import { Button, Modal } from 'flowbite-react';
import Images from '../../assets/index';


const DeletePopUp = () => {
    const dispatch = useDispatch()
    const popUp = useSelector((state: AppState) => state.popUpReducer)
    const { open } = popUp;

    // console.log('popup');
    function closePopUp() {
        dispatch({ type: types.CLOSE_POPUP })

        if (localStorage.getItem('courseId')) {
            localStorage.removeItem('courseId')
        }
    }
    return (
        <div

        >


            <Modal show={open} size="md" popup onClose={() => closePopUp()}>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <img src={Images.infoIcon} className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this item?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <button className='border-2 p-4 rounded-lg bg-[var(--error)] text-white' onClick={() => {
                                popUp.handleOk();

                            }}>
                                Yes, I'm sure
                            </button>
                            <Button color="gray" onClick={() => closePopUp()}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>



        </div>
    )
}


const LoginAgainPopup = () => {
    const dispatch = useDispatch()
    const popUp = useSelector((state: AppState) => state.popUpReducer)
    const { open } = popUp;

    // console.log('popup');
    function closePopUp() {
        dispatch({ type: types.CLOSE_POPUP })

        if (localStorage.getItem('courseId')) {
            localStorage.removeItem('courseId')
        }
    }
    return (
        <div

        >


            <Modal show={open} size="md" popup onClose={() => closePopUp()}>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <img src={Images.infoIcon} className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this item?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <button className='border-2 p-4 rounded-lg bg-[var(--error)] text-white' onClick={() => {
                                popUp.handleOk();

                            }}>
                                Yes, I'm sure
                            </button>
                            <Button color="gray" onClick={() => closePopUp()}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>



        </div>
    )
}

export { DeletePopUp, LoginAgainPopup }