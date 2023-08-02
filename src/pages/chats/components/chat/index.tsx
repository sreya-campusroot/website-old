import React from 'react'
import ChatHeader from './header'
import ChatBody from './body'

const ChatComp = () => {
    return (
        <div className='grid grid-1 min-h-[100%] '>
            <div className="rounded-lg  bg-[var(--grey-shade-light-2)] min-h-[100%]">
                <div className='h-[100px]'>
                    <ChatHeader />
                </div>
                <div className='h-[calc(100%-100px)]'>
                    <ChatBody />
                </div>

            </div>
        </div>
    )
}

export default ChatComp