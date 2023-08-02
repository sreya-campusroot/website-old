import React from 'react'
import { InlineWidget } from 'react-calendly'
import { useSelector } from 'react-redux'
import { AppState } from '../../../redux/appState'

const BookSlot = () => {
    const dashboard = useSelector((state: AppState) => state.dashboardReducer)
    const counsellor = dashboard?.data?.counsellor

    return (
        <div className="App">
            <InlineWidget url={counsellor?.appointmentLink
            } />
        </div>
    )
}

export default BookSlot