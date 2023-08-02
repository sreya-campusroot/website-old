import { Tabs } from 'flowbite-react'
import React from 'react'
import ListItem from './listItem'

const ChatsList = () => {
    return (
        <>
            <div className='bg-[var(--tail-shade-light)]'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                    return <ListItem />
                })}
            </div>
        </>
    )
}

export default ChatsList