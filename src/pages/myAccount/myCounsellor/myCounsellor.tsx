import React from 'react'
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import Images from '../../../assets';
import { SectionHeading } from '../../../assets/texts';
import { Link } from 'react-router-dom';

const MyCounsellor = () => {
    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-1 xl:col-span-2">

                </div>
                <div className="col-span-12 md:col-span-10 xl:col-span-8">
                    <div className="grid grid-cols-12 gap-4 my-4 shadow-lg p-4 rounded-lg">
                        <div className="col-span-12  sm:col-span-3 lg:col-span-2">
                            <img className="w-20 h-20  rounded-full object-cover" src={Images.counsellorPic} alt="Rounded avatar"></img>
                        </div>
                        <div className="col-span-12 sm:col-span-9 lg:col-span-7 flex flex-col justify-center">
                            <p className="text-xl text-black font-semibold">Mathew</p>
                            <p className="text-lg text-black py-2">Slot booked for 1st aug </p>
                            <p className="text-sm text-[var(--grey-shade-dark)]">11 am to 11:30 am</p>
                        </div>


                        <div className="col-span-12 sm:col-span-12 lg:col-span-3 flex flex-col justify-center ">
                            <button className='rounded-md w-full p-2 bg-[var(--tail-shade-dark)] text-white' onClick={() => {

                            }}>aug 1st, 11 am</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-1 xl:col-span-2"></div>
                <div className="col-span-12">
                    <SectionHeading>About</SectionHeading>
                    <p className='ms-10 text-lg'>
                        I am a qualified individual who uses counseling methods to help students manage and get placed in abroad universities by providing a required knowledge about the universities and documents.

                    </p>
                </div>
                <div className="col-span-12">
                    <div className="flex justify-between items-center">
                        <SectionHeading>Students who got Placed by Mathew</SectionHeading>
                        <Link to='/my-account/my-counsellor/students-placed'>View all</Link>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-1"></div>
                        <div className="col-span-12 lg:col-span-10">
                            <div className="grid grid-cols-12 justify-center items-center gap-4">
                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4">
                                    <div className="flex flex-col justify-center items-center px-20 sm:px-0 xl:px-10 2xl:px-20">
                                        <img src={Images.person} alt="studnet-dp" className='w-20 h-20 lg:w-40 lg:h-40 object-cover rounded-lg' />
                                        <p className="text-center text-md font-semibold py-2">Ramya</p>
                                        <p className="text-center text-sm text-sm text-[#838282]">United states of
                                            Southern California</p>

                                    </div>
                                </div>

                                <div className="col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-4">
                                    <div className="flex flex-col justify-center items-center px-20 sm:px-0 xl:px-10 2xl:px-20">
                                        <img src={Images.person} alt="studnet-dp" className='w-20 h-20 lg:w-40 lg:h-40 object-cover rounded-lg' />
                                        <p className="text-center text-md font-semibold py-2">Ramya</p>
                                        <p className="text-center text-sm text-sm text-[#838282]">United states of
                                            Southern California</p>

                                    </div>
                                </div>
                                <div className="col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-4">
                                    <div className="flex flex-col justify-center items-center px-20 sm:px-0 xl:px-10 2xl:px-20">
                                        <img src={Images.person} alt="studnet-dp" className='w-20 h-20 lg:w-40 lg:h-40 object-cover rounded-lg' />
                                        <p className="text-center text-md font-semibold py-2">Ramya</p>
                                        <p className="text-center text-sm text-sm text-[#838282]">United states of
                                            Southern California</p>

                                    </div>
                                </div>



                            </div>
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default MyCounsellor