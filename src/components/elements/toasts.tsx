import { Toast } from 'flowbite-react'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/appState'
import { CloseIcon, EditIcon } from '../../assets/svgIcons'
import types from '../../redux/types'


const TopToast = () => {
    const dispatch = useDispatch()
    const toast = useSelector((state: AppState) => state.toastReducer)
    const { open, data } = toast
    console.log('toast open', open)
    const closeToast = () => {
        dispatch({ type: types.layout.CLOSE_TOP_TOAST })


    }
    return (
        <div className={open ? 'block' : 'hidden'}>
            <div className='absolute bottom-10 right-10 '>
                <div className={`${data?.success ? 'border-2 border-[var(--success)]   rounded-xl shadow-lg p-2' : data?.error ? 'border-2 border-[var(--error)]   rounded-xl shadow-lg p-2' : 'border-2 border-[var(--tail-shade-dark)]   rounded-xl shadow-lg p-2`'}`}>
                    <Toast className='bg-[var(--tail-shade-light)]'>
                        <div className='me-10'>
                            <p className="text-sm font-medium text-black">{data?.heading}</p>
                            <p className="text-xs text-[var(--grey-shade-dark-2)]">{data?.text}</p>
                        </div>

                        <button onClick={() => {
                            closeToast()
                        }}>
                            <CloseIcon />
                        </button>
                    </Toast>
                </div>
            </div>
        </div>
    )
}

export default TopToast

