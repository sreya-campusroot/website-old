import React, { FC } from 'react'
import { SectionHeading } from '../../../../../assets/texts'
import { AddIcon, EditIcon } from '../../../../../assets/svgIcons'
import Images from '../../../../../assets'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../../../redux/appState'
import types from '../../../../../redux/types'
import CustomModal from '../../../../../components/elements/modal'
import { CoursePreferrenceForm } from '../modalInputs'
import EditEducation from './editEducation'
import NoData from '../../../../../components/layouts/noData'


interface Props {
    items: any[]
}
const Education: FC<Props> = ({ items }) => {
    const dispatch = useDispatch()
    const modal = useSelector((state: AppState) => state.modalReducer)
    const { modal_type } = modal
    const openEditExperienceModal = (items: string[]) => {

        dispatch({ type: types.MODAL_OPEN, payload: { modal_type: types.layout.EDIT_EDUCATIONS_FORM_MODAL, modal_data: { educations: items } } })

    }
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between">
                <SectionHeading>Education</SectionHeading>
                <div className='flex'>
                    <button onClick={() => {
                        openEditExperienceModal(items)
                    }}>
                        <AddIcon />
                    </button>
                    {/* <EditIcon /> */}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {items?.length ? <>{items?.map((item: any) => {
                    return <div className="p-4 flex border-b border-b-[var(--grey-shade-dark-2)]">
                        <img src={Images.experieceIcon} alt="" className='w-20 h-20' />
                        <div className='ms-4'>
                            <p className="text-xl font-semibold">{item?.school}</p>
                            <p className="text-lg">{item?.course}, {item?.courseDuration} Months</p>
                            <p className="text-md capitalize">{item?.degree},{item?.endScore}/{item?.maxScore}</p>
                            <p className="text-xs text-[var(--grey-shade-dark-2)]">
                                {moment(item?.startDate).format('LL')}-{moment(item?.endDate).format('LL')}
                            </p>
                        </div>
                    </div>
                })}</> : <NoData img={Images.experieceIcon} heading='There is nothing to show here' text={`Add your Education to get more benefits`} />}
            </div>
            {

                modal_type === types.layout.EDIT_EDUCATIONS_FORM_MODAL && <CustomModal> <EditEducation /> </CustomModal>


            }
        </>
    )
}

export default Education