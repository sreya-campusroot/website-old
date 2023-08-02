import React from 'react'
import DocItem from './components/docItem'
import { CustomButton } from '../../../components/elements/actions'
import { PdfIcon } from '../../../assets/svgIcons'

const OtherDocs = () => {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 ml-auto'>
                <div>
                    <button className="flex items-center text-white bg-[var(--tail-shade-dark)] hover:bg-[var(--tail-shade-medium)] focus:outline-none focus:ring-4 focus:ring[var(--tail-shade-medium)] font-medium rounded-lg text-sm px-10 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <PdfIcon />
                        <p className="text-white ml-2">Upload Documents</p>

                    </button>
                </div>

            </div>
            <div className='col-span-12  md:col-span-6'>


                <DocItem />

            </div>
        </div>
    )
}

export default OtherDocs