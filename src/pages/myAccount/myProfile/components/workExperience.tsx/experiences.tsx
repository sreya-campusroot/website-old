import React, { FC, useState } from 'react'
import { SectionHeading } from '../../../../../assets/texts'
import { AddIcon } from '../../../../../assets/svgIcons'
import Images from '../../../../../assets'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../../../redux/appState'
import types from '../../../../../redux/types'
import CustomModal from '../../../../../components/elements/modal'

import EditExperiences from './editExperiences'
import NoData from '../../../../../components/layouts/noData'


interface Props {
    items: any[]
}
const Experiences: FC<Props> = ({ items }) => {
    const dispatch = useDispatch()
    const modal = useSelector((state: AppState) => state.modalReducer)
    const { modal_type } = modal

    const openAddExperienceModal = (items: string[]) => {

        dispatch({ type: types.MODAL_OPEN, payload: { modal_type: types.layout.EDIT_EXPERIENCES_FORM_MODAL, modal_data: { experiences: items } } })

    }

    // const openEditExperienceModal = (items: string[], item: any) => {

    //     dispatch({ type: types.MODAL_OPEN, payload: { modal_type: types.layout.EDIT_EXPERIENCES_FORM_MODAL, modal_data: { experiences: items, selectedExperience: item } } })

    // }

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between">
                <SectionHeading>Work Experience</SectionHeading>
                <div className='flex items-center'>
                    <button className='' onClick={() => {
                        openAddExperienceModal(items)
                    }}>
                        <AddIcon />
                    </button>
                    {/* <EditIcon /> */}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {items?.length ? <>
                    {items?.map((item: any) => {
                        console.log('experience id', item._id)
                        return <div className="p-4 flex border-b border-b-[var(--grey-shade-dark-2)] relative">
                            <img src={Images.experieceIcon} alt="" className='w-20 h-20' />
                            <div className='ms-4'>
                                <p className="text-xl font-semibold capitalize">{item?.companyName}</p>
                                <p className="text-lg capitalize">{item?.sector}, {item?.type}</p>
                                <p className="text-md text-[var(--grey-shade-dark-2)]">
                                    {moment(item?.startDate).format('LL')}-{moment(item?.endDate).format('LL')}
                                </p>
                            </div>
                            {/* <div className="absolute top-4 right-4">
                                <button onClick={() => {
                                    const experienceId = item._id
                                    const experience = items.filter((item) => {
                                        return item._id === experienceId
                                    })
                                    openEditExperienceModal(items, experience)
                                }}>
                                    <EditIcon />
                                </button>
                            </div> */}
                        </div>
                    })}
                </> : <NoData img={Images.experieceIcon} heading='There is nothing to show here' text={`Add your work Experience to get more benefits`} />}
            </div>
            {

                modal_type === types.layout.EDIT_EXPERIENCES_FORM_MODAL && <CustomModal> <EditExperiences /> </CustomModal>


            }
        </>
    )
}

export default Experiences