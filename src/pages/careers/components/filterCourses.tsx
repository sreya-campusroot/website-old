import React from 'react'
import { Accordion, CustomFlowbiteTheme, Dropdown } from 'flowbite-react'

const FilterCourses = () => {

    const dropDownTheme: CustomFlowbiteTheme['dropdown'] = {
        inlineWrapper: "flex items-center text-black text-[16px]"

    };


    const countries = [
        {
            label: 'All'
        },
        {
            label: 'United States'
        },
        {
            label: 'United Kingdom'
        },
        {
            label: 'Australia'
        },
        {
            label: 'Canada'
        },
        {
            label: 'Germany'
        },
        {
            label: 'Ireland'
        },
    ]

    const courses = [
        {
            label: 'All'
        },
        {
            label: 'Computers'
        },
        {
            label: 'Engineering'
        },
        {
            label: 'Management'
        },
        {
            label: 'Science'
        },
        {
            label: 'Finance'
        },
        {
            label: 'Law'
        },
        {
            label: 'Architecture'
        },
    ]

    const universityTypes = [
        {
            label: 'All'
        },
        {
            label: 'Private'
        },
        {
            label: 'Public'
        },
    ]
    return (
        <div className='bg-[var(--beinge-shade-light)] p-4 rounded-lg'>
            <p className='text-xl font-semibold'>Filter By</p>




            <div>

                <Accordion className='p-0 bg-[var(--white)] focus:ring-transparent mt-4'>
                    <Accordion.Panel>
                        <Accordion.Title className='p-2 focus:ring-transparent'>
                            Countries
                        </Accordion.Title>
                        <Accordion.Content>

                            {countries.map((item) => {
                                return <div className="flex items-center mb-4">
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-checkbox" className="ml-2 text-sm text-gray-900 dark:text-gray-300">{item.label}</label>
                                </div>
                            })}


                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className='p-2 focus:ring-transparent'>
                            Courses
                        </Accordion.Title>
                        <Accordion.Content>
                            {courses.map((item) => {
                                return <div className="flex items-center mb-4">
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-checkbox" className="ml-2 text-sm text-gray-900 dark:text-gray-300">{item.label}</label>
                                </div>
                            })}

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className='p-2 focus:ring-transparent'>
                            Tuition Fee
                        </Accordion.Title>
                        <Accordion.Content>
                            <div>
                                <div>

                                    <input type="range" id="volume" name="volume"
                                        min="0" max="11" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                                    {/* <label htmlFor="volume">Volume</label> */}
                                </div>
                                <div className="flex justify-between">
                                    <p>6L</p>
                                    <p>60L</p>
                                </div>
                                <p className="text-center text-xs">per year</p>

                            </div>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className='p-2 focus:ring-transparent'>
                            University Type
                        </Accordion.Title>
                        <Accordion.Content>
                            {universityTypes.map((item) => {
                                return <div className="flex items-center mb-4">
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-checkbox" className="ml-2 text-sm text-gray-900 dark:text-gray-300">{item.label}</label>
                                </div>
                            })}
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>

            </div>
        </div>
    )
}

export default FilterCourses