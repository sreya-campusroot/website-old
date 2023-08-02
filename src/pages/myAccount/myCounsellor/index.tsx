import React from 'react'
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import ReqStatus from './reqStatus';
import MyCounsellor from './myCounsellor';

const Counsellor = () => {
    return (
        <Tabs.Group
            aria-label="Full width tabs"
        // style="fullWidth"
        >
            <Tabs.Item
                active
                title="Request Status"
            >
                <ReqStatus />
            </Tabs.Item>
            <Tabs.Item

                title="My Counsellor"
            >
                <MyCounsellor />
            </Tabs.Item>


        </Tabs.Group>
    )
}

export default Counsellor