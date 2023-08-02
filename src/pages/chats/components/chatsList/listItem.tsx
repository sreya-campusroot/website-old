import { Tabs } from 'flowbite-react'
import React from 'react'
import Images from '../../../../assets'

const ListItem = () => {
    return (
        <>

            <button className='w-full text-start focus:bg-white'>
                <div className="flex items-center border-b border-b-1 border-b-[var(--grey-shade-dark)] p-4">
                    <img className="w-20 h-20 rounded-full object-cover" src={Images.person} alt="user-dp" />
                    <div className='ml-4'>
                        <p className="capitalize  text-lg font-semibold">Nirmala</p>
                        <p className="capitalize text-md ">BS,Computer Science</p>
                        <p className="capitalize text-sm text-[var(--grey-shade-dark-2)]">hello, how are you?</p>
                    </div>
                </div>
            </button>

        </>
    )
}

export default ListItem