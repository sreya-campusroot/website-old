import React from 'react'
import Images from '../../../../assets'

const ChatHeader = () => {
    return (
        <div className='flex items-center p-4 border-b border-b-1 border-b-[var(--black)]'>
            <img src={Images.person} alt="" className='w-20 h-20 rounded-full object-cover' />
            <p className="text-lg font-semibold ml-4">Akshay Kumar</p>
        </div>
    )
}

export default ChatHeader