import React, { FC } from 'react'
import { CustomButton } from '../../../components/elements/actions'
import Images from '../../../assets'
import CartButton from '../../../components/cartButton'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/appState';
import { getHeaders } from '../../../services';
import api from '../../../services/baseUrl';
import types from '../../../redux/types';
import { addToCartEndPoint, addToShortListEndPoint, editShortListEndPoint } from '../../../services/endPoints';
import { CartIcon, DeleteIcon } from '../../../assets/svgIcons';
import TopToast from '../../../components/elements/toasts';
import { DeletePopUp } from '../../../components/elements/popUps';
interface ShortListedItemProps {
    university: {
        location: {
            country: '',
            state: '',
            city: ''
        },
        _id: '',
        name: '',
        code: '',
        logoSrc: '',
        type: '',
        establishedYear: 0
    },
    course: {
        schoolDetails: {
            schoolName: '',
            DepartmentName: '',
            schoolLogoSrc: ''
        },
        _id: '',
        name: '',
        degree: '',
        duration: ''
    },
    _id: ''
}


const ShortListed = () => {
    const dispatch = useDispatch()
    const dashboard = useSelector((state: AppState) => state.dashboardReducer)

    const shortListed = dashboard?.data?.activity?.shortListed
    const deleteShortList = async (itemId: any) => {
        const headers = getHeaders()
        try {
            const { data } = await api.patch(editShortListEndPoint(itemId), headers)
            console.log('edit short list res', data);
            dispatch({ type: types.OPEN_POPUP, payload: { success: true, heading: 'Deleted! Succesfully' } })
        }
        catch {
            dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { error: true, heading: ' Already deleted ' } })
        }

    }

    const handleDeleteShortList = (itemId: string) => {


        dispatch({
            type: types.OPEN_POPUP, payload: {
                handleOk: () => {
                    console.log('handleDelete open popup');
                    deleteShortList(itemId)
                }
            }
        })
    }

    const addToCart = async (universityId: string, courseId: string) => {


        const headers = getHeaders()

        try {
            await api.post(addToCartEndPoint(), {
                universityId: universityId,
                courseId: courseId
            }, headers)

            dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { success: true, heading: ' Added to Cart ', text: 'you can view your Cart items in your account cart section' } })

        }
        catch {
            dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { error: true, heading: ' Already added to cart ', text: 'you can view your Cart items in your account cart section' } })
        }

    }

    return (
        <>
            <div className="grid grid-cols-1">
                {
                    shortListed?.map((item: ShortListedItemProps) => {
                        return <div className="col-span-12 p-4 rounded-lg bg-[var(--grey-shade-light)]">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-11 md:col-span-11">
                                    <div className="grid  grid-cols-1 lg:grid-cols-2 gap-4">

                                        <div className="flex flex-col md:flex-row items-center gap-4 shadow-lg bg-white rounded-lg p-4">
                                            <img src={item?.university?.logoSrc} alt="university-icon" className='w-20 h-20' />
                                            <div>
                                                <p className='text-lg font-semibold pb-2'>{item?.university?.name}</p>
                                                <p className='text-sm'>{item?.university.type}, {item?.university?.location?.country}, {item?.university?.establishedYear}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-center gap-4 shadow-lg bg-white rounded-lg p-4">
                                            <img src={item?.course?.schoolDetails?.schoolLogoSrc} alt="university-icon" className='w-20 h-20 rounded-full object-contain' />
                                            <div>
                                                <p className='text-lg font-semibold pb-2'>{item?.course?.name}</p>
                                                <p className='text-sm'><span className='capitalize'>{item?.course?.degree}</span>,{item?.course?.schoolDetails?.schoolName}</p>
                                                <p className='text-xs'><span className='capitalize'>{item?.course?.degree}</span>,{item?.course?.duration}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-span-1 m-auto">
                                    <button className="mb-2 shadow-lg rounded-full flex justify-center items-center bg-[#f53d3d] w-9 h-9 text-white hover:bg-white hover:text-[#f53d3d] focus:bg-white focus:text-[#f53d3d]" onClick={() => {
                                        handleDeleteShortList(item?._id)
                                    }}>
                                        <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                                        </svg>
                                    </button>
                                    <button className="rounded-full flex justify-center items-center bg-[var(--tail-shade-dark)] shadow-lg w-9 h-9 text-white hover:bg-[var(--beinge)] hover:text-[var(--tail-shade-dark)] focus:bg-[var(--beinge-shade-light)] focus:text-[var(--tail-shade-dark)]" onClick={() => {
                                        addToCart(item?.university?._id, item?.course?._id)
                                    }}>
                                        <svg className="w-5 h-5   dark:text-white m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="col-span-11">

                                    <CustomButton handleSubmit={() => { }}>Save</CustomButton>

                                </div>
                            </div>
                        </div>
                    })
                }
                <TopToast />
                <DeletePopUp />
            </div>
        </>
    )
}

export default ShortListed