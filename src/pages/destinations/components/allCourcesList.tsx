import React from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/appState';
import { SectionHeading } from '../../../assets/texts';
import { useNavigate } from 'react-router-dom';

const AllCourcesList = () => {
    const navigate = useNavigate()

    const modal = useSelector((state: AppState) => state.modalReducer);

    const constants = useSelector((state: AppState) => state.constantsReducer);

    const { modal_data } = modal;
    const { universityDetails } = modal_data;

    return (
        <div className='grid grid-cols-1'>
            <SectionHeading>{universityDetails?.name} ({universityDetails?.courses?.length})</SectionHeading>

            <div className='border-t border-t-[var(--tail-shade-dark)] p-4 '>
                {universityDetails?.courses?.map((item: any) => {
                    return <div className="flex justify-between">
                        <div className="text-medium text-lg fomt-semibold">{item.name}</div>
                        <button className="text-medium text-sm font-medium"
                            onClick={() => {
                                navigate('/destinations/country/university-details')
                                localStorage.setItem('universityId', universityDetails?._id)
                                localStorage.setItem('courseId', item?._id)
                            }}
                        >
                            View Details
                        </button>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllCourcesList