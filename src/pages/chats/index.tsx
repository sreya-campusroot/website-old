import React from 'react'
import ChatsList from './components/chatsList/index'
import ChatComp from './components/chat'
import { Tabs } from 'flowbite-react'

const Chats = () => {
    return (
        <div className='container mx-auto h-[80vh]'>
            <div className="grid grid-cols-12 gap-4 h-[100%]">
                <div className="col-span-5 h-[100%] overflow-y-auto">
                    <div className="grid grid-cols-1 h-[100%]" >

                        <div className='h-[100%%] '>
                            <Tabs.Group
                                aria-label="Full width tabs"

                            >
                                <Tabs.Item
                                    active
                                    title="Students"

                                >
                                    <ChatsList />
                                </Tabs.Item>
                                <Tabs.Item

                                    title="Team Member"
                                >

                                </Tabs.Item>
                                <Tabs.Item
                                    active
                                    title="Counsellor"
                                >

                                </Tabs.Item>



                            </Tabs.Group>

                        </div>

                    </div>
                </div>
                <div className="col-span-7">
                    <ChatComp />
                </div>
            </div>
        </div>
    )
}

export default Chats