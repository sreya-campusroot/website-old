import React from 'react'
import TestimonialCard from '../components/testimonialCard'
import CustomCarousal from '../../../components/elements/carousal'
import { Carousel, CustomFlowbiteTheme } from 'flowbite-react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import DragableCarousal from '../../../components/elements/dragableCarousal';
import Images from '../../../assets';
import companyTestimonials from '../../../staticData/companyTestimonials';
const Testimonials = () => {






    const getTestimonals = () => {
        return companyTestimonials.map((item) => {

            return <div className='relative bg-white min-w-[100%]]'>
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
            </div>
        })
    }

    const testimonals = getTestimonals()

    return (
        <div className='container mx-auto'>
            <div className='sm:col-span-8 flex flex-col justify-center items-center lg:px-20 xl:px-40'>
                <p className='text-3xl font-semibold text-center'>
                    Testimonials
                </p>
                <p className='text-3xl font-semibold py-4 text-center'>See what out students say about Campus root</p>

            </div>


            <DragableCarousal items={testimonals} />

        </div>
    )
}

export default Testimonials