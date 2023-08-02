// import React from 'react'
import Images from '../../assets'

import { Link } from 'react-router-dom'

import { allUniveristiesByDestinationEndpoint } from '../../services/endPoints'
import api from '../../services/baseUrl'
import { useEffect, useState } from 'react'
import moment from 'moment'
import NoData from '../../components/layouts/noData'
import EditScores from '../myAccount/myProfile/components/testScores.tsx/editScores'
import AllCourcesList from './components/allCourcesList'
import CustomModal from '../../components/elements/modal'
import types from '../../redux/types'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/appState'
const Universities = () => {
    const dispatch = useDispatch()
    const modal = useSelector((state: AppState) => state.modalReducer)
    const { modal_type } = modal

    const [allUniversities, setAllUniversities] = useState([])


    const openAllCourcesListModal = (data: any) => {

        dispatch({ type: types.MODAL_OPEN, payload: { modal_type: types.layout.ALL_COURCES_LIST_MODAL, modal_data: { universityDetails: data } } })

    }
    const getAllUniveristiesByDestination = async (country: string) => {

        try {
            const { data } = await api.get(allUniveristiesByDestinationEndpoint(country))

            setAllUniversities(data.data)

        }
        catch {

        }

    }






    let destinationName = localStorage.getItem('destinationName');
    useEffect(() => {

        if (window.location.pathname.includes(':')) {
            localStorage.setItem('destinationName', window.location.pathname.split(':')[1]?.replace('%20', ' '))
        }
        if (destinationName) {

            getAllUniveristiesByDestination(destinationName)
        }


    }, [])

    console.log('desti', destinationName)

    return (
        <div>
            <div className="grid grid-cols-12 mb-10 gap-4">
                <div className="col-span-12 md:col-span-1 col-span-2" ></div>
                <div className="col-span-12 md:col-span-10 lg:col-span-8">

                    <form>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Search" required />

                        </div>
                    </form>

                </div>
                <div className="col-span-12  md:col-span-1 lg:col-span-2">
                    <div className="flex justify-between">
                        {/* <div className="flex items-center">
                            <p className="mr-3 text-2xl font-medium text-gray-900 dark:text-gray-300">PG</p>
                            <div>
                                <label className="relative inline-flex items-center  cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />

                                    <div className="w-40 h-[50px] p-2 border border-1 border-[var(--tail-shade-dark)] rounded-lg peer   dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:left-[70%] peer-checked:after:border-white after:content-[''] after:absolute after:top-1.5 after:left-[5px] after:bg-[var(--tail-shade-dark )] after:border-gray-300 after:border after:rounded-full after:bg-[var(--tail-shade-dark)] after:h-[40px] after:w-[40px] after:transition-all dark:border-gray-600 ]"></div>

                                </label>
                            </div>
                            <p className="ml-3 text-2xl font-medium text-gray-900 dark:text-gray-300">UG</p>
                        </div> */}
                        <div className='ml-auto'>

                            <button id="dropdownDefaultButton" data-dropdown-toggle="filter-dropdown" className="" type="button">
                                <img src={Images.filterIcon} alt="" className='w-20' />
                            </button>

                            <div id="filter-dropdown" className="z-10 p-[20px] hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <Link to='' className="block px-4 py-2 text-center text-black border-b border-b-1 border-b-[#ccc] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Computers</Link>
                                    </li>
                                    <li>
                                        <Link to='' className="block px-4 py-2 text-center text-black border-b border-b-1 border-b-[#ccc] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Engineering</Link>
                                    </li>
                                    <li>
                                        <Link to='' className="block px-4 py-2 text-center text-black border-b border-b-1 border-b-[#ccc] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Science</Link>
                                    </li>
                                    <li>
                                        <Link to='' className="block px-4 py-2 text-center text-black border-b border-b-1 border-b-[#ccc] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Management</Link>
                                    </li>
                                    <li>
                                        <Link to='' className="block px-4 py-2 text-center text-black border-b border-b-1 border-b-[#ccc] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {allUniversities?.length ? <><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    allUniversities.map((item: any, i: number) => {
                        const defaultCourse = item.courses.slice(0, 1)[0]

                        return <div key={i}>
                            <div className="flex justify-center -mb-[20%] lg:-mb-[15%]">
                                {item.logoSrc ? <img src={item.logoSrc} alt="university-logo" className="w-40 h-40" /> : <div className="w-40 h-40  bg-[--grey-shade-medium] rounded-full flex justify-center items-center" >
                                    <img src={Images.universityLogo} alt="university-logo" className="w-20 h-20" />
                                </div>}
                            </div>
                            <div className=" border-2 border-l-3 border-l-[var(--grey-shade-dark)] border-b-0 pt-[20%] lg:pt-[15%] rounded-t-lg">
                                <Link to='/destinations/country/university-details' onClick={() => {
                                    localStorage.setItem('universityId', item?._id)

                                }}>
                                    <div className="p-4">
                                        <h1 className="text-xl text-center font-bold">
                                            {item.name}
                                        </h1>
                                        <p className="text-lg text-center">
                                            {item.type}, {destinationName}
                                        </p>
                                        <div className="grid grid-cols-12 gap-2">
                                            <div className="flex items-center col-span-4 sm:col-span-6 lg:col-span-4 ">
                                                <img src={Images.rankingIcon} alt="" className='w-14' />
                                                <div>
                                                    <p className='text-xs font-semibold'>116</p>
                                                    <p className='text-xs'>QS Ranking</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center col-span-3  sm:col-span-3">
                                                <img src={Images.establishedYearIcon} alt="" className='w-14' />
                                                <div>
                                                    <p className='text-xs font-semibold'>{item.establishedYear}</p>

                                                </div>
                                            </div>
                                            <div className="flex items-center col-span-4 sm:col-span-12 lg:col-span-4" >
                                                <div className="w-10 h-10 flex justify-center items-center rounded-full border boder-2 border-[var(--beinge)] me-2">
                                                    <p className='text-xs font-semibold'>{item.acceptanceRate + ' %'}</p>
                                                </div>
                                                <div>

                                                    <p className='text-xs'>Acceptance Rate</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="border-t border-b border-t-1 border-b-1 border-t-[var(--tail-shade-dark)] border-b-[var(--tail-shade-dark)] py-2">
                                            <div className="grid grid-cols-12 items-center gap-2 ">
                                                <div className="col-span-3">
                                                    <img src={Images.computerProgram} alt="" />
                                                </div>
                                                <div className="col-span-9">
                                                    <div className="grid grid-cols-12 gap-2">
                                                        <div className="col-span-12">
                                                            <p className='text-sm font-semibold'>{defaultCourse?.name}</p>
                                                        </div>
                                                        <div className="col-span-6">
                                                            <div className="flex items-center">
                                                                <img src={Images.durationIcon} alt="" />
                                                                <p className='text-sm ml-2'>{defaultCourse?.degree}</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-6">
                                                            <div className="flex items-center">
                                                                <img src={Images.durationIcon} alt="" />
                                                                <p className='text-sm ml-2'>{defaultCourse?.duration}</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-12">
                                                            <div className="flex items-center">
                                                                <img src={Images.profficiencyIcon} alt="" />
                                                                <p className='text-sm ml-2'>{moment(defaultCourse?.applicationDeadline).format('DD/MM/YYYY')}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Link>


                            </div>
                            <div className='border-2 border-l-3 border-l-[var(--grey-shade-dark)] border-t-0 border-b-0 pb-4'>
                                <div className='bg-[var(--beinge)] p-2 rounded-md  mx-10 flex justify-between items-center'>
                                    <div className="text-medium text-white me-4">
                                        {item.courses.length} Cources Available
                                    </div>
                                    <button className="bg-white w-8 h-8 rounded-full p-2" onClick={() => {
                                        openAllCourcesListModal(item)
                                    }}>
                                        <svg className="w-4 h-4 m-auto text-[var(--tail-shade-dark)] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="w-full">
                                <Link to='/destinations/country/university-details' className="w-[100%] flex justify-center text-white bg-[var(--tail-shade-dark)] hover:bg-[var(--tail-shade-medium)] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-b-lg text-sm px-5 py-4 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply Now</Link>
                            </div>
                        </div>
                    })
                }

            </div></> : <div className='grid grid-cols-1'>
                <NoData img={Images.universityLogo} heading={'Data not available'} text={`All Universities present in ${destinationName} are shown here`} />
            </div>}

            {

                modal_type === types.layout.ALL_COURCES_LIST_MODAL && <CustomModal> <AllCourcesList /> </CustomModal>


            }
        </div>
    )
}

export default Universities