import React from 'react'
import Images from '../../../assets'
import { CustomButton } from '../../../components/elements/actions'

const EducationLoans = () => {
    return (

        <div className="container mx-auto my-20">
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-4 grid-reverse'>
                <div className='sm:col-span-8 flex flex-col justify-center items-center lg:px-20 xl:px-40'>
                    <p className='text-3xl font-semibold text-center'>
                        Get education loans
                    </p>
                    <p className='text-xl py-4 text-center'>Find out the banks which provides
                        education loan and get education
                        loan</p>
                    <CustomButton handleSubmit={() => { }}>Save</CustomButton>
                </div>

                <div className='sm:col-span-4 flex flex-col justify-center items-center'>
                    <img src={Images.educationLoans} alt="education-loans" className='w-64 sm:w-full object-contain' />
                </div>

            </div>
        </div>
    )
}

export default EducationLoans