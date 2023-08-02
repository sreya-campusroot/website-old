import React, { Children, FC, ReactNode } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

interface ProtectedRouteProps {
    children: ReactNode
}
const Protected: FC<ProtectedRouteProps> = ({ children }) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    if (!token) {

        return <Navigate to='/' />

    }
    return <>
        {children}
    </>
}
export default Protected


