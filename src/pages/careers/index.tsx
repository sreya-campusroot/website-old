import React, { useEffect, useState } from 'react'
import FilterCourses from './components/filterCourses'
import CourseCard from './components/courseCard'
import SearchInput from '../../components/elements/searchInput'
import api from '../../services/baseUrl'
import { allCoursesEndpoint } from '../../services/endPoints'
import { courseItemProps } from '../../interfaces'




const Careers = () => {
    const [allCourses, setAllCourses] = useState([])
    const getAllCourses = async () => {
        try {
            const { data } = await api.get(allCoursesEndpoint())

            setAllCourses(data.data)

        }
        catch {

        }

    }
    useEffect(() => {
        getAllCourses()
    }, [])
    return (
        <div className='container mx-auto '>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 mb-10">

                    <div className="grid grid-cols-12">
                        <div className="col-span-12 sm:col-span-2 ">

                        </div>
                        <div className="col-span-12 sm:col-span-8 ">
                            <SearchInput />
                        </div>
                        <div className="col-span-12 sm:col-span-2 ">

                        </div>
                    </div>

                </div>
                <div className="col-span-12 md:col-span-4  xl:col-span-3">
                    <FilterCourses />
                </div>
                <div className="col-span-12 md:col-span-8 xl:col-span-9">
                    <div className="grid grid-cols-1 xl:grid-cols-2  gap-4">
                        {allCourses.map((item: courseItemProps) => {
                            return <CourseCard item={item} />
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Careers