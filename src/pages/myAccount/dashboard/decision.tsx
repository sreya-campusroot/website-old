import React, { useEffect, useState } from 'react'
import { SectionHeading } from '../../../assets/texts'
import Images from '../../../assets'
import { Dropdown } from 'flowbite-react'

import { EditIcon } from '../../../assets/svgIcons'
import { CustomFlowbiteTheme } from "flowbite-react";
import { useSelector } from 'react-redux'
import { AppState } from '../../../redux/appState'
import { decisionItemProps } from '../../interfaces'

const dropDownTheme: CustomFlowbiteTheme['dropdown'] = {
    inlineWrapper: "flex items-center text-black text-[16px] font-semibold focus:outline-0 focus:bg-transparent p-4"

};

const Decision = () => {
    const dashboard = useSelector((state: AppState) => state.dashboardReducer)
    const [filterBy, setFilterBy] = useState('admitted')
    const [decisions, setDecisions] = useState([])
    const admitted: any = dashboard?.data?.activity?.admitReceived
    const rejected: any = dashboard?.data?.activity?.rejected
    const all: any = (admitted?.length && rejected?.length) && admitted.concat(rejected)

    console.log('admitted', admitted);
    console.log('rejected', rejected);
    // console.log('all', all);

    useEffect(() => {
        setDecisions(admitted)
    }, [])
    useEffect(() => {
        if (filterBy === 'rejected') {
            setDecisions(rejected)
        }
        else {
            setDecisions(admitted)
        }
    }, [filterBy])

    return (
        <>
            <div className="grid grid-cols-12 relative">




                <div className='absolute top-0 -right-10 filter-icon-dropdown'>
                    <Dropdown
                        inline
                        className='text-[var(--tail-shade-dark)] p-4 focus:outline-0 '

                        label={<>
                            <img src={Images.filterIcon} alt="filter" />





                        </>}

                        theme={dropDownTheme}

                    >

                        {/* <Dropdown.Item className='w-full p-0 m-0 hover:bg-[var(--grey-shade-light)]'>
                            <button className="p-2  w-full flex justify-center  border-b border-b-1 border-b-[#ccc] text-gray-500 dark:text-gray-400 hover:text-[var(--tail-shade-dark)] dark:hover:text-blue-500" onClick={() => {
                                setFilterBy('All')
                            }}>
                                <p className="p-2"> All</p>
                            </button>
                        </Dropdown.Item> */}
                        <Dropdown.Item className='w-full p-0 m-0 hover:bg-[var(--grey-shade-light)]'>
                            <button className="p-2  w-full flex justify-center  border-b border-b-1 border-b-[#ccc] text-gray-500 dark:text-gray-400 hover:text-[var(--tail-shade-dark)] dark:hover:text-blue-500" onClick={() => {
                                setFilterBy('admitted')
                            }}>
                                <p className="p-2"> Admitted</p>
                            </button>
                        </Dropdown.Item>
                        <Dropdown.Item className='w-full p-0 m-0 hover:bg-[var(--grey-shade-light)]'>
                            <button className="p-2  w-full flex justify-center  border-b border-b-1 border-b-[#ccc] text-gray-500 dark:text-gray-400 hover:text-[var(--tail-shade-dark)] dark:hover:text-blue-500" onClick={() => {
                                setFilterBy('rejected')
                            }}>
                                <p className="p-2">Rejected</p>
                            </button>
                        </Dropdown.Item>


                    </Dropdown>
                </div>
                <div className="col-span-12">
                    <SectionHeading>{filterBy === 'admitted' ? "Admitted Applications" : 'Rejected Applications'}</SectionHeading>
                    {decisions?.map((item: decisionItemProps) => {
                        return <div className="grid grid-cols-12 ">


                            <div className="col-span-12 md:col-span-10 xl:col-span-10">
                                <div className="relative grid grid-cols-12 gap-4 my-4 border-b border-b-2 border-b-[#aaa8a8] p-4 rounded-lg">
                                    <div className="col-span-12">
                                        <div className="flex flex-col md:flex-row gap-4">

                                            <img className="w-40 h-40  rounded-lg object-contain" src={item?.course?.schoolDetails?.schoolLogoSrc} alt="student-dp"></img>

                                            <div className="col-span-12 sm:col-span-9 lg:col-span-7 flex flex-col justify-center">
                                                <p className="text-xl text-black font-semibold">{item?.course?.name}</p>
                                                <p className="text-lg text-black py-2">{item?.course?.schoolDetails?.schoolName}</p>
                                                <p className="text-sm pb-2">{item?.course?.schoolDetails?.DepartmentName}</p>
                                                <p className="text-sm ">{item?.university?.name}</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-span-12 mt-0 mx-auto">
                                        <div className="mx-auto">
                                            <button className='py-2 px-4 bg-[var(--green-shade-light)] text-[var(--green-shade-dark)] rounded-lg min-w-[200px]'>
                                                Decision.pdf
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="col-span-12 md:col-span-2 xl:col-span-4"></div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Decision