import React, { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface tabProps {
    path: string,
    name: string
}
interface CustumTabsProps {
    tabs: tabProps[]
}
const CustomTabs: FC<CustumTabsProps> = ({ tabs }) => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <div className="col-span-12">
                    <div className="flex gap-2 flex-nowrap">
                        {tabs.map((tab: tabProps) => {
                            return <Link to={tab.path}>{tab.name}</Link>
                        })}

                    </div>
                </div>
                <div className="col-span-12">
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default CustomTabs