import React, { FC } from 'react'
interface NoDataProps {
    img?: any,
    heading?: string,
    text?: string
}
const NoData: FC<NoDataProps> = ({ img, heading, text }) => {
    return (
        <div className='w-full h-[100%] rounded-md p-4 border-2 flex flex-col justify-center items-center'>
            {img && <img src={img} alt="" className='w-20 h-20' />}
            {heading && <p className="py-2 text-md font-medium text-center">{heading}</p>}
            {text && <p className=" text-sm text-medium text-center">{text}</p>}
        </div>
    )
}

export default NoData