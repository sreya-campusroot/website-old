import React from 'react'
import { SectionHeading } from '../../../assets/texts'
import Images from '../../../assets'
import { useSelector } from 'react-redux'
import { AppState } from '../../../redux/appState'
import moment from 'moment'


interface ApplicationItemProps {
    application: {
        documents: {
            otherDocs: []
        },
        _id: "",
        university: {
            _id: "",
            name: "",
            code: 0
        },
        course: {
            schoolDetails: {
                schoolName: "",
                DepartmentName: "",
                schoolLogoSrc: ""
            },
            _id: "",
            name: ""
        },
        referees: [],
        createdAt: "",
        updatedAt: "",
        __v: 0
    },
    status: "",
    _id: ""
}
const Applied = () => {
    const dashboard = useSelector((state: AppState) => state.dashboardReducer)

    const applied = dashboard?.data?.activity?.applied


    return (
        <>
            <div className="grid grid-cols-12">

                <div className="col-span-12">
                    {applied?.map(((item: ApplicationItemProps) => {
                        return <div className="grid grid-cols-12 ">

                            <div className="col-span-12 md:col-span-10 xl:col-span-8">
                                <div className="relative grid grid-cols-12 gap-4 my-4 border-b border-b-2 border-b-[#aaa8a8] p-4 rounded-lg">
                                    <div className="col-span-12">
                                        <div className="flex flex-col md:flex-row gap-4">

                                            <img className="w-40 h-40  rounded-lg object-contain" src={item?.application?.course?.schoolDetails?.schoolLogoSrc} alt="student-dp"></img>

                                            <div className="col-span-12 sm:col-span-9 lg:col-span-7 flex flex-col justify-center">
                                                <p className="text-xl text-black font-semibold">{item?.application?.course?.name}</p>
                                                <p className="text-lg text-black py-2">{item?.application?.course?.schoolDetails?.schoolName}</p>
                                                <p className="text-sm pb-2">{item?.application?.course?.schoolDetails?.DepartmentName}</p>
                                                <p className="text-sm ">{item?.application?.university?.name}</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-span-12 mt-10">
                                        {/* <p className="text-sm text-[var(--grey-shade-dark)]">Application Status</p> */}
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-blue-600 h-2.5  rounded-full relative" style={{ width: '45%' }}>
                                                <div className='absolute -top-12 -right-5 w-10 h-10 bg-[var(--tail-shade-dark)] rounded-full flex justify-center align-center'>
                                                    <p className="text-xs text-white m-auto">
                                                        45%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="absolute top-5 right-5 text-xs text-[var(--grey-shade-dark)]">Applied on {moment(item?.application?.createdAt).format('DD/MM/YYYY')}</p>
                                </div>

                            </div>
                            <div className="col-span-12 md:col-span-2 xl:col-span-4"></div>
                        </div>
                    }))}
                </div>
            </div>
        </>
    )
}

export default Applied