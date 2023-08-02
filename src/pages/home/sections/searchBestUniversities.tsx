import React from 'react'
import Images from '../../../assets'
import { CustomButton } from '../../../components/elements/actions'
const SearchBestUniversities = () => {
    return (
        <div className="container mx-auto my-20">
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>

                <div className='sm:col-span-4 flex flex-col justify-center items-center'>
                    <img src={Images.searchBestuniversities} alt="education-loans" className='w-64 sm:w-full object-contain' />
                </div>
                <div className='sm:col-span-8 flex flex-col justify-center items-center lg:px-20 xl:px-40'>
                    <p className='text-3xl font-semibold text-center'>
                        Search for an best universities
                    </p>
                    <p className='text-xl py-4 text-center'>Find out about applicable
                        requirements& how to meet them to
                        study in abroad know more about
                        abroad universities</p>
                    <CustomButton handleSubmit={() => { }}>Save</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default SearchBestUniversities