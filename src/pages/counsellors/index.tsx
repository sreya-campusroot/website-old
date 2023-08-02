import React, { useEffect } from 'react'
import Images from '../../assets'
import { CustomButton } from '../../components/elements/actions'
import { SectionHeading } from '../../assets/texts'
import { counsellorsEndpoint } from '../../services/endPoints'
import api from '../../services/baseUrl'
import types from '../../redux/types'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/appState'
import CounsellorTestimonials from './compoenents/testimonials'

const Counsellors = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const dispatch = useDispatch()

    const counsellors = useSelector((state: AppState) => state.counsellorsReducer)

    const chunkSize = 3; // Number of items to show in each slide
    const totalSlides = Math.ceil(items.length / chunkSize);


    const chunkedItems = Array.from({ length: totalSlides }, (_, index) =>
        items.slice(index * chunkSize, (index + 1) * chunkSize)
    );

    const getCounsellors = async () => {
        try {
            const { data } = await api.get(counsellorsEndpoint())

            if (data.success) {
                // console.log('success', data.success);


                dispatch({ type: types.COUNCELLORS_SUCCESS, payload: data.data })
            }
        }
        catch {

        }

    }

    useEffect(() => {
        getCounsellors()


    }, [])
    return (
        <div className='container mx-auto'>
            <div className=" counsellor-banner w-full mx-auto grid grid-cols-12  gap-4 p-10 mb-10 h-[500px]">
                <div className=" col-span-12  md:col-span-12 lg:col-span-6 xl:col-span-6 my-auto p-10">
                    <div className="my-auto">
                        <div className="text-3xl text-center leading-relaxed  font-bold my-10 p-10">
                            Connect with our top experts for
                            personalized support for free
                        </div>
                        <div className="mx-auto">
                            <CustomButton handleSubmit={() => { }}>Start your journey for free</CustomButton>

                        </div>
                    </div>
                </div>

            </div>
            <h1 className='text-center text-3xl font-bold mb-20'>Meet Our Expert Counsellors</h1>
            <div className="flex justify-center items-center flex-wrap gap-4 ">
                {counsellors?.data?.map((item: any, i: number) => {
                    return <div key={i}>
                        <img src={Images.counsellorPic} alt='counsellor-dp' />
                        <div>
                            <div className="text-center text-2xl font-bold p-2">
                                {item?.name}
                            </div>
                            <div className="flex justify-center items-center pb-2">
                                <img src={Images.starIcon} alt="star-icon" />
                                <p>3.5</p>

                            </div>
                            <p className='text-center'>{item?.numberOfStudentsAssisted} Students Counselloed</p>
                        </div>
                    </div>
                })}

            </div>

            <div className="my-10">

                <CustomButton handleSubmit={() => { }}>Talk to Expert</CustomButton>
            </div>
            <div className="my-20">

                <SectionHeading>
                    How it works ?
                </SectionHeading>
                <div className="grid grid-cols-12">
                    <div className="col-span-1">

                    </div>
                    <div className="col-span-10">
                        <div className="grid grid-cols-4">
                            <div className="flex flex-col jutify-center items-center">
                                <div className="p-8 rounded-full w-40 h-40 bg-[var(--tail-shade-dark)] flex  jutify-center items-center">
                                    <img src={Images.sendReqIcon} alt="" className='w-full ' />
                                </div>
                                <p className="text-xl text-center font-semibold pt-5">Send Request</p>
                            </div>
                            <div className="flex  flex-col jutify-center items-center">
                                <div className="p-8 rounded-full w-40 h-40 bg-[var(--tail-shade-dark)] flex  jutify-center items-center">
                                    <img src={Images.notifiedIcon} alt="" className='w-full ' />
                                </div>
                                <p className="text-xl text-center font-semibold pt-5">Get Notified</p>
                            </div>
                            <div className="flex flex-col jutify-center items-center">
                                <div className="p-8 rounded-full w-40 h-40 bg-[var(--tail-shade-dark)] flex  jutify-center items-center">
                                    <img src={Images.bookSlotIcon} alt="" className='w-full ' />
                                </div>
                                <p className="text-xl text-center font-semibold pt-5">Book Slot</p>
                            </div>
                            <div className="flex flex-col jutify-center items-center">
                                <div className="p-8 rounded-full w-40 h-40 bg-[var(--tail-shade-dark)] flex  jutify-center items-center">
                                    <img src={Images.connectIcon} alt="" className='w-full ' />
                                </div>
                                <p className="text-xl text-center font-semibold pt-5">Connect with Counsellor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">

                    </div>

                </div>
            </div>
            <CounsellorTestimonials />
        </div >
    )
}

export default Counsellors