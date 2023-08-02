import { Tooltip } from 'flowbite-react'
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const MyAccount = () => {
    const navigate = useNavigate()
    return (
        <div className='container mx-auto min-h-[75vh]'>
            <div className="flex min-h-[100%] gap-4">
                <div className="my-account-side-menu-wrapper w-40 h-full ">
                    <div className="grid grid-cols-1 gap-4 w-full">
                        <Tooltip
                            content="My Profile"
                            placement="right"
                            className='flex justify-center'
                        >

                            <Link to='/my-account/my-profile'>
                                <div className=" w-20 h-20 bg-white rounded-lg flex justify-center items-center mx-auto">
                                    <svg className="w-[17px] h-[17px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>
                            </Link>

                        </Tooltip>
                        <Tooltip
                            content="Dashboard"
                            placement="right"
                        >

                            <Link to='/my-account/dashboard'>
                                <div className=" w-20 h-20 bg-white rounded-lg flex justify-center items-center mx-auto">
                                    <svg className="w-[17px] h-[17px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.143 1H1.857A.857.857 0 0 0 1 1.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 6.143V1.857A.857.857 0 0 0 6.143 1Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 17 6.143V1.857A.857.857 0 0 0 16.143 1Zm-10 10H1.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 16.143v-4.286A.857.857 0 0 0 6.143 11Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" />
                                    </svg>
                                </div>
                            </Link>

                        </Tooltip>
                        <Tooltip
                            content="My Counsellor"
                            placement="right"
                        >
                            <Link to='/my-account/my-counsellor'>
                                <div className=" w-20 h-20 bg-white rounded-lg flex justify-center items-center mx-auto">
                                    <svg className="w-[17px] h-[17px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z" />
                                    </svg>
                                </div>
                            </Link>

                        </Tooltip>
                        <Tooltip
                            content="Cart"
                            placement="right"
                        >

                            <Link to='/my-account/cart'>
                                <div className=" w-20 h-20 bg-white rounded-lg flex justify-center items-center mx-auto">
                                    <svg className="w-[17px] h-[17px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                                    </svg>
                                </div>
                            </Link>

                        </Tooltip>
                        <Tooltip
                            content="Documents"
                            placement="right"
                        >

                            <Link to='/my-account/documents'>
                                <div className=" w-20 h-20 bg-white rounded-lg flex justify-center items-center mx-auto">
                                    <svg className="w-[17px] h-[17px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5a1 1 0 0 0-1 1v12a.969.969 0 0 0 .933 1h8.1a1 1 0 0 0 1-1.033M10 1v4a1 1 0 0 1-1 1H5m10-4v12a.97.97 0 0 1-.933 1H5.933A.97.97 0 0 1 5 14V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 9.828 1h4.239A.97.97 0 0 1 15 2Z" />
                                    </svg>
                                </div>
                            </Link>

                        </Tooltip>
                        <Tooltip
                            content="Settings"
                            placement="right"
                        >

                            <Link to='/my-account/settings'>
                                <div className=" w-20 h-20 bg-white rounded-lg flex justify-center items-center mx-auto">
                                    <svg className="w-[17px] h-[17px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z" />
                                            <path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                        </g>
                                    </svg>
                                </div>
                            </Link>

                        </Tooltip>

                        <div className="mt-20 mb-10">
                            <Tooltip
                                content="Log Out"
                                placement="right"
                            >


                                <button className=" w-20 h-20 bg-white rounded-lg flex justify-center items-center mx-auto"
                                    onClick={() => {
                                        localStorage.clear()
                                        navigate('/')
                                    }}
                                >
                                    <svg className="w-[17px] h-[17px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                                    </svg>
                                </button>


                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className='w-full rounded-lg  gap-4 p-10'>
                    <Outlet />

                </div>
            </div>

        </div>
    )
}

export default MyAccount