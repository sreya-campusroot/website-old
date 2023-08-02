import React from 'react'
import Images from '../../../assets'

const TestimonialCard = (item: any) => {

    return (
        <>
            <div className='relative bg-white min-w-[100%]'>
                <div className='bg-tail flex flex-col-reverse full-width px-[20px] py-[30px] m-[50px]'>
                    <div>
                        <div className='flex flex-col items-center w-100'>
                            <h1 className='text-center  capitalize text-4xl text-white font-bold mt-4'>Divya</h1>
                            <p className='text-center  text-xs text-white pt-2'>student at souther california</p>
                        </div>
                        <div className='pt-4'>
                            <p className='text-lg text-white pt-2'>“Myself, I am Susan i had joined in this
                                consultant when i want to apply for USA for
                                my higher studies, i came across Campus root
                                and joined immediately. I am very thankful for
                                taking my entire process in smoothly.”</p>
                        </div>
                        <div>
                            <p className='text-sm text-white pt-2 mb-4 font-semibold'>Got offers from University of Liverpool, Southern california</p>
                        </div>
                    </div>
                    <div className=' mx-auto sm:absolute xs:invisible sm:-left-5 sm:-top-10  rounded-full border-[20px] border-white bg-black w-40 h-40'>
                        <img src={Images.person} className='w-[100%] h-[100%] rounded-full object-cover' />
                    </div>
                </div>
            </div>
            {/* <div className='relative bg-white min-w-[100%]]'>
                <div className='bg-tail flex flex-col-reverse full-width px-[20px] py-[30px] m-[50px]'>
                    <div>
                        <div className='flex flex-col items-center w-100'>
                            <h1 className='text-center  capitalize text-4xl text-white font-bold mt-4'>{item.name}</h1>
                            <p className='text-center  text-xs text-white pt-2'>{item.at}</p>
                        </div>
                        <div className='pt-4'>
                            <p className='text-lg text-white pt-2'>{item.comment}</p>
                        </div>
                        <div>
                            <p className='text-sm text-white pt-2 mb-4 font-semibold'>{item.text}</p>
                        </div>
                    </div>
                    <div className=' mx-auto sm:absolute xs:invisible sm:-left-5 sm:-top-10  rounded-full border-[20px] border-white bg-black w-40 h-40'>
                        <img src={Images.person} className='w-[100%] h-[100%] rounded-full object-cover' />
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default TestimonialCard