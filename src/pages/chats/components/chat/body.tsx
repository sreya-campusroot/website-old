import React from 'react'
import { AddIcon } from '../../../../assets/svgIcons'
import Images from '../../../../assets'

const ChatBody = () => {
    return (
        <div className=' flex flex-col justify-between h-[100%]'>

            <div className='min-h-[80%]]'>

            </div>


            <div className='flex justify-between items-center p-4 rounded-b-lg  bg-[var(--beinge-shade-light)]'>
                <div className='w-[10%]'>
                    <button className="w-[60px] h-[60px] rounded-full bg-[var(--tail-shade-dark)] flex items-center justify-center text-white">
                        <AddIcon />
                    </button>
                </div>
                <div className='w-[90%] flex items-center'>

                    <input type="text" className='w-[90%] bg-white rounded-lg p-4 focus:outline-0 focus:border-[var(--tail-shade-dark)]' placeholder='Type here..' />

                    <button className='w-10%'>
                        <img src={Images.sendIcon} alt="send-message" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ChatBody