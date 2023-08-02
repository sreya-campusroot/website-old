import React from 'react'
import Images from '../../../assets'
import { SectionHeading } from '../../../assets/texts'

const StudentsPlaced = () => {
    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <SectionHeading>Student got placed by Mathew</SectionHeading>
                </div>
                <div className="col-span-12">
                    {[1, 2, 3, 4, 5, 6].map((item => {
                        return <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-1 xl:col-span-2">

                            </div>
                            <div className="col-span-12 md:col-span-10 xl:col-span-8">
                                <div className="grid grid-cols-12 gap-4 my-4 border-b border-b-2 border-b-[#aaa8a8] p-4 rounded-lg">
                                    <div className="col-span-12  sm:col-span-3 lg:col-span-2">
                                        <img className="w-20 h-20  rounded-full object-cover" src={Images.person} alt="student-dp"></img>
                                    </div>
                                    <div className="col-span-12 sm:col-span-9 lg:col-span-7 flex flex-col justify-center">
                                        <p className="text-xl text-black font-semibold">Suresh</p>
                                        <p className="text-lg text-black py-2">United states of Southern California</p>
                                        <p className="text-sm text-[var(--grey-shade-dark)]">BS. Computer Science</p>
                                    </div>


                                    <div className="col-span-12 sm:col-span-12 lg:col-span-3 flex flex-col justify-center ">
                                        <button className='rounded-md w-full p-2 bg-[var(--tail-shade-dark)] text-white' onClick={() => {

                                        }}>View Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-1 xl:col-span-2"></div>
                        </div>
                    }))}
                </div>
            </div>
        </>
    )
}

export default StudentsPlaced