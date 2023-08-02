import React from 'react'
import { DeleteIcon } from '../../../../assets/svgIcons'

const DocItem = () => {
    return (
        <div className='p-4 rounded-lg bg-[var(--tail-shade-light)] flex justify-between items-center shadow-sm'>

            <div className='flex items-center'>
                <button className="w-20 h-20 border-r-2 p-4 pe-8 flex justify-center items-center">
                    <DeleteIcon />
                </button>
                <div className=' ml-4 '>
                    <p className="text-xl font-semibold mb-2">Graduation.pdf</p>
                    <div className="flex items-center">
                        <div className='pe-4 border-r-2'>
                            <p className="text-lg">
                                22/07/2021
                            </p>
                        </div>
                        <div className='ps-4 '>
                            <p className="text-lg">
                                54.30 KB
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='w-20 h-20 bg-white rounded-full p-4 flex items-center shadow-sm'>
                <svg className="m-auto w-6 h-6 text-[var(--tail-shade-dark)] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4" />
                </svg>
            </button>

        </div>
    )
}

export default DocItem