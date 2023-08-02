import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Images from '../../assets'

interface ButtonProps {
    children: ReactNode,
    handleSubmit: () => void

}
interface LinkProps {
    label: string,
    path: string,
    icon?: ReactNode

}
const CustomButton: FC<ButtonProps> = ({ children, handleSubmit }) => {
    return (
        <div className="flex w-full">
            <button type="button" className="mx-auto text-white bg-[var(--tail-shade-dark)] hover:bg-[var(--tail-shade-medium)] focus:outline-none focus:ring-4 focus:ring[var(--tail-shade-medium)] font-medium rounded-lg text-sm px-10 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
                handleSubmit()
            }}>{children}</button>
        </div>
    )
}

const CustomLink: FC<LinkProps> = ({ label, path, icon }) => {
    return (
        <div className="flex items-center  mx-auto text-white bg-[var(--tail-shade-dark)] hover:bg-[var(--tail-shade-medium)] focus:outline-none focus:ring-4 focus:ring[var(--tail-shade-medium)] font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Link to={path} >{label}</Link>
            {/* {icon === "gg" && */}
            <img src={Images.btnArrow} alt="btn-arrow" className='w-8 ml-2' />
            {/* } */}
        </div>
    )
}

export { CustomButton, CustomLink }