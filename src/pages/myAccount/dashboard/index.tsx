import React, { useEffect } from 'react'
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import Overview from './overview';
import ShortListed from './shortListed';
import Applied from './applied';
import Decision from './decision';
import { dashboardEndPoint } from '../../../services/endPoints';
import api from '../../../services/baseUrl';
import { getHeaders } from '../../../services';
import { useDispatch } from 'react-redux';

import types from '../../../redux/types';


const Dashboard = () => {
    const dispatch = useDispatch()

    const getDashboard = async () => {

        dispatch({ type: types.DASHBOARD_LOADING })
        const headers = getHeaders()
        try {
            const { data } = await api.get(dashboardEndPoint(), headers)
            console.log('dashboard res', data.data);

            if (data.success) {
                dispatch({ type: types.DASHBOARD_SUCCESS, payload: data.data })
            }

        }
        catch (err) {
            dispatch({ type: types.DASHBOARD_SUCCESS, payload: err })
        }

    }

    useEffect(() => {
        getDashboard()
    }, [])


    return (
        <>
            <Tabs.Group
                aria-label="Full width tabs"
            // style="fullWidth"
            >
                <Tabs.Item
                    active
                    title="Overview"

                >
                    <Overview />
                </Tabs.Item>
                <Tabs.Item

                    title="short Listed"
                >
                    <ShortListed />
                </Tabs.Item>
                <Tabs.Item
                    active
                    title="Applied"
                >
                    <Applied />
                </Tabs.Item>
                <Tabs.Item
                    active
                    title="Decisions"
                >
                    <Decision />
                </Tabs.Item>


            </Tabs.Group>
        </>
    )
}

export default Dashboard