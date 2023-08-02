import React, { FC } from 'react'
import Images from '../../../assets'

const Banner: FC<any> = ({ formRef }) => {
    return (
        <div className='home-banner'>
            <div className="w-full h-full flex justify-center">
                <h1 className='absolute z-1 mt-[20%] w-[50%] text-2xl text-center leading-relaxed md:w-[40%]   md:text-4xl md:leading-relaxed text-[var(--tail-shade-dark)]  font-bold'>Get the Best Universities which fits you</h1>
            </div>

            <div className=" hidden md:grid absolute bottom-0 grid grid-cols-12 gap-4 z-1 justify-end items-end">
                <div className="col-span-3">
                    <img src={Images.bannerImg1} alt="" className='w-full rounded-t-2xl h-96 object-cover' />
                </div>
                <div className="col-span-2">
                    <img src={Images.bannerImg2} alt="" className='w-full rounded-t-2xl h-64 object-cover' />
                </div>
                <div className="col-span-2">
                    <button className='mx-auto block' onClick={() => {
                        if (formRef.current) {
                            formRef.current.scrollIntoView({ behavior: "smooth" });
                        }

                    }}
                    >
                        <div className="rounded-full w-40 h-40 flex items-center border-2 border-dashed border-white bg-[var(--tail-shade-dark)] mx-auto mb-10">
                            <img src={Images.arrowDown} alt="" className='m-auto' />

                        </div>
                    </button>
                </div>
                <div className="col-span-2">
                    <img src={Images.bannerImg3} alt="" className='w-full rounded-t-2xl h-64 object-cover' />
                </div>
                <div className="col-span-3">
                    <img src={Images.bannerImg4} alt="" className='w-full rounded-t-2xl h-96 object-cover' />
                </div>

            </div>
        </div>
    )
}

export default Banner