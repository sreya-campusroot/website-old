import React from 'react'
import Images from '../../../assets'

const Overview = () => {
    return (
        <div>
            <div className="grid grid-cols-1">

                <div className="grid grid-cols-12 gap-4 my-4 shadow-lg p-4 rounded-lg">
                    <div className="col-span-12 lg:col-span-5">
                        <div className="flex flex-col sm:flex-row gap-4">

                            <img className="w-20 h-20  rounded-full object-cover" src={Images.counsellorPic} alt="Rounded avatar"></img>

                            <div className="">
                                <p className="text-xl text-black font-semibold">Mathew</p>
                                <p className="text-lg text-black py-2">10 Years experience</p>
                                <p className="text-sm text-[var(--grey-shade-dark)]">12000+ students got counselled</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 my-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">

                            <div className="">
                                <button className='rounded-md w-full p-2 border-2 border-[var(--tail-shade-dark)]' onClick={() => {

                                }}>aug 1st, 11 am</button>
                            </div>
                            <div className="">
                                <button className='rounded-md w-full p-2 border-2  border-transparent bg-[var(--tail-shade-dark)] text-white' onClick={() => {

                                }}>Cancel Slot</button>
                            </div>
                            <div className="">
                                <button className='rounded-md w-full p-2  border-2 border-transparent bg-[var(--tail-shade-dark)] text-white' onClick={() => {

                                }}>Join Now</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Overview