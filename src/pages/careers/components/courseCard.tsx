import React, { FC, useState } from 'react'
import Images from '../../../assets'
import CustomModal from '../../../components/elements/modal'
import { getHeaders, openModal } from '../../../services'
import { useDispatch, useSelector } from 'react-redux'
import types from '../../../redux/types'
import { AppState } from '../../../redux/appState'
import { SectionHeading } from '../../../assets/texts'
import { courseItemProps } from '../../../interfaces'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { addToCartEndPoint, addToShortListEndPoint } from '../../../services/endPoints'
import api from '../../../services/baseUrl'
import { CartIcon } from '../../../assets/svgIcons'

interface courseProps {
    item: courseItemProps
}
const CourseCard: FC<courseProps> = ({ item }) => {

    const dispatch = useDispatch()

    const modal = useSelector((state: AppState) => state.modalReducer)
    const courseId = localStorage.getItem('courseId')

    const openModal = async () => {



        dispatch({ type: types.MODAL_OPEN, payload: { modal_type: types.layout.APPLY_NOW_MODAL } })


    }

    const addToShortList = async (universityId: string, courseId: string) => {


        const headers = getHeaders()

        try {
            await api.post(addToShortListEndPoint(), {
                universityId: universityId,
                courseId: courseId
            }, headers)

            dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { success: true, heading: ' Shortlisted ', text: 'you can view your shortlisted courses in dashboard' } })

        }
        catch {
            dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { error: true, heading: ' Already Shortlisted ', text: 'you can view your shortlisted courses in dashboard' } })
        }

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

    console.log('course item', item)

    return (
        <>
            <div className='grid grid-cols-12 border-b border-b-2 border-b p-4 relative '>
                <div className="col-span-12 sm:col-span-2">
                    <img src={item.schoolDetails.schoolLogoSrc} alt="school-logo" className='rounded-lg w-20 h-20  sm:w-full object-contain' />
                </div>
                <div className="col-span-12 sm:col-span-8">
                    <div className="p-4 border-b border-b-2 border-b-[#c5c1c1]">
                        <p className="text-lg text-semibold">{item.name}</p>
                        <p className="text-md text-semibold py-1">{item.schoolDetails.schoolName}</p>
                        {/* <p className="text-sm text-[var(--grey-shade-dark)]">1880 | Los Angeles | United States</p> */}
                        <p className="text-sm text-[var(--grey-shade-dark)]">{'Apply before ' + moment(item.applicationDeadline).format('DD/MM/YYYY')}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">

                        <div>
                            <button className='rounded-md w-full p-2 bg-[var(--tail-shade-dark)] text-white' onClick={() => {

                                localStorage.setItem('courseId', item._id)


                                openModal()

                            }}>Apply Now</button>
                        </div>
                        <div>
                            <button className='flex justify-center items-center rounded-md w-full p-1 border border-2 border-[var(--tail-shade-dark)]' onClick={() => {
                                addToShortList(item?.university?._id, item._id)
                            }}>
                                <img src={Images.shortListIcon} alt="short-list-icon" className='me-4  w-7 ' />
                                <p className='text-center'>Short List</p>
                            </button>
                        </div>


                    </div>
                </div>
                <div className="col-span-2">


                </div>
                <div className="absolute top-4 right-4">
                    <button className="rounded-full flex justify-center items-center bg-[var(--tail-shade-dark)] w-9 h-9 text-white hover:bg-[var(--beinge-shade-light)] hover:text-[var(--tail-shade-dark)] focus:bg-[var(--beinge-shade-light)] focus:text-[var(--tail-shade-dark)]" onClick={() => {
                        addToCart(item?.university?._id, item._id)
                    }}>
                        <CartIcon />
                    </button>
                </div>



            </div>
            {modal.modal_type === types.layout.APPLY_NOW_MODAL && item._id === courseId && <CustomModal>
                <div className="container mb-5">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 ">
                            <div className="rounded-lg p-4 bg-[var(--beinge-shade-light)] flex flex-col justify-between items-center gap-4">
                                <div className="bg-white rounded-lg shadow-md mb-20">
                                    <div className="lg font-semibold p-4  ">
                                        {item.name}
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg -mb-10 shadow-lg p-4 flex items-center">

                                    <img src={item.schoolDetails.schoolLogoSrc} alt="" className='w-20 h-20 rounded-lg object-contain' />
                                    <div className='ms-4'>
                                        <p className="text-xl font-semibold">BS. Computer science</p>
                                        <p className='text-md'>USC Dornsife College of Letters, Arts and Sciences</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="col-span-12 mt-5">
                            <SectionHeading>Details</SectionHeading>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                    <p className='text-lg text-center'>{item.duration}</p>
                                    <p className='text-lg text-[var(--grey-shade-dark)] font-semibold text-center'>Duration</p>
                                </div>
                                <div>
                                    <p className='text-lg text-center'>{item.degree}</p>
                                    <p className='text-lg text-[var(--grey-shade-dark)] font-semibold text-center'>Degree</p>
                                </div>
                                <div>
                                    <p className='text-lg text-center'>{moment(item.applicationDeadline).format('DD/MM/YYYY')}</p>
                                    <p className='text-lg text-[var(--grey-shade-dark)] font-semibold text-center'>Deadline</p>
                                </div>
                                <div>
                                    <p className='text-lg text-center'>24 months</p>
                                    <p className='text-lg text-[var(--grey-shade-dark)] font-semibold text-center'>Duration</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 mx-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                <div className='rounded-md w-full p-2 bg-[var(--tail-shade-dark)] text-white text-center'>
                                    <Link to='/destinations/country/university-details' className='text-center' onClick={() => {

                                        localStorage.setItem('universityId', item.university._id)
                                    }}>View Details</Link>
                                </div>

                                <div >
                                    <button className='rounded-md w-full p-2 bg-[var(--tail-shade-dark)] text-white' onClick={() => {

                                    }}>Apply Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CustomModal>}
        </>
    )
}

export default CourseCard