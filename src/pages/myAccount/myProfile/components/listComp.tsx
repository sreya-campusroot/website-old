import React, { FC } from 'react'
import { SectionHeading } from '../../../../assets/texts'
import types from '../../../../redux/types'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../../redux/appState'
import CustomModal from '../../../../components/elements/modal'
import { CountryPreferrenceForm, CoursePreferrenceForm, SkillsForm } from './modalInputs'
import { openModal } from '../../../../services'
import NoData from '../../../../components/layouts/noData'

interface PreferenceCompProps {
    label: string,
    items: string[],
    preference?: any,
}
const PreferencesComp: FC<PreferenceCompProps> = ({ label, preference, items }) => {
    const dispatch = useDispatch()
    const modal = useSelector((state: AppState) => state.modalReducer)
    const { modal_type } = modal
    const openFormModal = (items: string[]) => {
        if (label === 'Courses Preffered (Upto 3)') {
            dispatch({ type: types.MODAL_OPEN, payload: { modal_type: types.layout.COURSE_PREFERENCE_FORM_MODAL, modal_data: { courses: items, preference: preference } } })
        } else if (label === 'Countries Preffered (Upto 3)') {
            dispatch({ type: types.MODAL_OPEN, payload: { modal_type: types.layout.COUNTRY_PREFERENCE_FORM_MODAL, modal_data: { countries: items, preference: preference } } })
        } else if (label === 'Skills (Upto 3)') {
            dispatch({ type: types.MODAL_OPEN, payload: { modal_type: types.layout.SKILLS_FORM_MODAL, modal_data: { skills: items } } })
        }
    }
    return (
        <>
            <div className='py-4 rounded-lg '>
                <div className="flex items-center">
                    <SectionHeading>{label}</SectionHeading>
                    <button className='w-20 my-auto' onClick={() => {
                        openFormModal(items)
                    }}>
                        <p className='text-[var(--beinge)] font-bold text-center'>ADD +</p>
                    </button>
                </div>
                {items?.length ? <div className="flex flex-wrap gap-4 border-b border-b-[var(--grey-shade-dark-2)] pb-4">
                    {items?.length && items.map((item) => {
                        return <div className="p-2 border border-2 border-[var(--tail-shade-dark)] rounded-md min-w-[100px]">
                            <p className="text-sm text-center capitalize">
                                {item}
                            </p>
                        </div>
                    })}


                </div> : <div className='h-[100px]'><NoData heading='There is nothing to show here' text={`Add ${label} or more to get more benefits`} /></div>}
                {

                    modal_type === types.layout.COURSE_PREFERENCE_FORM_MODAL ? <CustomModal> <CoursePreferrenceForm preference={preference} /></CustomModal> : modal_type === types.layout.COUNTRY_PREFERENCE_FORM_MODAL ? <CustomModal>
                        <CountryPreferrenceForm preference={preference} />
                    </CustomModal> : modal_type === types.layout.SKILLS_FORM_MODAL ? <CustomModal><SkillsForm /></CustomModal> : null


                }
            </div>
        </>

    )
}

export default PreferencesComp