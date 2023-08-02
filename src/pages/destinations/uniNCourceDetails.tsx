import React, { FC, useEffect, useRef, useState } from 'react'
import { SectionHeading } from '../../assets/texts'
import Images from '../../assets'

import { CustomButton } from '../../components/elements/actions';
import { useSwipeable } from 'react-swipeable';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/appState';
import api from '../../services/baseUrl';
import { addToShortListEndPoint, counsellorsEndpoint, singleCourceEndpoint, singleUniversityEndpoint } from '../../services/endPoints';
import types from '../../redux/types';
import moment from 'moment';
import { ToggleSwitch } from 'flowbite-react';
import NoData from '../../components/layouts/noData';
import { getHeaders, addToShortList } from '../../services';
import TopToast from '../../components/elements/toasts';
const UniNCourceDetails = () => {

    const dispatch = useDispatch()
    const courseDetailsRef = useRef<HTMLElement>(null)
    const counsellors = useSelector((state: AppState) => state.counsellorsReducer)

    const [university, setUniversity] = useState<any>({})
    const [courseDetails, setCourseDetails] = useState<any>({})
    const [courses, setCourses] = useState([])
    const [filteredCourses, setfilteredCourses] = useState([])
    const [filterBy, setFilterBy] = useState<any>(null)
    const [checkedFilter, setCheckedFilter] = useState('')
    const docsRequired = [
        {
            value: "Online application",
        },
        {
            value: "Statements of purpose ",
        },
        {
            value: "English language proficiency ",
        },
        {
            value: "Resume/ CV",
        },
        {
            value: "Personal statement",
        },
        {
            value: "Application fee",
        },
    ];
    const containerRef = useRef<HTMLDivElement>(null);
    const itemWidth = 30; // Width percentage of each counsellor item



    const swipable = useSwipeable({
        onSwipedLeft: () => {
            console.log('swiped left');
            const container = containerRef.current;
            if (container) {
                container.scrollLeft += container.offsetWidth * (itemWidth / 100);
            }

            // Handle the swipe left event to scroll right (show next counsellor)
            // Modify the state or logic to show the next set of counsellors
        },
        onSwipedRight: () => {
            console.log('swiped right');
            const container = containerRef.current;
            if (container) {
                container.scrollLeft -= container.offsetWidth * (itemWidth / 100);
            }
            // Handle the swipe right event to scroll left (show previous counsellor)
            // Modify the state or logic to show the previous set of counsellors
        },
    })
    const universityId = localStorage.getItem('universityId')
    const getSingleUniversity = async (universityId: string) => {
        try {
            const { data } = await api.get(singleUniversityEndpoint(universityId))

            setUniversity(data.data)
            dispatch({ type: types.SINGLE_UNIVERSITY_SUCCESS, payload: data.data })
            setCourses(data?.data?.courses)

        }
        catch {

        }

    }

    const getSingleCource = async (courceId: string) => {
        try {
            const { data } = await api.get(singleCourceEndpoint(courceId))

            if (data.success) {
                // localStorage.setItem('courseId', data.data._id)
                setCourseDetails(data.data)

            }

        }
        catch {

        }


    }
    const addToShortList = async (universityId: string, courseId: string) => {
        console.log('hi add to short list');

        const headers = getHeaders()

        try {
            await api.post(addToShortListEndPoint(), {
                universityId: universityId,
                courseId: courseId
            }, headers)

            dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { success: true, heading: ' Shortlisted ', text: 'you can view your shortlisted courses in dashboard' } })

        }
        catch {
            dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { error: true, heading: ' Already Shortlisted ', text: 'you can view your shortlisted courses in dashboard' } })
        }

    }

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

        if (universityId) {

            getSingleUniversity(universityId)

        }
    }, [])


    useEffect(() => {


        if (university?.courses?.length) {
            const courseId = localStorage.getItem('courseId')
            if (courseId) {
                getSingleCource(courseId)
            } else {
                getSingleCource(university?.courses[0]?._id)
            }
        }
    }, [university])

    console.log('course', courseDetails);



    useEffect(() => {
        if (filterBy) {

            const filterByDegree = courses.filter((item: any) => {
                return item?.degree == filterBy
            })
            setfilteredCourses(filterByDegree)
        } else {


            setCourses(university?.courses)
            setfilteredCourses([])
        }

    }, [filterBy])

    interface CourseCardProps {
        item: any
    }
    const CourseCard: FC<CourseCardProps> = ({ item }) => {
        return <div>
            <div className="bg-white rounded-lg p-4 flex justify-between border border-1 border-[var(--tail-shade-dark)]">
                <p>
                    {item?.name}
                </p>
                <button onClick={() => {
                    getSingleCource(item._id)

                    if (courseDetailsRef.current) {
                        courseDetailsRef.current.scrollIntoView({ behavior: "smooth" });
                    }

                }}>View Details</button>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
                <div>
                    <p className='my-2 text-lg text-center '>{item?.degree}</p>
                    <p className='my-2 text-lg text-center text-[var(--grey-shade-double-dark)]  font-semibold'>Mode Of Degree</p>
                </div>
                <div>
                    <p className='my-2 text-lg text-center '>{item?.duration}</p>
                    <p className='my-2 text-lg text-center text-[var(--grey-shade-double-dark)] font-semibold'>Duration</p>
                </div>
                <div>
                    <p className='my-2 text-lg text-center '>{moment(item?.applicationDeadline).format('DD/MM/YYYY')}</p>
                    <p className='my-2 text-lg text-center text-[var(--grey-shade-double-dark)]  font-semibold'>Application Deadline</p>
                </div>

                <div>
                    <p className='my-2 text-lg text-center '>{item?.cost[0]?.lowerLimit + '-' + item?.cost[0]?.upperLimit}</p>
                    <p className='my-2 text-lg text-center text-[var(--grey-shade-double-dark)]  font-semibold'>Fees Estimation</p>
                </div>
            </div>

        </div>
    }
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-4 bg-[var(--beinge-shade-light)] p-4 rounded-lg ">
                    <div className="grid .grid-cols-12 gap-4">
                        <div className="col-span-12 ">
                            <div>
                                <img src={university?.pictureSrc} alt="university-background" className='rounded-lg w-full h-[350px] object-cover' />
                                <div className="w-full flex items-end justify-center ">
                                    <img src={Images.reviewIcon} alt="review" className='w-8 h-8 sm:w-10 sm:h-10 me-10' />
                                    <img src={university?.logoSrc} alt="university-logo" className='w-[100px] h-[100px] sm:w-40 sm:h-40 -mt-20 rounded-full  shadow-xl border border-2 border-white' />
                                    <img src={Images.shareIcon} alt="review" className='w-8 h-8 sm:w-10 sm:h-10 ms-10' />

                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className='text-xl text-center font-semibold mb-1'>{university?.name}</p>
                                <p className='text-lg text-center mb-4'>{university?.type}, {university?.location?.country}</p>
                            </div>


                            {/* <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <button className='flex items-center rounded-md w-full p-2 border border-2 border-[var(--tail-shade-dark)]'>
                                        <img src={Images.shortListIcon} alt="short-list-icon" className='me-10  w-8' />
                                        <p>Short List</p>
                                    </button>
                                </div>
                                <div>
                                    <button className='rounded-md w-full p-3 bg-[var(--green-dark)] text-white'>Apply Now</button>
                                </div>
                                <div>
                                    <button className='rounded-md w-full p-3 border border-2 border-[var(--tail-shade-dark)]'>Review</button>
                                </div>
                                <div>
                                    <button className='rounded-md w-full p-3 border border-2 border-[var(--tail-shade-dark)]'>Refer to a friend</button>
                                </div>

                            </div> */}
                        </div>
                        <div className="col-span-12">
                            <div className="flex items-center shadow-lg bg-white rounded-lg p-4">
                                <img src={courseDetails?.schoolDetails?.schoolLogoSrc} alt="school-logo" className='w-20 h-20 object-contain' />
                                <div className='ms-4'>
                                    <p className="text-sm font-semibold mb-1">
                                        {courseDetails?.schoolDetails?.schoolName}
                                    </p>
                                    <p className="text-xs font-medium">
                                        {courseDetails?.schoolDetails?.DepartmentName}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="grid grid-cols-12 gap-2">
                                <div className="flex items-center col-span-12 sm:col-span-6">
                                    <img src={Images.rankingIcon} alt="" className='w-14' />
                                    <div className='ms-4'>
                                        <p className='text-xs font-semibold'>116</p>
                                        <p className='text-xs'>QS Ranking</p>
                                    </div>
                                </div>
                                <div className="flex items-center col-span-12  sm:col-span-6">
                                    <img src={Images.establishedYearIcon} alt="" className='w-14' />
                                    <div className='ms-4'>
                                        <p className='text-xs font-semibold'>{university?.establishedYear}</p>

                                    </div>
                                </div>
                                <div className="flex items-center col-span-12 sm:col-span-6" >
                                    <div className="w-10 h-10 me-4 flex justify-center items-center rounded-full border boder-2 border-[var(--beinge)]">
                                        <p className=" text-sm text-center font-semibold">{university.acceptanceRate + '%'}</p>
                                    </div>
                                    <div >

                                        <p className='text-xs font-semibold'>accepatance Rate</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-span-12 lg:col-span-8" ref={courseDetailsRef as React.LegacyRef<HTMLDivElement>}>
                    <div className="border-b border-b-2 border-b-[var(--tail-shade-dark)] mb-4">
                        <SectionHeading>Cource Details</SectionHeading>
                    </div>

                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <div className="flex">
                                <div className="w-20 rounded-lg border border-1 border-[var(--tail-shade-dark)]">
                                    <img src={Images.computerProgram} alt="" className='w-full' />

                                </div>
                                <div className='my-auto ml-4'>
                                    <p className='text-xl font-semibold'>{courseDetails?.name}</p>
                                    <p className='text-lg text-[var(--grey-shade-dark)]'>Computer science</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-3 gap-4 my-4">
                        <div>
                            <p className='text-xl font-semibold'>{courseDetails?.degree}</p>
                            <p className='text-lg text-[var(--grey-shade-dark)]'>Mode of Degree</p>
                        </div>
                        <div>
                            <p className='text-xl font-semibold'>{courseDetails?.duration}</p>
                            <p className='text-lg text-[var(--grey-shade-dark)]'>Duration</p>
                        </div>

                        <div>
                            <p className='text-xl font-semibold'>{moment(courseDetails.applicationDeadline).format('DD/MM/YYYY')}</p>
                            <p className='text-lg text-[var(--grey-shade-dark)]'>Application Deadline</p>
                        </div>



                    </div>


                    <div className="grid grid-cols-1 gap-4 ">
                        <SectionHeading>Fees Estimation</SectionHeading>
                        <div className="bg-white p-4 rounded-lg shadow-md  ">
                            <div className="flex justify-center items-center">
                                <p className='text-lg font-semibold me-4'>Tution Fee -</p>
                                <div>
                                    {courseDetails?.cost?.map((item: any, i: number) => {
                                        return <p key={i} className='text-lg '>{item?.lowerLimit}-{item?.upperLimit}/{item.name}</p>
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 ">
                        <SectionHeading>Required Documents</SectionHeading>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            {docsRequired.map((item, i) => {
                                return (
                                    <div key={i} className="flex items-center">
                                        <img
                                            src={Images.checkList}
                                            alt="check-gif-icon"
                                            className="w-10 "
                                        />
                                        <p>{item.value}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <button className='flex justify-center items-center rounded-md w-full p-2 border border-2 border-[var(--tail-shade-dark)] hover:bg-[var(--tail-shade-dark)] focus:bg-[var(--tail-shade-dark)]' onClick={() => {
                                if (universityId) {
                                    addToShortList(universityId, courseDetails._id)
                                }
                            }}>
                                <img src={Images.shortListIcon} alt="short-list-icon" className='me-4  w-7 ' />
                                <p className='text-center'>Short List</p>
                            </button>
                        </div>
                        <div>
                            <button className='rounded-md w-full p-3 bg-[var(--green-shade-dark)] text-white'>Apply Now</button>
                        </div>


                    </div>


                </div>
                <div className="col-span-12">
                    <SectionHeading>Fees Estimation</SectionHeading>
                    <div className=' p-4 rounded-lg border border-1 border-[var(--tail-shade-dark)]'>
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            <div className='flex flex-col items-center m-auto'>
                                <img src={Images.universityLogo} alt="" className='w-25 h-25' />
                                <p className='p-2 text-lg text-center font-bold'>Tution Fee</p>
                                <p className='text-center'>$500-$600</p>
                            </div>
                            <div className='flex flex-col items-center m-auto'>
                                <img src={Images.rentLogo} alt="" className='w-25 h-25' />
                                <p className='p-1 text-lg text-center font-bold'>Rent</p>
                                <p className='text-center'>$500-$600</p>
                            </div>
                            <div className=' flex flex-col items-center m-auto'>
                                <img src={Images.transportLogo} alt="" className='w-25 h-25' />
                                <p className='p-1 text-lg text-center font-bold'>Transport</p>
                                <p className='text-center'>$500-$600</p>
                            </div>
                            <div className='flex flex-col items-center m-auto'>
                                <img src={Images.foodLogo} alt="" className='w-25 h-25' />
                                <p className='p-1 text-lg text-center font-bold'>Food</p>
                                <p className='text-center'>$500-$600</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <SectionHeading>About</SectionHeading>
                    <p>{university?.about}</p>
                    <SectionHeading>Scholarship</SectionHeading>
                    <div className="rounded-lg border border-1 border-[var(--tail-shade-dark)] p-10 md:p-20">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-4 m-auto">
                                <img src={Images.loanLogo} alt="" />
                            </div>
                            <div className="col-span-12 md:col-span-8 my-auto">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12">
                                        <p className='text-3xl font-bold my-10 md:my-0'>Interest rates as low as 6%</p>
                                    </div>

                                    <div className="col-span-12 sm:col-span-6  lg:col-span-6 xl:col-span-4">
                                        <div className='bg-[var(--grey-shade-light)] rounded-lg p-4'>
                                            <p className='text-xl text-center font-semibold'>5000 + students</p>
                                            <p className='text-sm text-center '>Availed education loan</p>
                                        </div>
                                    </div>
                                    <div className="hidden xl:block xl:col-span-1 "></div>
                                    <div className="col-span-12 sm:col-span-6  lg:col-span-6 xl:col-span-4">
                                        <div className='bg-[var(--grey-shade-light)] rounded-lg p-4'>
                                            <p className='text-xl text-center font-semibold'>3000+ Cr</p>
                                            <p className='text-sm text-center '>Loan amount sanctioned</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between  my-8">
                        <div className='flex items-center '>
                            <SectionHeading>Available Cources</SectionHeading>
                            <div className="flex items-center">
                                <p className="mr-3 text-2xl font-medium text-gray-900 dark:text-gray-300 ms-10">PG</p>


                                <div>
                                    <label className="relative inline-flex items-center  cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer" onChange={(e) => {
                                            if (e.target.checked) {
                                                setFilterBy('bachelors')
                                            } else {
                                                setFilterBy('masters')
                                            }
                                        }} />

                                        <div className="w-40 h-[50px] p-2 border border-1 border-[var(--tail-shade-dark)] rounded-lg peer   dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:left-[70%] peer-checked:after:border-white after:content-[''] after:absolute after:top-1.5 after:left-[5px] after:bg-[var(--tail-shade-dark )] after:border-gray-300 after:border after:rounded-full after:bg-[var(--tail-shade-dark)] after:h-[40px] after:w-[40px] after:transition-all dark:border-gray-600 ]"></div>

                                    </label>
                                </div>
                                <p className="ml-3 text-2xl font-medium text-gray-900 dark:text-gray-300">UG</p>
                            </div>

                        </div>
                        <button onClick={() => {
                            setFilterBy(null)
                        }}>
                            clear filter
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {filteredCourses.length === 0 ? courses?.map((item: any, i: number) => {

                            return (
                                <div key={i} className="rounded-lg bg-[var(--beinge)] p-4">
                                    <CourseCard item={item} />
                                </div>
                            )
                        }) : filteredCourses?.map((item: any, i: number) => {

                            return (
                                <>
                                    {filteredCourses.length > 0 ? <div key={i} className="rounded-lg bg-[var(--beinge)] p-4">
                                        <CourseCard item={item} />
                                    </div> : <NoData heading='No data avaible' text='There are no available courses in this filter' />}
                                </>
                            )
                        })}
                    </div>

                    <SectionHeading>Meet Our Counsellor</SectionHeading>

                    <div {...swipable} ref={containerRef} className="flex gap-4 overflow-hidden mb-10">
                        {counsellors.data.map((item: any, i: number) => {
                            return <div key={i} className='min-w-[30%] rounded-lg border border-1 border-[var(--tail-shade-dark)] p-10 '>
                                <div className="flex gap-4 items-center pb-4 border-b border-b-2 border-dashed border-b-[var(--tail-shade-dark)]">
                                    <img src={item?.displayPicSrc} alt="counsellor" className='w-20 h-20 rounded-lg' />
                                    <div>
                                        <p className='text-xl font-semibold mb-2'>{item?.name}</p>
                                        <p className='text-lg'>{item?.userType}</p>
                                    </div>
                                </div>
                                <div className=' flex justify-center'>
                                    <p className='text-lg  font-bold text-[var(--grey-shade-dark)] mt-2 mx-10 '><span className='text-lg text-black'>{item?.numberOfStudentsAssisted}</span> Students succesffully Counselled</p>
                                </div>
                            </div>
                        })}

                    </div>
                    <CustomButton handleSubmit={() => { }}>Book Now</CustomButton>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col justify-center mt-10'>
                            <SectionHeading>Get In Touch</SectionHeading>
                        </div>
                        <div className="flex justify-between items-center ">
                            <img src={Images.websiteLogo} alt="" className='w-10 h-10 mx-4' />
                            <img src={Images.instaLogo} alt="" className='w-20 h-20 mx-4' />
                            <img src={Images.facebookLogo} alt="" className='w-10 h-10 mx-4' />
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
            <TopToast />
        </div>
    )
}

export default UniNCourceDetails